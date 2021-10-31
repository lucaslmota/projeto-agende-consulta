class Consulta{
    constructor(id_paciente, id_medico, data, hora){
        this.id_paciente = id_paciente;
        this.id_medico = id_medico;
        this.data = data;
        this.hora = hora;
    }
}

module.exports = Consulta;