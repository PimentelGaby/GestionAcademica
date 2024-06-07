import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { endpoints } from '../utils/enpoints';
import { Estudiante } from '../interfaces/estudiante.interface';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {
  private readonly http = inject(HttpClient);

  constructor() { }

  obtenerEstudiantes() {
    return this.http.get<Estudiante[]>(endpoints.ObtenerEstudiante);
  }
  // Obtener estudiante por ID
  obtenerEstudiantePorID(idEstudiante: number) {
    return this.http.get<Estudiante>(endpoints.ObtenerEstudiantePorID.replace(':idEstudiante', idEstudiante.toString()));
  }
  // Insertar estudiante
  agregarEstudiante(estudiante: Estudiante) {
    // Se arma el objeto a enviar
    let body = {
      "nombresEstudiante": estudiante.nombreEstudiante,
      "apellidosEstudiante": estudiante.apellidoEstudiante,
      "codigoEstudiante": estudiante.codigoestudiante,
      "correoEstudiante": estudiante.correoestudiante
    }
    return this.http.post<any>(endpoints.agregarEstudiante, body);
  }
  // Eliminar un estudiante
  eliminarEstudiante(idEstudiante: number) {
    return this.http.delete<any>(endpoints.EliminarEstudiante.replace(':idEstudiante',
      idEstudiante.toString()));
  }

  // Actualizar estudiante
  actualizarEstudiante(idEstudiante: number, estudiante: Estudiante) {
    // Se arma el objeto a enviar
    let body = {
      "idEstudiante": estudiante.idEstudiante,
      "nombresEstudiante": estudiante.nombreEstudiante,
      "apellidosEstudiante": estudiante.apellidoEstudiante,
      "codigoEstudiante": estudiante.codigoestudiante,
      "correoEstudiante": estudiante.correoestudiante
    }
    return  this.http.put<number>(endpoints.ActualizarEstudiante.replace(':idEstudiante', idEstudiante.toString()), body);
  }

}

