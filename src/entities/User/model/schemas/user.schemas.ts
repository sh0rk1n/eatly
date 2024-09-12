import { z } from "zod";

export const UserSchema = z.object({
  name: z.string().optional(),
  email: z.string(),
  password: z.string(),
});

export const UserResponse = z.object({
  token: z.string(),
});
