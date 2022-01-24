import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { ComponentsModule } from '../component/component.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../component/shared/shared.module';

@NgModule({
    imports: [
        FormsModule,
        DashboardRoutingModule,
        CommonModule,
        ComponentsModule, 
        ReactiveFormsModule, 
        ComponentsModule, 
        NgbModule,
        SharedModule
    ],
	declarations: [DashboardComponent] 

})

export class DashboardModule {
    constructor() {
    }
}
