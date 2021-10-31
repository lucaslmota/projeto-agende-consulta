const Paciente = require("../models/paciente-model");
const PacienteService = require("../services/paciente-service");

var pacienteService = new PacienteService();

exports.get = async (req, res)=>{
    res.json(await pacienteService.getAll());
};

exports.getByNome = async (req,res) =>{
    res.json(await pacienteService.getByNome(req.query.nome));
};

exports.getQtd = async (req, res) =>{
    res.json(await pacienteService.getQtd(req.query.qtd));
  };

exports.post = async (req, res) =>{
    if(req.body.nome.length < 2 || 
        req.body.email == null ||
        req.body.celular == null ||
        req.body.dt_nascimento == null ||
        req.body.sexo == null ||
        req.body.cpf == null ||
        req.body.rua == null ||
        req.body.cep == null ||
        req.body.num_casa == null ||
        req.body.bairro == null ||
        req.body.cidade == null
        ){
            res.status(400).send();
        }else{
            let paci =await pacienteService.add(
                new Paciente(
                    req.body.nome,
                    req.body.email,
                    req.body.telefone,
                    req.body.celular,
                    req.body.dt_nascimento,
                    req.body.sexo,
                    req.body.cpf,
                    req.body.rua,
                    req.body.cep,
                    req.body.num_casa,
                    req.body.complemento,
                    req.body.bairro,
                    req.body.cidade)
            );
            
            if(paci != null){
                res.status(201).json(paci);
            }else{
                res.status(409).send()
            }   
        }  
};

exports.put = async (req,res) =>{
    if(req.body.nome.length < 2 || 
        req.body.email == null ||
        req.body.celular == null ||
        req.body.dt_nascimento == null ||
        req.body.sexo == null ||
        req.body.cpf == null ||
        req.body.rua == null ||
        req.body.cep == null ||
        req.body.num_casa == null ||
        req.body.bairro == null ||
        req.body.cidade == null){
            res.status(400).send();
        }else{
            let paci =await pacienteService.update(req.params.id,
                new Paciente(
                    req.body.nome,
                    req.body.email,
                    req.body.telefone,
                    req.body.celular,
                    req.body.dt_nascimento,
                    req.body.sexo,
                    req.body.cpf,
                    req.body.rua,
                    req.body.cep,
                    req.body.num_casa,
                    req.body.complemento,
                    req.body.bairro,
                    req.body.cidade)
            );
            
            if(paci != null){
                res.status(201).json(paci);
            }else{
                res.status(409).send()
            }   
        }
};



exports.delete = (req,res) =>{
    res.json(pacienteService.delete(req.params.id));
};