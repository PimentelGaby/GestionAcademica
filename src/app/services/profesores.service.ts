import { HttpClient } from '@angular/common/http'; 
import { Injectable, inject } from '@angular/core'; 
import { endpoints } from '../utils/enpoints'; 
import { Profesor } from '../interfaces/profesor.interface'; 
 
@Injectable({ 
  providedIn: 'root' 
}) 
export class ProfesoresService { 
  private readonly http = inject(HttpClient); 
 
  constructor() { } 
 
  obtenerProfesor() { 
    return this.http.get<Profesor[]>(endpoints.obtenerProfesor); 
  } 
} 