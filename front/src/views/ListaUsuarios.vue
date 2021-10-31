<template>
  <div class="container">
        <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0 d-none d-lg-block bg-primary text-center">
                    <br/>
                    <h1 class="h3 text-light mb-4 align-center">Lista de Usuários</h1>
                <div class="px-2 border-0 my-5 ">
                        <table class="table table-striped table-light rounded">
                            <tr>
                                <td>ID</td>
                                <td>NOME</td>
                                <td>USUÁRIO</td>
                                <td>SENHA</td>
                            </tr>
                            <tr  v-for="usuario in usuarios " :key="usuario.id" >
                                <td>{{ usuario.id}}</td>
                                <td>{{ usuario.nome}}</td>
                                <td>{{ usuario.usuario }}</td>
                                <td>{{ usuario.senha }}</td>
                                <td>
                                    <button type="reset" class="btn btn-light btn-sm btn-block" href="#divEdit" @click="preencheCampos(usuario.id)">Editar</button> 
                                </td>
                                <td>
                                    <button type="reset" class="btn btn-light btn-sm btn-block" @click="deleteUsuario(usuario.id)">Deletar</button> 
                                </td>
                            </tr>
                        </table>
                    </div>
                       
                        
                        <div class="mb-4 justify-content-md-center col-md-auto w-25 centraliza">
                            <!-- <button type="submit" class="btn btn-primary btn-lg btn-block" @click="getAll">Mostrar</button><br/> -->
                            <button type="reset" class="btn btn-light btn-lg btn-block" @click="this.$router.replace('pagina-inicial')">Voltar</button>
                            
                        </div>
            </div>
        </div>

        <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0 d-none d-lg-block bg-primary text-center">
                <br/>
                <h1 class="h3 text-light mb-4 align-center">Pesquisar</h1>
                <div class="px-2 border-0 my-5 ">
                        
                        <div class="form-row">
                        <div class="col barra-pesquisa">
                            <div class="input-group">
                            <input type="text" class="form-control bg-light border-0 small" placeholder="Pesquisar por nome" aria-label="Search" aria-describedby="basic-addon2" v-model="campo_nome">
                                <div class="input-group-append">
                                    <button class="btn btn-primary" type="button" @click="buscarNome()">
                                     <i class="fas fa-search fa-sm"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        </div>

                        <br/>
                        <br/>
                        <br/>
                        <table class="table table-striped table-light rounded">
                            <tr>
                                <td>ID</td>
                                <td>NOME</td>
                                <td>USUÁRIO</td>
                                <td>SENHA</td>
                            </tr>
                            <!-- FALTA ALTERAR -->
                            <tr  v-for="usuario in usuariosNome" :key="usuario.id" >
                                <td>{{ usuario.id}}</td>
                                <td>{{ usuario.nome}}</td>
                                <td>{{ usuario.usuario }}</td>
                                <td>{{ usuario.senha }}</td>
                                <td>
                                    <button type="reset" class="btn btn-light btn-sm btn-block" @click="preencheCampos(usuario.id)" href="#divEdit">Editar</button>
                                    <button type="reset" class="btn btn-light btn-sm btn-block" @click="DeleteMedico(usuario.id)">Deletar</button>
                                </td>
                            </tr>
                        </table>
                    </div>

                    <div class="px-2 border-0 shadow-lg my-5 ">
                    <div class="form-row">
                        <div class="col barra-pesquisa">
                            <div class="input-group">
                            <input type="text" class="form-control bg-light border-0 small" placeholder="Quantidade" aria-label="Search" aria-describedby="basic-addon2" v-model="campo_qtd">
                                <div class="input-group-append">
                                    <button class="btn btn-primary" type="button" @click="buscarQtd()">
                                     <i class="fas fa-search fa-sm"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        </div>

                        <br/>
                        <br/>
                        <br/>
                        <table class="table table-striped table-light rounded">
                            <tr>
                                <td>ID</td>
                                <td>NOME</td>
                                <td>USUÁRIO</td>
                                <td>SENHA</td>
                            </tr>
                            <!-- FALTA ALTERAR -->
                            <tr  v-for="usuario in usuariosQtd" :key="usuario.id" >
                                <td>{{ usuario.id}}</td>
                                <td>{{ usuario.nome}}</td>
                                <td>{{ usuario.usuario }}</td>
                                <td>{{ usuario.senha }}</td>
                                <td>
                                    <button type="reset" class="btn btn-light btn-sm btn-block" @click="preencheCampos(usuario.id)">Editar</button>
                                    <button type="reset" class="btn btn-light btn-sm btn-block" @click="DeleteMedico(usuario.id)">Deletar</button>
                                </td>
                            </tr>
                        </table>
                    </div>
                        <br/>
                        <hr/>
                        <br/>
                        <div class="mb-4 justify-content-md-center col-md-auto w-25 centraliza">
                            <!-- <button type="submit" class="btn btn-primary btn-lg btn-block" @click="getAll">Mostrar</button><br/> -->
                            <button type="reset" class="btn btn-light btn-lg btn-block " @click="this.$router.replace('pagina-inicial')">Voltar</button>
                        </div>
            </div>
            </div>

        <div class="container" id="divEdit">
            <div class="card o-hidden border-0 shadow-lg my-5">
                <div class="card-body p-0 d-none d-lg-block bg-primary text-center">
                    <br/>
                    <h1 class="h4 text-light mb-4 align-center">Editar</h1>
                    <div class="px-2 border-0 my-5">
                        
                        <div class="form-row">
                            <div class="col left-inner-addon">
                                <!-- v-mask="'##/##/####'" -->
                                <input type="text" id="nome" name="nome" class="form-control" placeholder="Nome"
                                    v-model="nome" required>
                                <div class="invalid-feedback">
                                    Nome é obrigatório
                                </div>
                            </div>
                            
                            <div class="col left-inner-addon">
                      
                                <input type="text" id="usuario" name="usuario" class="form-control" placeholder="Usuário"
                                    v-model="usuario" required>
                                <div class="invalid-feedback">
                                    Usuário é obrigatório
                                </div>

                            </div>
                            
                            <div class="col left-inner-addon">
                      
                                <input type="password" id="senha" name="senha" class="form-control" placeholder="Senha"
                                    v-model="senha" required>
                                <div class="invalid-feedback">
                                    Senha é obrigatoria
                                </div>

                            </div>
                        </div>

                    </div>
                    
                    <div class="mb-4 justify-content-md-center col-md-auto w-25 centraliza">
                        <button type="reset" class="btn btn-light btn-lg btn-block" @click="validaUsuario(this.id)">Atualizar</button>   
                    </div>
                </div>
            </div>
        </div>

    </div>

    

