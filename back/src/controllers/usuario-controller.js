const Usuario = require("../models/usuario-model");
const UsuarioService = require("../services/usuario-service");

var usuarioService = new UsuarioService();

exports.get = async (req, res)=>{
    res.json(await usuarioService.getAll());
};

exports.getByNome = async (req,res) =>{
    res.json(await usuarioService.getByNome(req.query.nome));
};

exports.getQtd = async (req, res) =>{
    res.json(await usuarioService.getQtd(req.query.qtd));
  };

exports.post = async (req, res) =>{
    if(req.body.nome == null||
        req.body.usuario == null||
        req.body.senha == null){
            res.status(400).send();
        }else{
            let user = await usuarioService.add(
                new Usuario(
                    req.body.nome, 
                    req.body.usuario,
                    req.body.senha)
            );

            if(user != null){
                res.status(201).json(user);
            }else{
                res.status(409).send();
            }
        }
};

exports.put = async (req,res) =>{
    if(req.body.nome == null||
        req.body.usuario == null||
        req.body.senha == null){
            res.status(400).send();
        }else{
            let user = await usuarioService.update( req.params.id,
                new Usuario(
                    req.body.nome, 
                    req.body.usuario,
                    req.body.senha)
            );

            if(user != null){
                res.status(201).json(user);
            }else{
                res.status(409).send();
            }
        }
};



exports.delete = (req,res) =>{
    res.json(usuarioService.delete(req.params.id));
};