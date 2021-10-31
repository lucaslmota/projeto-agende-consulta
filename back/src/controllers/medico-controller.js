const Medico = require("../models/medico-model");
const MedicoService = require("../services/medico-service");
var medicoService = new MedicoService();

exports.get = async (req, res) => {
    res.json(await medicoService.getAll());
  };

  exports.getByNome = async (req, res) =>{
    res.json(await medicoService.getByNome(req.query.nome));
  };

  exports.getQtd = async (req, res) =>{
    res.json(await medicoService.getQtd(req.query.qtd));
  };
  

  exports.post = async (req, res) => {
    if (req.body.nome.length < 2 || 
        req.body.email.length < 0 || 
        req.body.celular.length == null|| 
        req.body.dt_nascimento ==null||
        req.body.sexo ==null||
        req.body.cpf ==null ||
        req.body.crm ==null ||
        req.body.estado ==null ||
        req.body.cbos ==null){
          res.status(400).send();
        }else{
          let med = await medicoService.add(
            new Medico(
              req.body.nome,
              req.body.email,
              req.body.telefone,
              req.body.celular,
              req.body.dt_nascimento,
              req.body.sexo,
              req.body.cpf,
              req.body.crm,
              req.body.estado,
              req.body.cbos)
          );

          if(med != null){
            res.status(201).json(med)
          }else{
            res.status(409).send();
          }
        }
  };

  exports.put = async (req, res) => {
    if (req.body.nome.length < 2 || 
      req.body.email.length < 0 || 
      req.body.celular.length == null|| 
      req.body.dt_nascimento ==null||
      req.body.sexo ==null||
      req.body.cpf ==null ||
      req.body.crm ==null ||
      req.body.estado ==null ||
      req.body.cbos ==null){
        res.status(400).send();
      }else{
        let med = await medicoService.update(req.params.id,
          new Medico(
            req.body.nome,
            req.body.email,
            req.body.telefone,
            req.body.celular,
            req.body.dt_nascimento,
            req.body.sexo,
            req.body.cpf,
            req.body.crm,
            req.body.estado,
            req.body.cbos)
        );

        if(med != null){
          res.status(201).json(med)
        }else{
          res.status(409).send();
        }
      }
  };

  exports.delete = (req, res) => {
    res.json(medicoService.delete(req.params.id));
  };