import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output()
  searchValue: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  search(event: any): void{
    this.searchValue.emit(event.target.value);
  }

}
