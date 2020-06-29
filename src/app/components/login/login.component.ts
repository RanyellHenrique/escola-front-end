import { AuthService } from './../../services/auth.service';
import { CredentialsDTO } from './../../model/credentials';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formCreds;
  public creds: CredentialsDTO;

  constructor(
    public auth: AuthService,
    public formBuilder: FormBuilder){
      this.formCreds = this.formBuilder.group({
        email: '',
        senha: ''
      });
    }


  ngOnInit(): void {
  }

  login(): void{
   this.creds = this.formCreds.value;
   this.auth.authenticate(this.creds)
    .subscribe(res => {
      this.auth.successfulLogin(res.headers.get('Authorization'));
    },
    error => {});
  }

}
