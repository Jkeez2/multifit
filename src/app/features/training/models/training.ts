import { ISport } from "./ISport";

export interface Training {
  id: number,
  name: string,
  sports: ISport[],
  duration: string,
  date: string,
  avgHeartRate: number
}
