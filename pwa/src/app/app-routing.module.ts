import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { Screen1Component } from './pages/screen1/screen1.component';
import { Screen2Component } from './pages/screen2/screen2.component';
import { PublicGuard } from './public.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'screen1',
    pathMatch: 'full',
  },
  {
    path: 'screen1',
    component: Screen1Component,
    canActivate: [PublicGuard],
  },
  {
    path: 'screen2',
    component: Screen2Component,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
