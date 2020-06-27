import { StudentDTO } from './student.dto';

export interface  PageResponse {
  content: StudentDTO[];
  totalPages: number;
  totalElements: number;
  last: boolean;
  number: number;
}
