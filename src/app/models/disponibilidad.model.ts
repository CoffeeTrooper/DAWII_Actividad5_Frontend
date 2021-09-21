import { Ciclo } from "./ciclo.model";
import { Usuario } from "./usuario.model";

export class Disponibilidad {
    idDisponibilidad?: number;
	horaInicio?: Date;
	horaFin?: Date;
	dia?: string;
	ciclo?: Ciclo;
	usuario?: Usuario;
}
