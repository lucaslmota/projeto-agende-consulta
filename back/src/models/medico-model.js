class Medico{
    constructor(nome, email, telefone, celular, dt_nascimento, sexo, cpf, crm, estado, cbos){
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.celular = celular;
        this.dt_nascimento = dt_nascimento;
        this.sexo = sexo;
        this.cpf = cpf;
        this.crm = crm;
        this.estado = estado;
        this.cbos = cbos;
    }
}

module.exports = Medico;