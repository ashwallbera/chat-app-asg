import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '',
    component:SignInComponent
  },
  {
    path: 'signin',
    component:SignInComponent
  },
  {
    path: 'signup',
    component:SignUpComponent
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./user-page/user-page-routing.module').then(
        (m) => m.UserPageRoutingModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
