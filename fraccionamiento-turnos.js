function main() {
  const duracion_turno = 20; //minutos
  const inicio_disponibilidad = 630; // En minutos, 10:30 am
  const fin_disponibilidad = 760; // En minutos, 12:40 mediodía
  const lapso_disponibilidad = fin_disponibilidad - inicio_disponibilidad; // 130 mins
  const cantidad_turnos = Math.trunc(lapso_disponibilidad / duracion_turno); // 6 turnos y sobran 10 minutos
  const horarios_turnos = [];
  var iteracion = 0;
  var horario_turno_actual = inicio_disponibilidad;

  horarios_turnos.push(
    Math.trunc(inicio_disponibilidad / 60) + ":" + (horario_turno_actual % 60)
  );

  while (iteracion < cantidad_turnos - 1) {
    horario_turno_actual = horario_turno_actual + duracion_turno;
    horarios_turnos.push(
      Math.trunc(horario_turno_actual / 60) + ":" + (horario_turno_actual % 60)
    );
    iteracion++;
  }

  //   Para ver:

  console.log(
    "Hora de inicio: ",
    Math.trunc(inicio_disponibilidad / 60) + ":" + (inicio_disponibilidad % 60)
  );
  console.log(
    "Hora de fin: ",
    Math.trunc(fin_disponibilidad / 60) + ":" + (fin_disponibilidad % 60)
  );
  console.log(
    "Lapso disponibilidad: ",
    Math.trunc(lapso_disponibilidad / 60) + ":" + (lapso_disponibilidad % 60)
  );
  console.log("Cantidad de turnos: ", cantidad_turnos);
  console.log("Duracion del turno: ", duracion_turno);
  console.log("Horarios de turnos: ", horarios_turnos);

  return horarios_turnos;
}

main();
