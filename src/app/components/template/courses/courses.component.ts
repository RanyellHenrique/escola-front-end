import { CourseService } from '../../../services/domain/course.service';
import { Component, OnInit } from '@angular/core';
import { CourseDTO } from '../../../models/course.dto';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: CourseDTO[];

  constructor(public courseService: CourseService) { }

  ngOnInit(): void {
    this.courseService.findAll()
      .subscribe(res => {
       this.courses = res;
      });
  }

}
