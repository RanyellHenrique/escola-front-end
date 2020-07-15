import { ClassDTO } from './../../models/class.dto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG} from '../../config/api.config';
import { Observable } from 'rxjs';
import { CourseDTO } from '../../models/course.dto';
import { PageCourse} from '../../models/course.page';

@Injectable()
export class ClassService{

    constructor(public http: HttpClient){
    }

    findById(id: string): Observable<ClassDTO>{
      return this.http.get<ClassDTO>(`${API_CONFIG.base_url}/turmas/${id}`);
    }

    findAll(): Observable<ClassDTO[]>{
      return this.http.get<ClassDTO[]>(`${API_CONFIG.base_url}/turmas`);
    }

    // tslint:disable-next-line: typedef
    insert(obj: CourseDTO){
      return this.http.post<ClassDTO>(`${API_CONFIG.base_url}/turmas`, obj, { observe: 'response', responseType: 'text' as 'json'});
    }
}
