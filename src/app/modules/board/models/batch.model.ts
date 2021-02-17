import { activityTypes } from "./boardItem.model";

export interface Batch {
  activityType: activityTypes;
  id: string,
  name : string,
  startTime: Date;
  endTime: Date;
  productionLine: string,
  process?: string,
  weight?: number,
  unitOfMeasure?: string
  typeOfProducts?: string
  status?: string
};