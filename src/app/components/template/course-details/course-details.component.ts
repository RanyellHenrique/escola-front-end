import { Observable } from 'rxjs';
import { DialogAddClassComponent } from './../../dialog-add-class/dialog-add-class.component';
import { CourseService } from './../../../services/domain/course.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseDTO } from 'src/app/models/course.dto';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  course$: Observable<CourseDTO>;
  id: string;
  displayedColumns: string[] = ['id', 'data', 'numeroDeVagas'];

  constructor(
    private courseService: CourseService,
    public dialog: MatDialog,
    public route: ActivatedRoute) {}

  ngOnInit(): void {
    this.course$ = this.courseService.findById(this.route.snapshot.paramMap.get('id'));
  }

  addClass(): void{
      this.dialog.open(DialogAddClassComponent);
  }

}
