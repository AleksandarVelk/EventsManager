export class LazyLoadEvent {
    loadtemplate = {
      "lazyLoadEvent": {
        "first": 0,
        "rows": 4,
        "sortField": "startDate",
        "sortOrder": 0
      },
      "example": {
        
      }
    };
    constructor() {
      this.getLazyLoadTemplate();
    }
  
    getLazyLoadTemplate() {
      return this.loadtemplate;
    }
  }