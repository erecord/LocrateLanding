import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Account deletion request schema
export const deletionRequests = pgTable("deletion_requests", {
  id: serial("id").primaryKey(),
  email: text("email").notNull(),
  name: text("name").notNull(),
  reason: text("reason"),
  confirmed: boolean("confirmed").notNull().default(false),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  processed: boolean("processed").notNull().default(false),
  processedAt: timestamp("processed_at"),
});

export const deleteAccountSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  reason: z.string().optional(),
  confirmed: z.boolean().refine((val) => val === true, {
    message: "You must confirm that you understand this action is permanent",
  }),
});

export const insertDeletionRequestSchema = createInsertSchema(deletionRequests).pick({
  email: true,
  name: true,
  reason: true,
  confirmed: true,
});

export type InsertDeletionRequest = z.infer<typeof insertDeletionRequestSchema>;
export type DeletionRequest = typeof deletionRequests.$inferSelect;
