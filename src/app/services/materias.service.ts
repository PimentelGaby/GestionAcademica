import { HttpClient } from '@angular/common/http'; 
import { Injectable, inject } from '@angular/core'; 
import { endpoints } from '../utils/enpoints'; 
import { Materia } from '../interfaces/materia.interface'; 
 
@Injectable({ 
  providedIn: 'root' 
}) 
export class MateriasService { 
  private readonly http = inject(HttpClient); 
 
  constructor() { } 
 
  obtenerMateria() { 
    return this.http.get<Materia[]>(endpoints.obtenerMateria); 
  } 
} 