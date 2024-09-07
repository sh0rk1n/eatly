import { z } from "zod";

export const AuthSchema = z.object({
  name: z.string().optional(),
  email: z.string(),
  password: z.string(),
});

export type AuthDto = z.infer<typeof AuthSchema>;
