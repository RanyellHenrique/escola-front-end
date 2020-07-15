import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dialog-add-class',
  templateUrl: './dialog-add-class.component.html',
  styleUrls: ['./dialog-add-class.component.css']
})
export class DialogAddClassComponent implements OnInit {

  constructor(public formBuilder: FormBuilder) { }

  formClass = this.formBuilder.group({
    numeroDeVagas: ['', [Validators.required]],
    data: ['', [Validators.required]]
  });

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.formClass.value);
  }

}
