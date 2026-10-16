import { sqliteAdapter } from '@payloadcms/db-sqlite';
import { postgresAdapter } from '@payloadcms/db-postgres';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import path from 'path';
import { buildConfig } from 'payload';
import { fileURLToPath } from 'url';
import sharp from 'sharp';
import { migrations } from "./migrations";

import { Users } from './collections/Users';
import { Media } from './collections/Media';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const sqlite = sqliteAdapter({
  client: {
    url: process.env.DATABASE_URL || '',
  },
});

const postgres = postgresAdapter({
  pool: {
    connectionString: process.env.DATABASE_URL || '',
  },
  prodMigrations: migrations
});

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: process.env.DATABASE_URL?.includes("postgres://") ? postgres : sqlite,
  sharp,
  plugins: [],
});
