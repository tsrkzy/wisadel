import * as z from "zod";

export const zEmail = z
  .email({ message: "Must be a valid email" })
  .min(1, { message: "This is required" })
export const zPassword = z
  .string()
  .min(1, { message: "This is required" })
  .min(8, { message: "Too short" })
export const zAuth = z.object({
  email: zEmail,
  password: zPassword,
});

export type Auth = z.infer<typeof zAuth>;
