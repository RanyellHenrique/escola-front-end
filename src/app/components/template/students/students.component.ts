import { MatPaginator } from '@angular/material/paginator';
import { debounceTime, switchMap } from 'rxjs/operators';
import { StudentService } from '../../../services/domain/students.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PageStudents } from '../../../models/students.page';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  @ViewChild('paginator') paginator: MatPaginator;
  displayedColumns: string[] = ['id', 'nome', 'email', 'cpf'];
  page$: Observable<PageStudents>;
  handlerPage$: Subject<any> = new Subject<any>();
  searchInput: '';

  constructor(
    public studentsService: StudentService,
    public router: Router
    ) { }

  ngOnInit(): void {
    this.initial();
  }

  initial(): void{
    this.page$ = this.handlerPage$.pipe(
      debounceTime(200),
      switchMap((page) => this.studentsService
        .findPerPageAndName(page.searchInput , page.pageIndex, page.pageSize))
    );
  }

  search(): void{
    this.handlerPage$.next({
      searchInput: this.searchInput,
      pageIndex: 0,
      pageSize: this.paginator ? this.paginator.pageSize : 12
    });
  }

  handlerPage(): void{
    this.handlerPage$.next({
      searchInput: this.searchInput,
      pageIndex: this.paginator.pageIndex,
      pageSize: this.paginator.pageSize
    });
  }

}
