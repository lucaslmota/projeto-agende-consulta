const pool = require("../dbs/postgres");



exports.save = async (medico) => {
    const result = await pool.query(
      "INSERT INTO medicos(nome, email, telefone, celular, dt_nascimento, sexo, cpf, crm, estado, cbos) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *;",
        [medico.nome, 
        medico.email,
        medico.telefone,
        medico.celular,
        medico.dt_nascimento,
        medico.sexo,
        medico.cpf,
        medico.crm,
        medico.estado,
        medico.cbos]
    );
    return result.rows[0];
  };
   
  exports.findAll = async () =>{
    const result = await pool.query("SELECT * FROM medicos;");
    return result.rows;
};
   
  exports.findByName = async (nome) => {
    const result = await pool.query("SELECT * FROM medicos WHERE nome=$1;", [nome]);
    return result.rows;
  };

  exports.getByQtd = async (qtd) => {
    const result = await pool.query("SELECT * FROM medicos LIMIT $1;",[qtd]);
    return result.rows;
  };
   
  exports.update = async (id, medico) => {
    const result = await pool.query(
      "UPDATE medicos SET nome=$1, email=$2, telefone=$3, celular=$4, dt_nascimento=$5, sexo=$6, cpf=$7, crm=$8, estado=$9, cbos=$10 WHERE id=$11 RETURNING *;",
        [medico.nome, 
        medico.email,
        medico.telefone,
        medico.celular,
        medico.dt_nascimento,
        medico.sexo,
        medico.cpf,
        medico.crm,
        medico.estado,
        medico.cbos,
        id]
    );
    return result.rows[0];
  };
   
  exports.delete = async (id) => {
    await pool.query("DELETE FROM medicos WHERE id=$1;", [id]);
  };