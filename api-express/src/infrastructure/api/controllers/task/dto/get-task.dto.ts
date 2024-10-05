import { TaskOutPutDto } from "./task.dto";
import { z } from "zod";

export const GetTaskOutPutDto = TaskOutPutDto;
export type GetTaskOutPutDto = ReturnType<typeof GetTaskOutPutDto.parse>;

export const GetTasksOutPutDto = z.array(TaskOutPutDto);
export type GetTasksOutPutDto = ReturnType<typeof GetTasksOutPutDto.parse>;

export const TaskIdDto = z.string().uuid();
