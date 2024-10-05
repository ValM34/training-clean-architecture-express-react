import { z } from "zod";

export const TaskOutPutDto = z.object({
  id: z.string().uuid(),
  title : z.string().max(100),
  content : z.string().max(500),
  isDone : z.boolean(),
  createdAt : z.date(),
  updatedAt : z.date()
})
