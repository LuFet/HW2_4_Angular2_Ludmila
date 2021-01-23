import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyTableComponent } from './my-table/my-table.component';
import { NewItemComponent } from './new-item/new-item.component';
// import { FormsModule } from "@angular/forms"; // для ngModel

const routes: Routes = [
  {path:'new-item', component: NewItemComponent},
  // {path:'my-table', component: MyTableComponent},
  // { path: "", redirectTo: "my-table", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
