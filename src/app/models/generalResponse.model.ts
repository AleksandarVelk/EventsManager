import { BaseModel } from "./base.model";

export class GeneralBaseResponse<T> {
  success: boolean;
  errorMessage: string;
  totalAmountOfUnreadNotifications: number;
  object: T;
  constructor(json?: any, prop?: string) {
    if (json != null) {
      this.success = json.success;
      this.errorMessage = json.errorMessage;
      this.totalAmountOfUnreadNotifications = json.totalAmountOfUnreadNotifications;
      this.object = json[prop];
    }
  }
}

export class GeneralArrayResponse<T extends BaseModel> {
  array: Array<T>;
  constructor(json?: any, obj?: new (json: any) => T) {
    if (json != null) {
      this.array = this.toArray(obj, json);
    }
  }

  toArray(type: new (json: any) => T, jsons: Array<any>): Array<T> {
    const item: Array<T> = [];
    if (jsons != null) {
      for (const json of jsons) {
        item.push(new type(json));
      }
    }
    return item;
  }
}
