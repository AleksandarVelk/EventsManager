export class EventItems {
  _id: string;
  name: string;
  description: string;
  startDate: string;
  
  constructor(json?: any) {
  
      if (json != null) {
          this._id = json._id;
          this.name = json.name;
          this.description = json.description;
          this.startDate = json.startDate;           
      }
    }
}
