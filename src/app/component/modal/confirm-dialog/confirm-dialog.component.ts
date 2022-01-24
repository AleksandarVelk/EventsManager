import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ConfirmDialogService } from './confirm-dialog.service';
import { truncate } from 'src/app/utils';
import { Observer, Subscription } from 'rxjs';


@Component({
    selector: 'event-confirm-dialog',
    templateUrl: './confirm-dialog.component.html',
    styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit, OnDestroy {
    message: Observer<{ Object }>;
    truncate;
    messageSubscr: Subscription;
    constructor(
        private confirmDialogService: ConfirmDialogService
    ) { this.truncate = truncate; }

    ngOnInit() {
        // this function waits for a message from alert service, it gets
        // triggered when we call this from any other component

        this.messageSubscr = this.confirmDialogService.getMessage().subscribe(message => {
            this.message = message;
        });
    }

    ngOnDestroy() {
        this.messageSubscr.unsubscribe();
    }

}
