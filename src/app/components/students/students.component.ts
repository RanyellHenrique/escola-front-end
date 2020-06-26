import { StudentService } from './../../services/domain/students.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor(
    public studentsService: StudentService
    ) { }

  ngOnInit(): void {
    this.studentsService.findAll()
      .subscribe(res => {
        console.log(res);
      }, err => {});
  }



}
