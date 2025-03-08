// const bcrypt = require('bcryptjs');
// const db = require('_helpers/db');

// module.exports = {
//     getAll,
//     getById,
//     create,
//     update,
//     delete: _delete 
// };

// async function getAll() {
//     return await db.User.findAll();
// }

// async function getById(id){
//     return await getUser(id);
// }

// async function create(params){
//     // validate
//     if (await db.User.findOne({ where: {email:params.email}})){
//         throw 'Email "' + params.email + '" is already registered'; 
//     }

//     const user = new db.User(params);

//     //hash password
//     user.passwordHash = await bcrypt.hash(params.password, 10);

//     //save user
//     await user.save();
// }

// async function update(id, params){
//     const user = await getUser(id);

//     //validate 
//     const usernameChanged = params.username && user.username !== params.username;
//     if (usernameChanged && await db.User.findOne({ where: { username: params.username }})){
//         throw 'Username "' + params.username + '" is already taken';
//     }

//     //hash password if it was entered
//     if (params.password) {
//         params.passwordHash = await bcrypt.hash(params.password, 10);
//     }

//     // copy params to user and save
//     Object.assign(user, params);
//     await user.save();
// }

// async function _delete(id){
//     const user = await getUser(id);
//     await user.destroy();
// }

// //helper functions

// async function getUser(id){
//     const user = await db.User.findByPk(id);
//     if(!user) throw 'User not found';
//     return user;
// }

// CONVERTING TO TS-TYPEORM
import bcrypt from 'bcryptjs';
import { AppDataSource } from '../data-source';
import { User } from './user.model';

const userRepository = AppDataSource.getRepository(User);

export const userService = {
  getAll,
  getById,
  create,
  update,
  delete: _delete,
};

async function getAll(): Promise<User[]> {
  return await userRepository.find();
}

async function getById(id: number): Promise<User> {
  return await getUser(id);
}

async function create(params: { email: string; password: string; [key: string]: any }): Promise<void> {
  if (await userRepository.findOne({ where: { email: params.email } })) {
    throw new Error(`Email "${params.email}" is already registered`);
  }

  const user = userRepository.create(params);

  user.passwordHash = await bcrypt.hash(params.password, 10);

  await userRepository.save(user);
}

async function update(id: number, params: { email?: string; password?: string; [key: string]: any }): Promise<void> {
  const user = await getUser(id);

  const emailChanged = params.email && user.email !== params.email;
  if (emailChanged && (await userRepository.findOne({ where: { email: params.email } }))) {
    throw new Error(`Email "${params.email}" is already taken`);
  }

  if (params.password) {
    params.passwordHash = await bcrypt.hash(params.password, 10);
  }

  Object.assign(user, params);
  await userRepository.save(user);
}

async function _delete(id: number): Promise<void> {
  const user = await getUser(id);
  await userRepository.remove(user);
}

async function getUser(id: number): Promise<User> {
  const user = await userRepository.findOne({ where: { id } });
  if (!user) throw new Error('User not found');
  return user;
}
