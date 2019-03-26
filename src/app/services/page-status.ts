import { Injectable } from '@angular/core';
@Injectable()
export class PageStatusService {

  status:string  = '';

  constructor() { }

  setStatus(status:string){
    this.status = status;
  }

  getStatus(): string{
    return this.status;
  }
}
