import conf from "@/config/env-config";
import { Client, Databases, ID } from "appwrite";

export class Service {
  client = new Client();
  databases;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteURL)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
  }

  async createEmail({ email }: { email: string }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        ID.unique(),
        {
          email,
        }
      );
    } catch (error) {
      console.log(error);
    }
  }
}

const service = new Service();
export default service;
