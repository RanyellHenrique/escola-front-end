import { debounceTime } from 'rxjs/operators';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output()
  searchValue: EventEmitter<string> = new EventEmitter();
  searchTerm$ = new Subject<any>();
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      search: [ '' ]
    });

    this.searchTerm$
      .pipe(debounceTime(1200))
      .subscribe(() => this.searchValue.emit(this.formGroup.value.search));
  }

  onKeyUp(): void {
    this.searchTerm$.next();
  }


}
