import { Routes } from '@angular/router';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { AgregarEstudianteComponent } from './estudiantes/agregarestudiante/agregar-estudiante.component';
export const routes: Routes = [
{path: '', component: EstudiantesComponent, pathMatch: 'full'}, // Ruta pordefecto
{ path:'agregarEstudiante', component: AgregarEstudianteComponent},
{ path:'agregarEstudiante/:idEstudiante', component:
AgregarEstudianteComponent},
//{path: '**', redirectTo: '', pathMatch: 'full'}, // Rutas no existentes
];
