<template>
  <div class="container">
        <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0">
                <div class="row">
                    <div class="col-lg-5 d-none d-lg-block bg-primary">
                        <!-- DIV ESQUERDA-->
                        <div class="col mx-auto text-center">
                        <br/>
                        <table class="table table-light table-responsive-sm">
                            <tr>
                                <td>PACIENTE</td>
                                <td>MÉDICO</td>
                                <td>DATA</td>
                                <td>HORÁRIO</td>
                            </tr>
                            <tr v-for="consulta in consultas" :key="consulta.id" >
                                <td>{{ getNomePaciente(consulta.id_paciente) }}</td>
                                <td>{{ getNomeMedico(consulta.id_medico) }}</td>
                                <td>{{ consulta.data }}</td>
                                <td>{{ consulta.hora }}</td>
                                <td>
                                    <!--<button type="reset" class="btn btn-light btn-sm btn-block" @click="preencheCampos(consulta.id)">Editar</button>-->
                                    <button type="reset" class="btn btn-light btn-sm btn-block" @click="deleteConsulta(consulta.id)">X</button>
                                </td>
                            </tr>
                            <!-- MOSTRANDO NOME NO LUGAR DO ID 
                            <tr v-for="consulta in consultas" :key="consulta.id" >
                                <div v-for="paciente in pacientes" :key="paciente.id">
                                    <div v-if="paciente.id == consulta.id_paciente">
                                        <td>{{ paciente.nome }}</td>
                                    </div>
                                </div>
                                <div v-for="medico in medicos" :key="medico.id">
                                    <div v-if="medico.id == consulta.id_medico">
                                         <td>{{ medico.nome }}</td>
                                    </div>
                                </div>
                                <td>{{ consulta.data }}</td>
                                <td>{{ consulta.horario }}</td>
                            </tr>-->
                        </table>
                        </div>
                    </div>
                    <div class="col-lg-7">
                        
                        <!-- DIV DIREITA-->
                        
                        <div class="p-5">
                            <div class="text-center">
                                <h1 class="h4 text-gray-900 mb-4">Editar Consulta</h1>
                            </div>
                        <hr>

                        
                            <div>
                            <label for=""><i class="fas fa-user"></i> Dados da Consulta</label><br>

                            <div class="form-group left-inner-addon">
                                <div class="form-row">
                                    <div class="col left-inner-addon">
                                        <select class="form-control" v-model="medico">
                                            <option value="">Selecione o Médico</option>
                                            <option v-for="medico in medicos" :key="medico.id">
                                                Nome: {{medico.nome}}, CRM: {{medico.crm}} {{medico.estado}}
                                            </option>
                                        </select>
                                        <div class="invalid-feedback">
                                            Médico é obrigatório
                                        </div>
                                    </div>
                                    
                                    <div class="col left-inner-addon">
                                        <select class="form-control" v-model="paciente">
                                            <option value="">Selecione o Paciente</option>
                                            <option v-for="paciente in pacientes" :key="paciente.id">
                                                Nome: {{paciente.nome}}, CPF: {{paciente.cpf}}
                                            </option>
                                        </select>
                                        <div class="invalid-feedback">
                                            Paciente é obrigatório
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="form-row">
                    
                            <div class="col left-inner-addon">
                                <!-- v-mask="'##/##/####'" -->
                                <input type="text" class="form-control date" placeholder="Data" maxlength="10" v-model="data"  required>
                                <div class="invalid-feedback">
                                    Data da consulta é obrigatória
                                </div>
                            </div>
                            <div class="col left-inner-addon">
                      
                                <!-- <i class="fas fa-phone-alt"></i> -->
                                <!-- v-mask="'##:##'" -->
                                <input type="text" id="hora" name="hora" class="form-control" placeholder="Hora da consulta"
                                    pattern="\[0-9]{2}\[\s]-[0-9]{2}" v-model="hora" maxlength="5" required>
                                <div class="invalid-feedback">
                                    Hora da consulta é obrigatória
                                </div>

                            </div>
                        </div>
                            </div>
                    
                            
                            
                            <hr>
                            <!-- <button type="submit" class="btn btn-primary btn-lg btn-block" @click="getAll">Mostrar</button><br/> -->
                            <button type="reset" class="btn btn-primary btn-lg btn-block" @click="this.$router.replace('pagina-inicial')">Voltar</button>
                                
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            id_paciente: "",
            id_medico: "",
            data: "",
            horario: "",
            consultas: [],
            medicos: [],
            pacientes: [],
            baseURI:"http://localhost:3000/consultas",
            baseURIMedicos:"http://localhost:3000/medicos",
            baseURIPacientes:"http://localhost:3000/pacientes"    
        }
    },

    methods:{
        getAll() {
            axios.get(this.baseURI).then((result) =>{
                    this.consultas = result.data
                })
            axios.get(this.baseURIMedicos).then((result) =>{
                    this.medicos = result.data
                })
            axios.get(this.baseURIPacientes).then((result) =>{
                    this.pacientes = result.data
                })
        },

        preencheCampos(id){
            for(var i = 0; i < this.consultas.length; i++){
                if(id == this.pacientes[i].id){
                    this.id = this.consulta[i].id,
                    this.paciente = this.consulta.paciente,
                    this.medico = this.consulta.id_medico,
                    this.data = this.consulta.data,
                    this.hora = this.consulta.hora
                }    
            } 
        },

        validaPaciente(id){
            if(this.id == ""){
                alert("Consulta não selecionado!")
            }
            else{
                if(this.id_medico == "" || this.id_pacientee == "" || this.data == "" || 
                this.hora == ""){
                    alert("Preencha todos os campos!");
                }
                else{ 
                    this.putConsulta(id);  
                }
            }
        },

        putConsulta(id){
            let obj ={
                id_paciente: this.id_paciente,
                id_medico: this.id_medico,
                data: this.data, 
                hora: this.hora   
            };
          
            axios.put(this.baseURI+"/" + id, obj).then((result) =>{
                console.log(result)
            }).catch(function(error) {
                console.log(error);
            })
                alert("Consulta atualizado!")
                window.location.reload()
        },

        deleteConsulta(id){
            axios.delete(this.baseURI +"/"+ id,).then((result) =>{
             console.log(result)
            }).catch(function(error) {
                console.log(error);
            })

            alert("Consulta cancelada!");
            window.location.reload()      
        },

        getNomePaciente(id_paciente){
            for(var i = 0; i < this.pacientes.length; i++){
                if(id_paciente == this.pacientes[i].id){
                    return this.pacientes[i].nome
                }
            }
        },

        getNomeMedico(id_medico){
            for(var i = 0; i < this.medicos.length; i++){
                if(id_medico == this.medicos[i].id){
                    return this.medicos[i].nome
                }
            }
        }

    },
    
    created: function(){
        this.$nextTick(this.getAll)
    }
    
}
</script>

<style>

</style>