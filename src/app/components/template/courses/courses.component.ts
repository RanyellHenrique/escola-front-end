import { debounceTime, switchMap} from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { CourseService } from '../../../services/domain/course.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { PageCourse } from '../../../models/course.page';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddCourseComponent } from '../../dialog-add-course/dialog-add-course.component';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  @ViewChild('paginator') paginator: MatPaginator;
  displayedColumns: string[] = ['id', 'nome', 'notaMinima', 'cargaHoraria'];
  page$: Observable<PageCourse>;
  searchInput: '';
  handlerPage$: Subject<any> = new Subject<any>();

  constructor(
    public courseService: CourseService,
    public router: Router,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.initial();
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy(): void {
    this.handlerPage$.unsubscribe();
  }

  addCourse(): void{
    this.dialog.open(DialogAddCourseComponent)
      .afterClosed()
      .subscribe(() => this.search());
  }

  initial(): void{
    this.page$ = this.handlerPage$.pipe(
      debounceTime(200),
      switchMap((page) => this.courseService
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
