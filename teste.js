
function CalculaHorario(Horario, Segundos) {
    [ horarioHoras, horarioMinutos, horarioSegundos ] = Horario.split(':');
    let horas = parseInt(horarioHoras);
    let minutos = parseInt(horarioMinutos);
    let segundos = parseInt(horarioSegundos);

    segundos += Segundos;
    if(segundos > 60){
        let newSegundos = Number.parseInt(segundos % 60);
        minutos += Number.parseInt(segundos / 60);
        segundos = newSegundos
        if(minutos > 60){
            let newMinutos = Number.parseInt(minutos % 60);
            horas += Number.parseInt(minutos / 60);
            minutos = newMinutos;
        }
    }

    return `${horas}:${minutos}:${segundos}`
}   