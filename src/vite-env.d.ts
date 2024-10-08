/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_GHN_KEY: string
    readonly VITE_SHOP_ID: string
    readonly VITE_GHN_URL: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}