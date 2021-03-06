import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';
import { SharedModule } from '../shared/shared.module';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
    declarations: [
        LoginComponent,
    ],
    imports: [
        SharedModule,
        LoginRoutingModule,
        CommonModule,
    ],
})

export class LoginModule {
    constructor() {
        console.log('LoginModule...');
    }
}
