import { TaskOutPutDto } from "./task.dto";
import { z } from "zod";

export const PostTaskInputDto = z.object({
  title: z.string().max(100),
  content: z.string().max(500),
});

export type PostTaskInputDto = ReturnType<typeof PostTaskInputDto.parse>;

export const PostTaskOutPutDto = TaskOutPutDto;
export type PostTaskOutPutDto = ReturnType<typeof PostTaskOutPutDto.parse>;
