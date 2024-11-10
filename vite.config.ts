import react from '@vitejs/plugin-react-swc';
import { fileURLToPath, URL } from 'url';
import { defineConfig, loadEnv } from 'vite';

export const unSlash = (str: string) => String(str).replace(/(\/$)|(^\/)/g, "");
export const addSlash = (str: string) => unSlash(str).replace(/^/, "/");


const env = loadEnv("mock", process.cwd(), "");
const basename = addSlash(env.VITE_BASENAME || "");

console.log(basename)

// https://vitejs.dev/config/
export default defineConfig({
  base: basename,
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('.', import.meta.url))
    }
  }
})

