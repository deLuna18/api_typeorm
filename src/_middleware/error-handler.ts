// module.exports = errorHandler;

// function errorHandler(err, req, res, next) {
//     switch (true) {
//         case typeof err === 'string':
//             //custom application error
//             const is404 = err.toLowerCase().endsWith('not found');
//             const statusCode = is404 ? 404 : 400;
//             return res.status(statusCode).json({ messageL: err });
//         default:
//             return res.status(500).json({ message: err.message });
//     }
// }

// CONVERTING TO TS-TYPEORM
import { Request, Response, NextFunction } from 'express';

export function errorHandler(err: unknown, req: Request, res: Response, next: NextFunction): void {
  let statusCode = 500;
  let message = 'Internal Server Error';

  if (typeof err === 'string') {
    const is404 = err.toLowerCase().endsWith('not found');
    statusCode = is404 ? 404 : 400;
    message = err;
  } else if (err instanceof Error) {
    message = err.message;
  }

  res.status(statusCode).json({ message });

  return;
}


