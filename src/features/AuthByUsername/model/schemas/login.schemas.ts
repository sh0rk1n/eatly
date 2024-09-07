import { z } from "zod";

export const LoginSchema = z.object({
  name: z.string(),
  password: z.string(),
});

export type LoginDto = z.infer<typeof LoginSchema>;
