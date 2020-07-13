import { CourseService } from './../../services/domain/course.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog-add-course',
  templateUrl: './dialog-add-course.component.html',
  styleUrls: ['./dialog-add-course.component.css']
})
export class DialogAddCourseComponent implements OnInit {

  constructor(
    public formBuilder: FormBuilder,
    public courseService: CourseService) { }

formCourse = this.formBuilder.group({
  nome: ['', [Validators.required, Validators.minLength(5)]],
  cargaHoraria: ['', [Validators.required]],
  notaMinima: ['', [Validators.required]]
});

  ngOnInit(): void {
  }

  onSubmit(): void{
    this.courseService.insert(this.formCourse.value).subscribe(res => {
      console.log(res);
    }, err => {});
  }

}
