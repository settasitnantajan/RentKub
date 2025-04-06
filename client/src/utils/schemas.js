import { z } from "zod";

export const CampingSchema = z.object({
  title: z.string().min(2, "Title must be more than 2 charactor"),
  price: z.coerce.number(),
  description: z.string().max(50, "Description must be more than 50 charactor"),
  category: z.string(),
  lat: z.coerce.number(),
  lng: z.coerce.number(),
  image: z.any(),
});

export const ProfileSchema = z.object({
  firstname: z
    .string()
    .min(2, "Firstname must be more than 2 charactor")
    .max(30, "Firstname must be less than 30 charactor"),
  lastname: z
    .string()
    .min(2, "Lastname must be more than 2 charactor")
    .max(30, "Lastname must be less than 30 charactor"),
});
