const conf = {
  appwriteURL: process.env.NEXT_PUBLIC_APPWRITE_URI || "",
  appwriteProjectId: process.env.NEXT_PUBLIC_PROJECT_ID || "",
  appwriteCollectionId: process.env.NEXT_PUBLIC_COLLECTION_ID || "",
  appwriteDatabaseId: process.env.NEXT_PUBLIC_DATABASE_ID || "",
};

export default conf;
