// const { title } = require('process');
// const { DataTypes } = require('sequelize');

// module.exports = model;

// function model(sequelize) {
//     const attributes = {
//         email: { type: DataTypes.STRING, allowNull: false },
//         passwordHash: { type: DataTypes.STRING, allowNull: false },
//         title: { type: DataTypes.STRING, allowNull: false },
//         firstName: { type: DataTypes.STRING, allowNull: false },
//         lastName: { type: DataTypes.STRING, allowNull: false },
//         role: { type: DataTypes.STRING, allowNull: false }
//     };

//     const options = {
//         defaultScope: {
//             //exclude password hash by default
//             attributes: { exclude: ['passwordHash']}
//         },
//         scopes: {
//             //include hash with this scope
//             withHash: { attributes: {}, }
//         }
//     };

//     return sequelize.define('Users', attributes, options);
// }



/////////////////////////////////////////////////////////////
// import { Sequelize, DataTypes, Model, Optional } from 'sequelize';

// // Define the attributes of the User model
// interface UserAttributes {
//   id?: number;
//   email: string;
//   passwordHash: string;
//   title: string;
//   firstName: string;
//   lastName: string;
//   role: string;
// }

// // Define the attributes required for creating a User (id is optional)
// interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

// // Define the User model class
// class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
//   public id!: number;
//   public email!: string;
//   public passwordHash!: string;
//   public title!: string;
//   public firstName!: string;
//   public lastName!: string;
//   public role!: string;
// }

// // Function to initialize the User model
// export function initializeUserModel(sequelize: Sequelize): typeof User {
//   User.init(
//     {
//       id: {
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         primaryKey: true,
//       },
//       email: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         unique: true, // Ensure email is unique
//         validate: {
//           isEmail: true, // Validate email format
//         },
//       },
//       passwordHash: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       title: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       firstName: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       lastName: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       role: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         defaultValue: 'User', // Default role
//       },
//     },
//     {
//       sequelize,
//       modelName: 'User',
//       defaultScope: {
//         attributes: { exclude: ['passwordHash'] }, // Exclude password hash by default
//       },
//       scopes: {
//         withHash: { attributes: { include: ['passwordHash'] } }, // Include passwordHash when needed
//       },
//     }
//   );

//   return User;
// }

// // Export the User model for use in services
// export { User };
import "reflect-metadata"; 
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("Users")
export class User {
  @PrimaryGeneratedColumn()
  id!: number;  // Use '!' to tell TypeScript it's initialized by TypeORM

  @Column({ unique: true })
  email!: string;

  @Column()
  passwordHash!: string;

  @Column()
  title!: string;

  @Column()
  firstName!: string;

  @Column()
  lastName!: string;

  @Column({ default: "User" })
  role!: string;
}


