import { z } from "zod";

export const formSchema = z
  .object({
    title: z.string().min(5, {
      message: "Title must be at least 5 or more characters.",
    }),
    description: z.string().min(10, {
      message: "Description must be at least 10 or more characters.",
    }),
    tags: z.array(z.string()).optional(),
    javaCode: z.string().optional(),
    cppCode: z.string().optional(),
    jsCode: z.string().optional(),
    pythonCode: z.string().optional(),
  })
  .refine(
    (data) => {
      return data.javaCode || data.cppCode || data.jsCode || data.pythonCode;
    },
    {
      message: "At least one code field must be filled.",
      path: ["javaCode"], // This will mark the javaCode field as the error point; you can choose another
    }
  );
