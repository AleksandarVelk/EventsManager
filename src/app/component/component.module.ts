import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ComponentsRoutes, ComponentRoutingModule } from './component.routing';
import { EventComponent } from './target/event.component';
import { SharedModule } from './shared/shared.module';
import { EventModalComponent } from './target/event-modal/event-modal.component';
import { NgbdModalBasicComponent } from './modal/modal.component';


@NgModule({
  imports: [
    CommonModule,
    ComponentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    SharedModule,
  ],
  exports: [EventComponent],
  declarations: [
    EventComponent,
    EventModalComponent,
    NgbdModalBasicComponent,
  ],
  entryComponents: [EventModalComponent]
})
export class ComponentsModule {}
