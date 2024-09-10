import { z } from "zod";

export const AuthSchema = z.object({
  name: z.string().optional(),
  email: z.string(),
  password: z.string(),
});

export const AuthResponse = z.object({
  accessToken: z.string(),
});

export type AuthDto = z.infer<typeof AuthSchema>;
export type AuthResponseDto = z.infer<typeof AuthResponse>;
