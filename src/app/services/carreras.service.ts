import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { endpoints } from '../utils/enpoints';
import { Carrera } from '../interfaces/carrera.interface';

@Injectable({
  providedIn: 'root'
})
export class CarreraService {
  private readonly http = inject(HttpClient);

  constructor() { }

  obtenerCarrera() {
    return this.http.get<Carrera[]>(endpoints.obtenerCarrera);
  }
  // Obtener estudiante por ID
  obtenerCarreraPorID(idCarrera: number) {
    return this.http.get<Carrera>(endpoints.obtenerCarreraPorID.replace(':idCarrera', idCarrera.toString()));
  }
  // Insertar estudiante
  agregarCarrera(carrera: Carrera) {
    // Se arma el objeto a enviar
    let body = {
      "CodigoCarrera": carrera.codigoCarrera,
      "NombreCarrera": carrera.nombreCarrera
    }
    return this.http.post<any>(endpoints.agregarCarrera, body);
  }
  // Eliminar un estudiante
  eliminarCarrera(idCarrera: number) {
    return this.http.delete<any>(endpoints.eliminarCarrera.replace(':idCarrera',
    idCarrera.toString()));
  }

  // Actualizar estudiante
  actualizarCarrera(idCarrera: number, carrera: Carrera) {
    // Se arma el objeto a enviar
    let body = {
      "codigoCarrera": carrera.codigoCarrera,
      "nombreCarrera": carrera.nombreCarrera,
      
    }
    return  this.http.put<number>(endpoints.actualizarCarrera.replace(':idEstudiante', idCarrera.toString()), body);
  }

}



