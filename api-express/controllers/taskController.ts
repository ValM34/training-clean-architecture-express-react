import Task from '../models/task'

export const getAll = async (req: any, res: any) => {
  console.log('ldkfujglkfdjglkfdjglkjfdglkjfldkjglkfdjglkdjflkgldfkjglkdfljkgdljkfgljk')
  try {
    const tasks = await Task.findAll()
    return res.status(200).json(tasks)
  } catch {
    return res.status(500).json({ message: 'Internal server error' })
  }

}
