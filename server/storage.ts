import { users, type User, type InsertUser, type DeletionRequest, type InsertDeletionRequest } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createDeletionRequest(request: InsertDeletionRequest): Promise<DeletionRequest>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private deletionRequests: Map<number, DeletionRequest>;
  currentId: number;
  currentDeletionRequestId: number;

  constructor() {
    this.users = new Map();
    this.deletionRequests = new Map();
    this.currentId = 1;
    this.currentDeletionRequestId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  async createDeletionRequest(request: InsertDeletionRequest): Promise<DeletionRequest> {
    const id = this.currentDeletionRequestId++;
    const now = new Date();
    const deletionRequest: DeletionRequest = {
      ...request,
      id,
      createdAt: now,
      processed: false,
      processedAt: null
    };
    this.deletionRequests.set(id, deletionRequest);
    return deletionRequest;
  }
}

export const storage = new MemStorage();
