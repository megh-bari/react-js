import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteEndPointUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      if (userAccount) {
        // call another method

        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      console.error("Error creating account:", error);
      throw new Error("Failed to create account. Please try again.");
    }
  }

  async login(email, password) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.error("Error logging in:", error);
      throw new Error("Login failed. Please check your credentials.");
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.error("Appwrite service:: getCurrentUser::error:", error);
    }
    return null;
  }

  async logOut() {
    try {
      await this.account.deleteSessions("current");
      console.log("User logged out successfully.");
    } catch (error) {
      console.error("Error logging out:", error);
      throw new Error("Logout failed. Please try again.");
    }
  }
}

const authService = new AuthService();

export default authService;
