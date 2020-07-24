import { Observable } from 'rxjs';
import { StudentService } from './../../../../services/domain/students.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { StudentDTO } from 'src/app/models/student.dto';

@Component({
  selector: 'app-student-class-details',
  templateUrl: './student-class-details.component.html',
  styleUrls: ['./student-class-details.component.css']
})
export class StudentClassDetailsComponent implements OnInit {

  student$: Observable<StudentDTO>;
  id: any;

  constructor(
    public route: ActivatedRoute,
    public studentService: StudentService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => this.id = params.get('studentId'));
    this.student$ = this.studentService.findById(this.id);
  }
}
