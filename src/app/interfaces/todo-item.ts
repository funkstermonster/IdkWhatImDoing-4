import { ProgressEnum } from "./progress";
import { User } from "./user";

export interface TodoItem {
  id: number,
  title: string,
  progress: ProgressEnum,
  description: string,
  date: string,
  user_id?: User["id"],
  subTodos?: TodoItem[],
}
