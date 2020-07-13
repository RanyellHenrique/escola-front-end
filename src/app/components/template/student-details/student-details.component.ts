import { StudentService } from '../../../services/domain/students.service';
import { StudentDTO } from '../../../models/student.dto';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  student: StudentDTO = {id: '', nome: '', email: '', cpf: ''};
  id: string;
  panelOpenState = false;

  constructor(
    private router: Router,
    public studentService: StudentService) {
    this.id = this.router.getCurrentNavigation().extras.state.studentId;
   }

  ngOnInit(): void {
    this.studentService.findById(this.id)
      .subscribe(res => {
        this.student = res;
      }, error => {});
  }
}
