import { StudentService } from './../../services/domain/students.service';
import { Component, OnInit } from '@angular/core';
import { StudentDTO } from '../../model/student.dto';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students: StudentDTO[];

  constructor(
    public studentsService: StudentService
    ) { }

  ngOnInit(): void {
    this.studentsService.findPerPage(0, 12)
      .subscribe(res => {
        this.students = res.content;
      }, err => {});
  }

  search(event: any): void{
    this.studentsService.findPerPageAndName(0, 12, event.target.value)
      .subscribe(res => {
        this.students = res.content;
      }, err => {});
  }



}
