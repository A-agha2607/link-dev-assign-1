import * as z from 'zod'
export const ProductSchema = z.object({
    title: z.string().min(1, "Title is required"),
    price: z.number().min(0, "Price must be a positive number"),
    description: z.string().min(1, "Description is required"),
    category: z.string().min(1, "Category is required"),
    image:     z.any()
    .transform((files) => files && files.length > 0 ? files[0] : null) // get the first File
    .refine((file) => file !== null, { message: "File is required" })
    .refine((file) => file?.size <= 2000000, { message: "At most 2MB" })
    .refine(
      (file) =>
        ["image/png", "image/gif", "image/jpeg", "image/webp", "image/svg+xml"]
          .includes(file?.type),
      { message: "Only PNG, GIF, JPEG, WEBP, or SVG allowed" }
    ),
       


})