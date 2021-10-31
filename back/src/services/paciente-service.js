const pacienteRepo = require("../repositories/paciente-repo");
class PacienteService {
    
    
    add(paciente) {
      return pacienteRepo.save(paciente)
    }
    
    getAll(){
      return pacienteRepo.findAll();
    }
    
    getByNome(nome) {
      return pacienteRepo.findByName(nome);
    }

    getQtd(qtd){
      return pacienteRepo.getByQtd(qtd)
    }
  
    update(id, paciente) {
     return pacienteRepo.update(id, paciente);
    }
    
    delete(id) {
      return pacienteRepo.delete(id);
    }
  }
    
  module.exports = PacienteService;