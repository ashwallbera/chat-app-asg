import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatHistoryComponent } from './chat-history/chat-history.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'chat/:id',
        component: ChatHistoryComponent,
      },
    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserPageRoutingModule {}
