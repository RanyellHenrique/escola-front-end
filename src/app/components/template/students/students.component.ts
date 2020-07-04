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
  displayedColumns: string[] = ['id', 'nome', 'email', 'cpf'];
  searchValue = '';

  constructor(
    public studentsService: StudentService,
    public router: Router
    ) { }

  ngOnInit(): void {
    this.studentsService.findPerPage(0, 12)
      .subscribe(res => {
        this.students = res.content;
        this.page = res;
      }, error => {});
  }

  search(searchValue: string): void{
    this.searchValue = searchValue;
    this.studentsService.findPerPageAndName(this.page.number, this.page.size, this.searchValue);
    this.requestPage(this.page.number, this.page.size);
  }

  studentDetails(id: string): void{
    this.router.navigateByUrl('student-details', {state: {studentId: id}});
  }

  handlePage(newPage: PageStudents): void {
    this.page.number = newPage.number;
    this.page.size = newPage.size;
    this.requestPage(this.page.number, this.page.size);
  }

  requestPage(pageNumber: number, pageSize: number): void{
    this.studentsService.findPerPageAndName(pageNumber, pageSize, this.searchValue)
      .subscribe(res => {
        this.students = res.content;
      }, error => {});
  }
}
