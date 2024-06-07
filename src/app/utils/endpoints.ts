import { environment } from "../../environments/environment.development";
export const endpoints = {
// *** Estudiantes ***
agregarEstudiante:
environment.serverURL.concat('api/estudiantes/agregarEstudiante'),
actualizarEstudiante:
environment.serverURL.concat('api/estudiantes/actualizarEstudiante/:idEstudiante'
),
eliminarEstudiante:
environment.serverURL.concat('api/estudiantes/eliminarEstudiante/:idEstudiante'),
obtenerEstudiantePorID:
environment.serverURL.concat('api/estudiantes/obtenerEstudiantePorID/:idEstudiante'),
obtenerEstudiantes:
environment.serverURL.concat('api/estudiantes/obtenerEstudiantes'),

//CARRERA
agregarCarrera : environment.serverURL.concat("api/carrera/agregarCarrera"),
actualizarCarrera : environment.serverURL.concat("api/carrera/actualizarCarrera"),
eliminarCarrera : environment.serverURL.concat("api/carrera/eliminarCarrera"),
obtenerCarreraPorID : environment.serverURL.concat("api/carrera/obtenerCarreraPorID"),
obtenerCarrera : environment.serverURL.concat("api/carrera/obtenerCarreras"),
//GRUPO
agregarGrupo : environment.serverURL.concat("api/grupo/agregarGrupo"),
actualizarGrupo : environment.serverURL.concat("api/grupo/actualizarGrupo"),
eliminarGrupo : environment.serverURL.concat("api/grupo/eliminarGrupo"),
obtenerGrupoPorID : environment.serverURL.concat("api/grupo/obtenerGrupoPorID"),
obtenerGrupo : environment.serverURL.concat("api/grupo/obtenerGrupos"),
//MATERIA
agregarMateria : environment.serverURL.concat("api/materias/agregarMateria"),
actualizarMateria : environment.serverURL.concat("api/materias/actualizarMateria"),
eliminarMateria : environment.serverURL.concat("api/materias/eliminarMateria"),
obtenerMateriaPorID : environment.serverURL.concat("api/materias/obtenerMateriaPorID"),
obtenerMateria : environment.serverURL.concat("api/materias/obtenerMaterias"),
//PROFESOR
agregarProfesor : environment.serverURL.concat("api/profesor/agregarProfesor"),
actualizarProfesor : environment.serverURL.concat("api/profesor/actualizarProfesor"),
eliminarProfesor : environment.serverURL.concat("api/profesor/eliminarProfesor"),
obtenerProfesorPorID : environment.serverURL.concat("api/profesor/obtenerProfesorPorID"),
obtenerProfesor : environment.serverURL.concat("api/profesor/obtenerProfesores"),


// ***********************
};