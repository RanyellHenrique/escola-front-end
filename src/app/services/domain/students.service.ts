import { StudentDTO } from './../../model/student.dto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {API_CONFIG} from '../../config/api.config';
import { Observable } from 'rxjs';

@Injectable()
export class StudentService{

    constructor(public http: HttpClient){

    }

    findAll(): Observable<StudentDTO[]>{
      return this.http.get<StudentDTO[]>(`${API_CONFIG.base_url}/alunos`);
    }

}
