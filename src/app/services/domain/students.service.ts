import { StudentDTO } from './../../models/student.dto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {API_CONFIG} from '../../config/api.config';
import { Observable } from 'rxjs';
import { PageStudents } from '../../models/students.page';

@Injectable()
export class StudentService{

    constructor(public http: HttpClient){

    }

    findAll(): Observable<StudentDTO[]>{
      return this.http.get<StudentDTO[]>(`${API_CONFIG.base_url}/alunos`);
    }

    findPerPage(page: number = 0, lines: number = 12 ): Observable<PageStudents>{
      return this.http.get<PageStudents>(`${API_CONFIG.base_url}/alunos/page?page=${page}&linesPerPage=${lines}&orderBy=id`);
    }

    findPerPageAndName(name: string, page: number = 0, lines: number = 12): Observable<PageStudents>{
      return this.http.get<PageStudents>(`${API_CONFIG.base_url}/alunos/page/search?search=${name}&page=${page}&linesPerPage=${lines}&orderBy=id`);
    }

    findByEmail(email: string): Observable<StudentDTO>{
      return this.http.get<StudentDTO>(`${API_CONFIG.base_url}/alunos/email?value=${email}`);
    }

    findById(id: string): Observable<StudentDTO>{
      return this.http.get<StudentDTO>(`${API_CONFIG.base_url}/alunos/${id}`);
    }

}
