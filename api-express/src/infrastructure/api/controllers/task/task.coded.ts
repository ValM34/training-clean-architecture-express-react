import { PostTaskInputDto, TaskIdDto } from "./dto";

// Ce serait pour getOneTask
export const getTaskCodec = {
  decode: (params: unknown) => TaskIdDto.safeParse(params),
}

export const createTaskCodec = {
  decode: (params: unknown) => PostTaskInputDto.safeParse(params),
}