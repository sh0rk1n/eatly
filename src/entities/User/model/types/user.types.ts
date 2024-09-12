import { z } from "zod";
import { UserResponse, UserSchema } from "../schemas/user.schemas";

export type UserDto = z.infer<typeof UserSchema>;
export type UserResponseDto = z.infer<typeof UserResponse>;
