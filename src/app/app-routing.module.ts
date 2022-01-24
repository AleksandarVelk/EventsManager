import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LoginGuard } from './auth/guards/login.guard';
import { AuthGuard } from './auth/guards/auth.guard';
import { FullComponent } from './layouts/full/full.component';

export const routes: Routes = [
	{
		path: '',
		component: FullComponent,
		children: [
			{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
			{
				path: 'dashboard',
				loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
			},
			{
				path: 'component',
				loadChildren: () => import('./component/component.module').then(m => m.ComponentsModule)
			}
			
		],
		canActivate: [AuthGuard]
	},
	{
		path: 'login',
		loadChildren: () => import('./component/login/login.module').then(m => m.LoginModule),
		canActivate: [LoginGuard]
	},
	{
		path: '**',
		redirectTo: '/dashboard'
	}
];

@NgModule({
	imports: [
	  RouterModule.forRoot(routes, {
		onSameUrlNavigation: 'reload',
		paramsInheritanceStrategy: 'always',
		scrollPositionRestoration: 'top',
		preloadingStrategy: PreloadAllModules
	  })
	],
	exports: [RouterModule]
  })
  export class AppRoutingModule {}
