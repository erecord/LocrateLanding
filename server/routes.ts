import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { deleteAccountSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Account deletion request endpoint
  app.post("/api/account-deletion", async (req, res) => {
    try {
      const validData = deleteAccountSchema.parse(req.body);
      const deletionRequest = await storage.createDeletionRequest(validData);
      res.status(200).json({ success: true, message: "Deletion request received", id: deletionRequest.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: error.errors 
        });
      } else {
        console.error("Error processing deletion request:", error);
        res.status(500).json({ 
          success: false, 
          message: "Internal server error" 
        });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
