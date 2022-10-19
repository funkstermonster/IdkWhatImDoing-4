import { ProgressEnum } from "./progress";

export interface TodoItem {
  id: number,
  title: string,
  progress: ProgressEnum,
  description: string,
  date: string,
  userId?: number,
  subTodoIds?: number[],
}
