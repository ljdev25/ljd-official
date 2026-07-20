"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { timingSafeEqual } from "crypto";
import {
  createSessionToken,
  SESSION_COOKIE_NAME,
  SESSION_MAX_AGE,
} from "@/lib/session";
import {
  createArticle,
  updateArticle,
  deleteArticle,
  setArticleStatus,
} from "@/lib/articles";
import {
  createCategory,
  updateCategory,
  deleteCategory,
} from "@/lib/categories";
import { uploadArticleImage } from "@/lib/storage";

function safeCompare(a, b) {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  if (bufA.length !== bufB.length) return false;
  return timingSafeEqual(bufA, bufB);
}

export async function loginAction(prevState, formData) {
  const username = formData.get("username")?.toString() || "";
  const password = formData.get("password")?.toString() || "";

  const validUsername = safeCompare(username, process.env.ADMIN_USERNAME || "");
  const validPassword = safeCompare(password, process.env.ADMIN_PASSWORD || "");

  if (!validUsername || !validPassword) {
    return { error: "Invalid username or password" };
  }

  const token = await createSessionToken(username);
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_MAX_AGE,
  });

  redirect("/admin");
}

export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE_NAME);
  redirect("/admin/login");
}

export async function createArticleAction(data) {
  const article = await createArticle(data);
  revalidatePath("/admin");
  revalidatePath("/blog");
  return article;
}

export async function updateArticleAction(id, data) {
  const article = await updateArticle(id, data);
  revalidatePath("/admin");
  revalidatePath("/blog");
  return article;
}

export async function deleteArticleAction(id) {
  await deleteArticle(id);
  revalidatePath("/admin");
  revalidatePath("/blog");
}

export async function toggleStatusAction(id, status) {
  const article = await setArticleStatus(id, status);
  revalidatePath("/admin");
  revalidatePath("/blog");
  return article;
}

export async function createCategoryAction(data) {
  const category = await createCategory(data);
  revalidatePath("/admin/categories");
  revalidatePath("/blog");
  return category;
}

export async function updateCategoryAction(id, data) {
  const category = await updateCategory(id, data);
  revalidatePath("/admin/categories");
  revalidatePath("/blog");
  return category;
}

export async function deleteCategoryAction(id) {
  await deleteCategory(id);
  revalidatePath("/admin/categories");
  revalidatePath("/blog");
}

export async function uploadImageAction(formData) {
  const files = formData.getAll("files");
  const urls = [];
  for (const file of files) {
    if (file instanceof File && file.size > 0) {
      urls.push(await uploadArticleImage(file));
    }
  }
  return urls;
}
