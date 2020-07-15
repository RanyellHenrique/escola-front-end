import { DialogAddClassComponent } from './../../dialog-add-class/dialog-add-class.component';
import { CourseService } from './../../../services/domain/course.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseDTO } from 'src/app/models/course.dto';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  course: CourseDTO = {  id: '', nome: '', cargaHoraria: '', notaMinima: '', turmas: []};
  id: string;
  displayedColumns: string[] = ['id', 'data', 'numeroDeVagas'];

  constructor(
    private router: Router,
    private courseService: CourseService,
    public dialog: MatDialog) {
      this.id = this.router.getCurrentNavigation().extras.state.courseId;
     }

  ngOnInit(): void {
    this.courseService.findById(this.id)
    .subscribe(res => {
      this.course = res;
    }, error => {});
  }

  addClass(): void{
      this.dialog.open(DialogAddClassComponent);
  }

  classDetails(id: string): void{
    this.router.navigateByUrl('class-details', {state: {classId: id}});
  }

}
