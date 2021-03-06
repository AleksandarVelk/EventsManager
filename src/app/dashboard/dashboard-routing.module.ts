import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const dashboardRoutes: Routes = [
    {
        path: '',
        data: {
            title: 'Dashboard'
        },
        component: DashboardComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(dashboardRoutes)
    ],
    exports: [
        RouterModule
    ]

})

export class DashboardRoutingModule {

}
