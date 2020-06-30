import { StudentDTO } from './../../model/student.dto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {API_CONFIG} from '../../config/api.config';
import { Observable } from 'rxjs';
import { PageResponse } from '../../model/students.page';

@Injectable()
export class StudentService{

    constructor(public http: HttpClient){

    }

    findAll(): Observable<StudentDTO[]>{
      return this.http.get<StudentDTO[]>(`${API_CONFIG.base_url}/alunos`);
    }

    findPerPage(page: number, lines: number ): Observable<PageResponse>{
      return this.http.get<PageResponse>(`${API_CONFIG.base_url}/alunos/page?page=${page}&linesPerPage=${lines}`);
    }

    findPerPageAndName(page: number, lines: number, name: string ): Observable<PageResponse>{
      return this.http.get<PageResponse>(`${API_CONFIG.base_url}/alunos/page/search?search=${name}&page=${page}&linesPerPage=${lines}`);
    }

    findByEmail(email: string): Observable<StudentDTO>{
      return this.http.get<StudentDTO>(`${API_CONFIG.base_url}/alunos/email?value=${email}`);
    }

}
