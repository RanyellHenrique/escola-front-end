import { Observable } from 'rxjs';
import { StudentService } from '../../../services/domain/students.service';
import { StudentDTO } from '../../../models/student.dto';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  student$: Observable<StudentDTO>;
  id: string;
  panelOpenState = false;

  constructor(
    public studentService: StudentService,
    public route: ActivatedRoute) {
   }

  ngOnInit(): void {
    this.student$ = this.studentService.findById(this.route.snapshot.paramMap.get('id'));
  }
}
