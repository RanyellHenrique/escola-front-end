import { StudentService } from '../../../services/domain/students.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageStudents } from '../../../models/students.page';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'email', 'cpf'];
  searchValue = '';
  page$: Observable<PageStudents>;

  constructor(
    public studentsService: StudentService,
    public router: Router
    ) { }

  ngOnInit(): void {
    this.page$ = this.studentsService.findPerPageAndName(this.searchValue);
  }

  search(searchValue: string): void{
    this.searchValue = searchValue;
    this.page$ = this.studentsService.findPerPageAndName(this.searchValue);
  }

  studentDetails(id: string): void{
    this.router.navigateByUrl('student-details', {state: {studentId: id}});
  }

  handlePage(newPage: PageStudents): void {
    this.page$ = this.studentsService.findPerPageAndName(this.searchValue, newPage.number, newPage.size );
  }

}
