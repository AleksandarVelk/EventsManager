import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

 import {DropDownDotsComponent} from '../generalHelperComponents/drop-down-dots/drop-down-dots.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ConfirmDialogComponent } from '../modal/confirm-dialog/confirm-dialog.component';


@NgModule({
  declarations: [
     DropDownDotsComponent,
     ConfirmDialogComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    
  ],
  exports: [
     CommonModule,
     DropDownDotsComponent,
    FormsModule,
     ConfirmDialogComponent,
    TranslateModule
  ],
  providers: [
    
  ],
  entryComponents: [
 
  ]
})

export class SharedModule {
}
