// require('rootpath')();
// const express = require('express');
// const app = express();
// const cors = require('cors');
// const errorHandler = require('_middleware/error-handler');

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cors());

// // apt routes
// app.use('/users', require('./users/users.controller'));

// // Global error handler
// app.use(errorHandler);

// //start server
// const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
// app.listen(port, () => console.log('Server listening on port ' + port));

//CONVERTING TO TS-TYPEORM
import express from 'express';
import cors from 'cors';
import usersController from './users/users.controller';
import { errorHandler } from './_middleware/error-handler';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// apt routes
app.use('/users', usersController);

// Global error handler
app.use(errorHandler as express.ErrorRequestHandler);

//start server
const PORT = process.env.NODE_ENV === 'production' ? Number(process.env.PORT) || 80 : 4000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

