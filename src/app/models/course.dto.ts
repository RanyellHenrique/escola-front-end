import { ClassDTO } from './class.dto';

export interface CourseDTO {
  id: string;
  nome: string;
  cargaHoraria: string;
  notaMinima: string;
  turmas?: ClassDTO[];
}
