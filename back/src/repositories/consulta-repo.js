const pool = require("../dbs/postgres");

exports.save = async (consulta) => {
    const result = await pool.query(
      "INSERT INTO consultas(id_paciente, id_medico, data, hora) VALUES ($1, $2, $3, $4) RETURNING *;",
          [consulta.id_paciente,
          consulta.id_medico,
          consulta.data, 
          consulta.hora]
    );
    return result.rows[0];
  };
   
  exports.findAll = async () =>{
    const result = await pool.query("SELECT * FROM consultas;");
    return result.rows;
};
   
 
   
  exports.update = async (id, consulta) => {
    const result = await pool.query(
      "UPDATE consultas SET id_paciente=$1, id_medico=$2, data=$3, hora=$4 WHERE id=$3 RETURNING *;",
      [ consulta.id_paciente,
        consulta.id_medico,
        consulta.data, 
        consulta.hora,
        id]
    );
    return result.rows[0];
  };
   
  exports.delete = async (id) => {
    await pool.query("DELETE FROM consultas WHERE id=$1;", [id]);
  }