</template>

<script>
import axios from "axios";

export default {
      data() {
            return {
                id: "",
                nome: "",
                usuario: "",
                senha: "",
                usuarios: [],
                usuariosQtd: [],
                usuariosNome: [],
                baseURI:"http://localhost:3000/usuarios"      
            }
      },
      methods:{
        getAll() {
            axios.get(this.baseURI).then((result) =>{
                    this.usuarios = result.data
            })
        },

        usuarioExiste(){
            for(var i = 0; i < this.usuarios.length; i++){
                if(this.usuario == this.usuarios[i].usuario){
                    if(this.id == this.usuarios[i].id){ // verifica se o paciente que achou o crm igual é o proprio paciente
                        return false
                    }
                    else{
                        return true 
                    }
                }
            }
            return false
        },

        preencheCampos(id){
            for(var i = 0; i < this.usuarios.length; i++){
                if(id == this.usuarios[i].id){
                    this.id = this.usuarios[i].id,
                    this.nome = this.usuarios[i].nome,
                    this.usuario = this.usuarios[i].usuario
                    //this.senha = this.usuarios[i].senha
                }    
            } 
        },

        limpar(){
            this.id = "",
            this.nome = "",
            this.usuario = "",
            this.senha = ""
        },

        validaUsuario(id){
            if(this.id == ""){
                alert("Usuário não selecionado!")
            }
            else{
                if(this.nome == "" || this.usuario == "" || this.senha == ""){
                    alert("Preencha todos os campos!");
                }
                else{
                    if(this.usuarioExiste()){
                        alert("Usuario já cadastrado!");
                    }
                    else{
                        this.PutUsuario(id);
                    }
                }

            }
        },
        
        PutUsuario(id){
           let obj = {
                nome: this.nome,
                usuario: this.usuario,
                senha: this.senha
            };
          
            if(axios.put(this.baseURI+"/" + id, obj).then((result) =>{
            console.log(result)})){
                alert("Usuário atualizado!");
                window.location.reload()
            }
            else{
                alert("Erro ao atualizar!")
            }
        },


        deleteUsuario(id){
            if(axios.delete(this.baseURI +"/"+ id,).then((result) =>{
             console.log(result)})){
                alert("Usuário deletado!");
                window.location.reload()
            }
            else{
                alert("Erro ao deletar!")
            } 
        },

        buscarQtd(){
            axios.get(this.baseURI + "/qtd?qtd=" + this.campo_qtd).then((result) =>{
                this.usuariosQtd = result.data
            }).catch(function(error) {
                console.log(error);
            })
        },

         buscarNome(){
            axios.get(this.baseURI + "/nome?nome=" + this.campo_nome).then((result) =>{
                this.usuariosNome = result.data
            }).catch(function(error) {
                console.log(error);
            })
        },
    },
    
    created: function(){
        this.$nextTick(this.getAll)
    }
}
</script>

<style>

html {
  scroll-behavior: smooth;
}

:target {
  scroll-margin-top: .8em;
}

.centraliza {
    width: 555px;
    margin: auto;
}

.barra-pesquisa{
    width: 300px;
    position: absolute;
    right: 20px;
}

</style>