const conf = {
    apiKey: String(import.meta.env.VITE_apiKey,
    authDomain: String(import.meta.env.VITE_authDomain),
    projectId: String(import.meta.env.VITE_projectId),
    storageBucket: String(import.meta.env.VITE_storageBucket),
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    TinyMCE_APIKey: String(import.meta.env.VITE_TinyMCE_APIKey)
}
export default conf;