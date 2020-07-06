import { CourseService } from '../../../services/domain/course.service';
import { Component, OnInit } from '@angular/core';
import { CourseDTO } from '../../../models/course.dto';
import { PageCourse } from '../../../models/course.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: CourseDTO[];
  page: PageCourse = {totalElements: 0, content: [], totalPages: 0, last: false, number: 0, size: 12};
  displayedColumns: string[] = ['id', 'nome', 'notaMinima', 'cargaHoraria'];
  searchValue = '';

  constructor(
    public courseService: CourseService,
    private router: Router) { }

  ngOnInit(): void {
    this.requestPage(this.page.number, this.page.size);
  }

  search(searchValue: string): void{
    this.searchValue = searchValue;
    this.page.number = 0;
    this.requestPage(this.page.number, this.page.size);
  }

  handlePage(newPage: PageCourse): void {
    this.page.number = newPage.number;
    this.page.size = newPage.size;
    this.requestPage(this.page.number, this.page.size);
  }

  requestPage(pageNumber: number, pageSize: number): void {
    this.courseService.findPerPageAndName(pageNumber, pageSize, this.searchValue)
      .subscribe(res => {
        this.courses = res.content;
        this.page = res;
      }, error => {});
  }

  courseDetails(id: string): void{
    this.router.navigateByUrl('course-details', {state: {courseId: id}});
  }
}
