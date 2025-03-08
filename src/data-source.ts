

import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from "./users/user.model"; 

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'node-mysql-crud-api',
  synchronize: true,
  logging: true,
  entities: [User],
  migrations: [],
  subscribers: [],
});

AppDataSource.initialize()
  .then(() => console.log('Database connected!'))
  .catch((error) => console.log(error));
