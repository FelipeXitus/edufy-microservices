import { sql, type Kysely } from 'kysely';

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .withSchema('users')
    .createTable('users')
    .addColumn('sub_id', 'uuid')
    .addColumn('email', 'text', (col) => col.notNull().unique().primaryKey())
    .addColumn('first_name', 'text', (col) => col.notNull())
    .addColumn('last_name', 'text', (col) => col.notNull())
    .addColumn('role', 'text')
    .addColumn('biography', 'text')
    .addColumn('interests', 'jsonb', (col) => col.defaultTo(sql`'[]'::jsonb`))
    .addColumn('profilePictureUrl', 'text')
    .addColumn('created_at', 'timestamptz', (col) =>
      col.notNull().defaultTo(sql`now()`),
    )
    .addColumn('updated_at', 'timestamptz', (col) =>
      col.notNull().defaultTo(sql`now()`),
    )
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.withSchema('users').dropTable('users').execute();
}
