import { HttpClient } from '@angular/common/http'; 
import { Injectable, inject } from '@angular/core'; 
import { endpoints } from '../utils/enpoints'; 
import { Grupo } from '../interfaces/grupo.interface'; 
 
@Injectable({ 
  providedIn: 'root' 
}) 
export class GruposService { 
  private readonly http = inject(HttpClient); 
 
  constructor() { } 
 
  obtenerGrupo() { 
    return this.http.get<Grupo[]>(endpoints.obtenerGrupo); 
  } 
}   