class Paciente{
    constructor(nome, email, telefone, celular, dt_nascimento, sexo, cpf, rua, cep, num_casa, complemento, bairro, cidade){
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.celular = celular;
        this.dt_nascimento = dt_nascimento;
        this.sexo = sexo;
        this.cpf = cpf;
        this.rua = rua;
        this.cep = cep;
        this.num_casa = num_casa;
        this.complemento = complemento;
        this.bairro = bairro;
        this.cidade = cidade;
    }
}

module.exports = Paciente;