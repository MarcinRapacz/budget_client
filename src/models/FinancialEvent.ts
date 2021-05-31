import { FinancialEventStatus } from "../consts/FinancialEventStatus";

export class FinancialEvent {
  public constructor(
    public id: string,
    public value: number,
    public description: string,
    public date: Date,
    public status: FinancialEventStatus
  ) {}
}

// export interface FinancialEvent {
//   id: string;
//   description: string;
//   date: Date;
//   status: FinancialEventStatus;
// }
