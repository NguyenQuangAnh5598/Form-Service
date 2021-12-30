import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateStudentComponent} from './create-student/create-student.component';
import {DeleteStudentComponent} from './delete-student/delete-student.component';
import {UpdateStudentComponent} from './update-student/update-student.component';
import {ListStudentComponent} from './list-student/list-student.component';

const routes: Routes = [
  {
    path : 'create',
    component : CreateStudentComponent
  },
  {
    path : 'delete/:id',
    component : DeleteStudentComponent
  },
  {
    path : 'update/:id',
    component : UpdateStudentComponent
  },
  {
    path : '',
    component : ListStudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
