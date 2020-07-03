import { StudentDetailsComponent } from './components/template/student-details/student-details.component';
import { CoursesComponent } from './components/template/courses/courses.component';
import { LoginComponent } from './components/template/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/template/home/home.component';
import {StudentsComponent} from './components/template/students/students.component';
import { CommonModule } from '@angular/common';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'students',
    component: StudentsComponent
  },
  {
    path: 'courses',
    component: CoursesComponent
  },
  {
    path: 'student-details',
    component: StudentDetailsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
