import 'reflect-metadata';
import { DataSource } from 'typeorm';
import config from '../../config.json';
import { User } from "../users/user.model";

const { host, port, user, password, database } = config.database;

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: host,
  port: Number(port),
  username: user,
  password: password,
  database: database,
  synchronize: true, 
  logging: true,
  entities: [User],
  migrations: [],
  subscribers: [],
});

AppDataSource.initialize()
  .then(() => console.log('Database connected and models synchronized.'))
  .catch((error) => console.error('Error connecting to the database:', error));
