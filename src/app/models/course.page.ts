import { CourseDTO } from './course.dto';

export interface  PageCourse {
  content: CourseDTO[];
  totalPages: number;
  totalElements: number;
  last: boolean;
  number: number;
  size: number;
}
