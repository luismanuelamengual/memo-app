import { DB, PostgresDataSource } from '@neogroup/database-connector';

let source;
if (!source) {
  source = new PostgresDataSource();
  source.setHost(String(process.env.POSTGRES_SOURCE_HOST));
  source.setDatabaseName(String(process.env.POSTGRES_SOURCE_DATABASE_NAME));
  source.setUsername(String(process.env.POSTGRES_SOURCE_USERNAME));
  source.setPassword(String(process.env.POSTGRES_SOURCE_PASSWORD));
  source.setDebugEnabled(false);
  DB.register(source);
}

export default DB;
