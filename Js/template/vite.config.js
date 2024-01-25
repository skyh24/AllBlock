import { defineConfig } from 'vite';
import dotenv from 'dotenv';

dotenv.config(); // load env vars from .env

export default defineConfig({
  define: {
    PRIVKEY: `"${process.env.PRIVKEY}"`,
  },
  //....
});