// ====================
// Gestión de Calificaciones de Estudiantes
// ====================

// Lista inicial de estudiantes, cada uno con un nombre y un arreglo de calificaciones
let estudiantes = [
  { nombre: "Ana", calificaciones: [85, 90, 78, 92] },
  { nombre: "Juan", calificaciones: [70, 65, 80, 75] },
  { nombre: "María", calificaciones: [95, 88, 92, 98] }
];

// Calcula el promedio de un arreglo de calificaciones
function calcularPromedio(calificaciones) {
  const suma = calificaciones.reduce((acc, val) => acc + val, 0); // suma todos los valores
  return Number((suma / calificaciones.length).toFixed(2)); // divide y redondea a 2 decimales
}

// Devuelve la calificación más alta del arreglo
function obtenerMejorCalificacion(calificaciones) {
  return Math.max(...calificaciones); // usa el operador spread para comparar todos los valores
}

// Devuelve la calificación más baja del arreglo
function obtenerPeorCalificacion(calificaciones) {
  return Math.min(...calificaciones); // igual que el anterior pero busca el mínimo
}

// Muestra todos los estudiantes y sus calificaciones en un alert
function mostrarEstudiantes() {
  let texto = " Lista de estudiantes:\n";
  estudiantes.forEach(est => {
    texto += `${est.nombre} → ${est.calificaciones.join(", ")}\n`; // une las calificaciones con comas
  });
  alert(texto); // muestra el resultado
}

// Agrega una nueva calificación a un estudiante
function agregarCalificacion() {
  const nombre = prompt("¿A qué estudiante deseas agregar una calificación?");
  const calificacion = parseFloat(prompt("¿Qué calificación deseas agregar?")); // convierte texto a número
  const estudiante = estudiantes.find(est => est.nombre === nombre); // busca al estudiante por nombre

  if (estudiante && !isNaN(calificacion)) { // verifica que exista y que la nota sea válida
    estudiante.calificaciones.push(calificacion); // agrega la nota
    alert(` Calificación ${calificacion} agregada a ${nombre}.`);
  } else {
    alert(" Estudiante no encontrado o calificación inválida.");
  }
}

// Elimina la última calificación del arreglo de un estudiante
function eliminarUltimaCalificacion() {
  const nombre = prompt("¿De qué estudiante deseas eliminar la última calificación?");
  const estudiante = estudiantes.find(est => est.nombre === nombre);

  if (estudiante && estudiante.calificaciones.length > 0) {
    const eliminada = estudiante.calificaciones.pop(); // elimina y guarda la nota eliminada
    alert(` Se eliminó la calificación ${eliminada} de ${nombre}.`);
  } else {
    alert(" Estudiante no encontrado o sin calificaciones.");
  }
}

// Muestra un reporte individual de un estudiante: notas, promedio, mejor y peor calificación
function generarReporteIndividual() {
  const nombre = prompt("¿De qué estudiante deseas ver el reporte?");
  const estudiante = estudiantes.find(est => est.nombre === nombre);

  if (!estudiante) { // si no se encuentra, se avisa y se detiene la función
    alert(" Estudiante no encontrado.");
    return;
  }

  // Calcula y construye el mensaje con todos los datos
  const promedio = calcularPromedio(estudiante.calificaciones);
  const mejor = obtenerMejorCalificacion(estudiante.calificaciones);
  const peor = obtenerPeorCalificacion(estudiante.calificaciones);

  let texto = ` Reporte de ${nombre}:\n`;
  texto += `Calificaciones: ${estudiante.calificaciones.join(", ")}\n`;
  texto += `Promedio: ${promedio}\n`;
  texto += `Mejor calificación: ${mejor}\n`;
  texto += `Peor calificación: ${peor}`;
  alert(texto);
}

// Muestra todos los estudiantes que tienen promedio mayor o igual a 70
function mostrarAprobados() {
  const aprobados = estudiantes.filter(est => calcularPromedio(est.calificaciones) >= 70);

  if (aprobados.length === 0) {
    alert(" No hay estudiantes aprobados.");
    return;
  }

  let texto = " Estudiantes Aprobados:\n\n";
  aprobados.forEach(est => {
    texto += `${est.nombre} → Promedio: ${calcularPromedio(est.calificaciones)}\n`;
  });
  alert(texto);
}

// Ordena la lista de estudiantes alfabéticamente por nombre
function ordenarEstudiantesPorNombre() {
  estudiantes.sort((a, b) => a.nombre.localeCompare(b.nombre)); // ordena A-Z usando método de string
  alert("📚 Estudiantes ordenados alfabéticamente.");
}

// Menú principal que se repite hasta que el usuario decide salir (opción 0)
function iniciarGestionCalificaciones() {
  let opcion = "";

  do {
    // Muestra las opciones disponibles al usuario
    opcion = prompt(
      " MENÚ DE GESTIÓN DE ESTUDIANTES \n\n" +
      "1. Mostrar estudiantes\n" +
      "2. Agregar calificación\n" +
      "3. Eliminar última calificación\n" +
      "4. Ver reporte individual\n" +
      "5. Ver estudiantes aprobados\n" +
      "6. Ordenar estudiantes por nombre\n" +
      "0. Salir\n\n" +
      "Escribe el número de la opción:"
    );

    // Ejecuta la acción según la opción elegida
    switch (opcion) {
      case "1":
        mostrarEstudiantes();
        break;
      case "2":
        agregarCalificacion();
        break;
      case "3":
        eliminarUltimaCalificacion();
        break;
      case "4":
        generarReporteIndividual();
        break;
      case "5":
        mostrarAprobados();
        break;
      case "6":
        ordenarEstudiantesPorNombre();
        break;
      case "0":
        alert(" Hasta pronto.");
        break;
      default:
        alert(" Opción no válida.");
        break;
    }
  } while (opcion !== "0"); // se repite mientras el usuario no escriba "0"
}

// Ejecuta el menú cuando se carga el script
iniciarGestionCalificaciones();
