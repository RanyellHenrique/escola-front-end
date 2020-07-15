import { Observable } from 'rxjs';
import { ClassDTO } from './../../../models/class.dto';
import { ClassService } from './../../../services/domain/class.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-class-details',
  templateUrl: './class-details.component.html',
  styleUrls: ['./class-details.component.css']
})
export class ClassDetailsComponent implements OnInit {

  classDetails$: Observable<ClassDTO>;
  id: string;

  constructor(
    private router: Router,
    private classService: ClassService) {
      this.id = this.router.getCurrentNavigation().extras.state.classId;
    }

  ngOnInit(): void {
    this.classDetails$ = this.classService.findById(this.id);
  }
}
