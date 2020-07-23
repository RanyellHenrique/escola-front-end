import { StudentDTO } from './student.dto';
import { CourseDTO } from './course.dto';

export interface ClassDTO {
  curso: CourseDTO;
  id: string;
  data: string;
  numeroDeVagas: number;
  disciplinas?: any[];
  matriculas?: any[];
}
