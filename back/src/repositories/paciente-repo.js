const pool = require("../dbs/postgres");



exports.save = async (paciente) => {
    const result = await pool.query(
      "INSERT INTO pacientes(nome, email, telefone, celular, dt_nascimento, sexo, cpf, rua, cep, num_casa, complemento, bairro, cidade) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING *;",
        [paciente.nome, 
        paciente.email,
        paciente.telefone,
        paciente.celular,
        paciente.dt_nascimento,
        paciente.sexo,
        paciente.cpf,
        paciente.rua,
        paciente.cep,
        paciente.num_casa,
        paciente.complemento,
        paciente.bairro,
        paciente.cidade]
    );
    return result.rows[0];
  };
  
  exports.findAll = async () =>{
    const result = await pool.query("SELECT * FROM pacientes;");
    return result.rows;
  };
   
  exports.findByName = async (nome) => {
    const result = await pool.query("SELECT * FROM pacientes WHERE nome=$1;", [
      nome,
    ]);
    return result.rows;
  };
  
  exports.getByQtd = async (qtd) => {
    const result = await pool.query("SELECT * FROM pacientes LIMIT $1;",[qtd]);
    return result.rows;
  };

  exports.update = async (id, paciente) => {
    const result = await pool.query(
      "UPDATE pacientes SET nome=$1, email=$2, telefone=$3, celular=$4, dt_nascimento=$5, sexo=$6, cpf=$7, rua=$8, cep=$9, num_casa=$10, complemento=$11, bairro=$12, cidade=$13 WHERE id=$14 RETURNING *;",
      [paciente.nome, 
        paciente.email,
        paciente.telefone,
        paciente.celular,
        paciente.dt_nascimento,
        paciente.sexo,
        paciente.cpf,
        paciente.rua,
        paciente.cep,
        paciente.num_casa,
        paciente.complemento,
        paciente.bairro,
        paciente.cidade,
        id]
    );
    return result.rows[0];
  };
   
  exports.delete = async (id) => {
    await pool.query("DELETE FROM pacientes WHERE id=$1;", [id]);
  };