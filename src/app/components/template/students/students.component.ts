import { StudentService } from '../../../services/domain/students.service';
import { Component, OnInit } from '@angular/core';
import { StudentDTO } from '../../../models/student.dto';
import { Router } from '@angular/router';
import { PageStudents } from '../../../models/students.page';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students: StudentDTO[];
  page: PageStudents = {totalElements: 0, content: [], totalPages: 0, last: false, number: 0, size: 0};
  searchValue = '';
  displayedColumns: string[] = ['id', 'nome', 'email', 'cpf'];

  constructor(
    public studentsService: StudentService,
    public router: Router
    ) { }

  ngOnInit(): void {
    this.studentsService.findPerPage(0, 12)
      .subscribe(res => {
        this.students = res.content;
        this.page = res;
      }, err => {});
  }

  search(event: any): void{
    this.searchValue = event.target.value;
    this.studentsService.findPerPageAndName(this.page.number, this.page.size, this.searchValue)
      .subscribe(res => {
        this.page.totalElements = res.totalElements;
        this.students = res.content;
      }, err => {});
  }

  studentDetails(id: string): void{
    this.router.navigateByUrl('student-details', {state: {studentId: id}});
  }

  public handlePage(e: any): void {
    this.page.number = e.pageIndex;
    this.page.size = e.pageSize;
    this.studentsService.findPerPageAndName(this.page.number, e.pageSize, this.searchValue)
      .subscribe(res => {
        this.students = res.content;
      }, error => {});
  }
}
