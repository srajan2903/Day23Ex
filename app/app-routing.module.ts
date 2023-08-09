import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalComponent } from './animal/animal.component';
import { BindingComponent } from './binding/binding.component';
import { PipeexComponent } from './pipeex/pipeex.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'animal',component:AnimalComponent},
  {path:'binding',component:BindingComponent},
  {path:'pipe',component:PipeexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
