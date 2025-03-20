import { z } from "zod";

export const CampingSchema = z.object({
  title: z.string().min(2, "Title must be more than 2 charactor"),
  price: z.coerce.number(),
  description: z.string().min(50, "Description must be more than 50 charactor"),
});
