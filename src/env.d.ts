/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly LIREST_API_URL: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
