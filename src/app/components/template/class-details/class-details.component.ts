import { Observable } from 'rxjs';
import { ClassDTO } from './../../../models/class.dto';
import { ClassService } from './../../../services/domain/class.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-class-details',
  templateUrl: './class-details.component.html',
  styleUrls: ['./class-details.component.css']
})
export class ClassDetailsComponent implements OnInit {

  classDetails$: Observable<ClassDTO>;
  id: any;

  constructor(
    public route: ActivatedRoute,
    private classService: ClassService) {
    }

  ngOnInit(): void {
    this.classDetails$ = this.classService.findById(this.route.snapshot.paramMap.get('id'));
  }

  studentCLick(id: any): void{
    this.id = id;
  }
}
