import Task from '../../../../../models/task';
import { GetTasksOutPutDto } from "./dto/get-task.dto"
import { PostTaskOutPutDto, GetTaskOutPutDto } from "./dto"
import { createTaskCodec, getTaskCodec } from "./task.coded";
import { v4 as uuidv4 } from 'uuid';

export class TaskController {

  async create(req: any, res: any): Promise<PostTaskOutPutDto> {
    try {
      const decodedRequest = createTaskCodec.decode(req.body);
      if(!decodedRequest.success) {
        return res.status(400).json({ message: 'Bad request' })
      }
      const { title, content } = decodedRequest.data;
      const task = await Task.create({ title, content });
      return res.status(201).json(task);
    } catch {
      return res.status(500).json({ message: 'Internal server error' })
    }
  }

  async list(req: any, res: any): Promise<GetTasksOutPutDto> {
    try {
      const tasks = await Task.findAll()
      return res.status(200).json(tasks)
    } catch {
      return res.status(404).json({ message: 'Not found' })
    }
  }

  async getOne(req: any, res: any): Promise<GetTaskOutPutDto> {
    try {
      const decodedRequest = getTaskCodec.decode(req.params.id);
      if(!decodedRequest.success) {
        return res.status(400).json({ message: 'Bad request' })
      }
      const decodedId = decodedRequest.data;
      const task = await Task.findByPk(decodedId)
      return res.status(200).json(task)
    } catch {
      return res.status(404).json({ message: 'Not found' })
    }
  }

  async delete(req: any, res: any): Promise<void> {
    try {
      const decodedRequest = getTaskCodec.decode(req.params.id);
      if(!decodedRequest.success) {
        return res.status(400).json({ message: 'Bad request' })
      }
      const decodedId = decodedRequest.data;
      const task = await Task.destroy({ where: { id: decodedId } })
      return res.status(204).json(task)
    } catch {
      return res.status(404).json({ message: 'Not found' });
    }
  }
}

export default TaskController;
