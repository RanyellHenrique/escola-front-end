import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG} from '../../config/api.config';
import { Observable } from 'rxjs';
import { CourseDTO } from '../../models/course.dto';
import { PageCourse} from '../../models/course.page';

@Injectable()
export class CourseService{

    constructor(public http: HttpClient){

    }

    findAll(): Observable<CourseDTO[]>{
      return this.http.get<CourseDTO[]>(`${API_CONFIG.base_url}/cursos`);
    }

    findPerPageAndName(page: number = 0, lines: number = 24, name: string ): Observable<PageCourse>{
      return this.http.get<PageCourse>(`${API_CONFIG.base_url}/cursos/page/search?search=${name}&page=${page}&linesPerPage=${lines}&orderBy=id`);
    }
}
