import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(2).max(120),
  phone: z
    .string()
    .trim()
    .min(6)
    .max(20)
    .regex(/^[+()\d\s-]+$/),
  email: z.string().trim().email().max(160),
  city: z.string().trim().min(2).max(80),
  service: z.string().trim().max(120).optional().default(""),
  message: z.string().trim().min(5).max(2000),
  locale: z.enum(["ca", "es", "en"]),
  sourcePath: z.string().trim().max(300).optional().default(""),
  website: z.string().max(0).optional().default(""),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;
