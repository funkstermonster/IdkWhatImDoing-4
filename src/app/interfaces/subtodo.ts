import { ProgressEnum } from "./progress";
import { User } from "./user";

export interface Subtodo {
  id: number,
  title: string,
  status: ProgressEnum,
  details: string,
  creationDate: string,
  userId: number
}
