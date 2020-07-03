import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {API_CONFIG} from '../../config/api.config';
import { Observable } from 'rxjs';
import { CourseDTO } from '../../models/course.dto';

@Injectable()
export class CourseService{

    constructor(public http: HttpClient){

    }

    findAll(): Observable<CourseDTO[]>{
      return this.http.get<CourseDTO[]>(`${API_CONFIG.base_url}/cursos`);
    }
}
