-- Blog schema for LJD Corporation site.
-- Applied to the Supabase project directly (via MCP or the SQL editor); kept here for reference.

create table if not exists categories (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null,
  description text,
  created_at timestamptz not null default now()
);

create table if not exists articles (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  excerpt text,
  content text not null,
  category_id uuid references categories(id) on delete set null,
  cover_image_url text,
  status text not null default 'draft' check (status in ('draft', 'published')),
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists articles_category_id_idx on articles(category_id);
create index if not exists articles_status_idx on articles(status);

create or replace function set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists articles_set_updated_at on articles;
create trigger articles_set_updated_at
before update on articles
for each row execute function set_updated_at();

alter table categories enable row level security;
alter table articles enable row level security;

drop policy if exists "Public read categories" on categories;
create policy "Public read categories" on categories for select using (true);

drop policy if exists "Public read published articles" on articles;
create policy "Public read published articles" on articles for select using (status = 'published');

notify pgrst, 'reload schema';
