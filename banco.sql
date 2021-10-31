CREATE DATABASE IF NOT EXISTS consulta;
CREATE USER postgres WITH ENCRYPTED PASSWORD '1234';
GRANT ALL PRIVILEGES ON DATABASE consulta TO postgres;

\c consulta postgres;

CREATE TABLE IF NOT EXISTS usuarios(
    id BIGSERIAL PRIMARY KEY,
    nome text NOT NULL,
    usuario text NOT NULL,
    senha text NOT NULL
);

INSERT INTO usuarios (nome, usuario, senha) VALUES ('administrador', 'admin', 'password');

CREATE TABLE IF NOT EXISTS pacientes(
    id BIGSERIAL PRIMARY KEY,
    nome text NOT NULL,
    email text NOT NULL,
    telefone text NOT NULL,
    cpf text NOT NULL,
    celular text NOT NULL,
    dt_nascimento text NOT NULL,
    sexo text NOT NULL,
    rua text NOT NULL,
    cep text NOT NULL,
    num_casa text NOT NULL,
    complemento text NOT NULL,
    bairro text NOT NULL,
    cidade text NOT NULL
);


CREATE TABLE IF NOT EXISTS medicos(
    id BIGSERIAL PRIMARY KEY,
    nome text NOT NULL,
    email text NOT NULL,
    telefone text NOT NULL,
    celular text NOT NULL,
    dt_nascimento text NOT NULL,
    sexo text NOT NULL,
    cpf text NOT NULL,
    crm text NOT NULL, 
    estado text NOT NULL,
    cbos text NOT NULL
);

CREATE TABLE IF NOT EXISTS consultas
(
    id BIGSERIAL PRIMARY KEY,
    id_paciente BIGSERIAL NOT NULL,
    id_medico BIGSERIAL NOT NULL,
    data text NOT NULL,
    hora text NOT NULL,
    FOREIGN KEY (id_paciente) REFERENCES pacientes (id),
    FOREIGN KEY (id_medico) REFERENCES medicos (id)
)

