import { z } from "zod";

export const validate = (obj) => {
  const requiredBody = z.object({
    email: z.string({message:"Email is required"}).email({message:"Invalid email"}),
    password: z
      .string({message:"Password is required"})
      .min(8, { message: "Password must be at least 8 characters long" })
      .max(50, { message: "Password must not exceed 50 characters" })
      .regex(/[A-Z]/, {
        message: "Password must contain at least one uppercase letter",
      })
      .regex(/[a-z]/, {
        message: "Password must contain at least one lowercase letter",
      })
      .regex(/[0-9]/, { message: "Password must contain at least one number" }),
    username: z
      .string({ message: "Username is required" })
      .min(3,{message: "Username must be at least 3 characters long"})
      .max(50,{message: "Username must not exceed 50 characters"})
      .regex(/^[a-zA-Z]+$/, {
        message: "Username must be alphanumeric",
      }).optional(),
  });
  const parsedDataWithSuccess = requiredBody.safeParse(obj);

  if (parsedDataWithSuccess.success) return null;
  return parsedDataWithSuccess.error;
};
