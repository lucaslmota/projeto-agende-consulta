const usuarioRepo = require("../repositories/usuario-repo");
class UsuarioService {
   
    
    add(usuario) {
      return usuarioRepo.save(usuario);
    }

    getAll(){
      return usuarioRepo.findAll();
    }

    getByNome(nome) {
      return usuarioRepo.findByName(nome);
    }

    getQtd(qtd){
      return usuarioRepo.getByQtd(qtd)
    }

    update(id, usuario) {
      return usuarioRepo.update(id, usuario);
    }
    
    delete(id) {
     return usuarioRepo.delete(id);
  }
}
    
  module.exports = UsuarioService;