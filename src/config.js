import dotenv from "dotenv";
dotenv.config();

export const config = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'Joseph',
  password: process.env.DB_PASSWORD || 'J0s3ph@2004#21',
  database: process.env.DB_DATABASE || 'taskdb',
  port: process.env.DB_PORT || 3306,
};