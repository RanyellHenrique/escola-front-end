import { StudentDTO } from './student.dto';

export interface  PageStudents {
  content: StudentDTO[];
  totalPages: number;
  totalElements: number;
  last: boolean;
  number: number;
  size: number;
}
