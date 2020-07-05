import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Page } from '../../models/page';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  @Input() page: Page;
  @Output() newPage: EventEmitter<Page> = new EventEmitter();
  @Input() searchValue: string;

  constructor() { }

  ngOnInit(): void {
  }

  public handlePage(e: any): void {
    this.page.number = e.pageIndex;
    this.page.size = e.pageSize;
    this.newPage.emit(this.page);
  }

}
