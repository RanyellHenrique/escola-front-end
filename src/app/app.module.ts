import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { MainNavComponent } from './components/template/main-nav/main-nav.component';
import { AppComponent } from './app.component';
import { StudentsComponent } from './components/template/students/students.component';
import { HomeComponent } from './components/template/home/home.component';
import { StudentDetailsComponent } from './components/template/student-details/student-details.component';
import { CoursesComponent } from './components/template/courses/courses.component';
import { LoginComponent } from './components/template/login/login.component';

import { StorageService } from './services/storage.service';
import { StudentService } from './services/domain/students.service';
import { AuthService } from './services/auth.service';
import { CourseService } from './services/domain/course.service';

import { AuthInterceptorProvider } from './interceptors/auth-interceptor';
import { ErrorInterceptorProvider } from '../app/interceptors/error-interceptor';
import { reducers, metaReducers } from './reducers';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { SearchComponent } from './components/search/search.component';
import { CourseDetailsComponent } from './components/template/course-details/course-details.component';


@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    StudentsComponent,
    HomeComponent,
    LoginComponent,
    CoursesComponent,
    StudentDetailsComponent,
    PaginatorComponent,
    SearchComponent,
    CourseDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    LayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    HttpClientModule,
    MatInputModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    MatTableModule
  ],
  providers: [
    StudentService,
    AuthInterceptorProvider,
    ErrorInterceptorProvider,
    AuthService,
    StorageService,
    CourseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
