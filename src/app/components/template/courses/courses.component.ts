import { CourseService } from '../../../services/domain/course.service';
import { Component, OnInit } from '@angular/core';
import { CourseDTO } from '../../../models/course.dto';
import { PageCourse } from '../../../models/course.page';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: CourseDTO[];
  page: PageCourse = {totalElements: 0, content: [], totalPages: 0, last: false, number: 0, size: 0};
  displayedColumns: string[] = ['id', 'nome', 'notaMinima', 'cargaHoraria'];
  searchValue = '';

  constructor(public courseService: CourseService) { }

  ngOnInit(): void {
    this.courseService.findPerPageAndName(0, 12, this.searchValue)
      .subscribe(res => {
       this.courses = res.content;
       this.page = res;
      });
  }

  search(searchValue: string): void{
    this.searchValue = searchValue;
    console.log(this.searchValue);
  }

  requestPage(pageNumber: number, pageSize: number): void {
    this.courseService.findPerPageAndName(pageNumber, pageSize, this.searchValue)
      .subscribe(res => {
        this.courses = res.content;
      }, error => {});
  }
}
