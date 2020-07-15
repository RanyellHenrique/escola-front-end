import { Observable } from 'rxjs';
import { CourseService } from '../../../services/domain/course.service';
import { Component, OnInit } from '@angular/core';
import { PageCourse } from '../../../models/course.page';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddCourseComponent } from '../../dialog-add-course/dialog-add-course.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'notaMinima', 'cargaHoraria'];
  searchValue = '';
  page$: Observable<PageCourse>;

  constructor(
    public courseService: CourseService,
    public router: Router,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.page$ = this.courseService.findPerPageAndName(this.searchValue);
  }

  search(searchValue: string): void{
    this.searchValue = searchValue;
    this.page$ = this.courseService.findPerPageAndName(this.searchValue);
  }

  handlePage(newPage: PageCourse): void {
    this.page$ = this.courseService.findPerPageAndName(this.searchValue, newPage.number, newPage.size);
  }
  courseDetails(id: string): void{
    this.router.navigateByUrl('course-details', {state: {courseId: id}});
  }

  addCourse(): void{
    this.dialog.open(DialogAddCourseComponent);
  }
}
