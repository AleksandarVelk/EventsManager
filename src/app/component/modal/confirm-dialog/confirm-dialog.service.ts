import { Injectable } from "@angular/core";
import { Observable, of, Subject } from "rxjs";
import { take } from "rxjs/operators";
@Injectable()
export class ConfirmDialogService {
  private subject = new Subject<any>();
  private confirmSub = new Subject<boolean>();
  constructor() {}

  async confirmThis(
    message: string,
    filename: string,
    typeBtn: string,
    yeFn: () => void,
    noFn: () => void
  ) {
    this.setConfirmation(message, filename, typeBtn, "confirm", yeFn, noFn);

    return await this.confirmSub.pipe(take(1)).toPromise();
  }

  setConfirmation(
    message: string,
    filename: string,
    typeBtn: string,
    typeDialogBox,
    yeFn?: () => void,
    noFn?: () => void,
    cnFn?: () => void
  ) {
    const that = this;
    this.subject.next({
      type: typeDialogBox,
      text: message,
      nameBtn: typeBtn,
      fileName: filename,
      yeFn() {
        that.subject.next(false);
        yeFn();
        that.confirmSub.next(true);
      },
      noFn() {
        that.subject.next(false);
        noFn();
      },
    });
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

  approveThis(
    message: string,
    filename: string,
    typeBtn: string,
    yeFn: () => void,
    noFn: () => void
  ) {
    this.setConfirmation(message, filename, typeBtn, "approve", yeFn, noFn);
  }
}
