import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

export const ComponentsRoutes: Routes = [
	{
		path: '',
		children: [
			// {
			// 	path: 'modal',
			// 	component: NgbdModalBasicComponent,
			// 	data: {
			// 		title: 'Modal'
			// 	}
			// },			
		]
	}
];

@NgModule({
    imports: [
        RouterModule.forChild(ComponentsRoutes)
    ],
    exports: [
        RouterModule
    ]

})

export class ComponentRoutingModule {

}
