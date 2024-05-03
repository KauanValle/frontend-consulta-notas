<template>
    <div class="container">
        
        <div class="chave-nfe">
            <div>
                <p><strong>Informe a chave da NFe para realizar a consulta</strong></p>
                <button class="buttonChave" @click="definirChave(true)">Chave Correta</button>
                <button class="buttonChave" @click="definirChave(false)">Chave Incorreta</button>
            </div>
            
            <input class="b-input" type="text" placeholder="Digite a chave da NFe" v-model="nota_chave.nota_chave">
            
            <table>
                <tr>
                    <th>ID</th>
                    <th>CNPJ / CPF</th>
                    <th>VALOR DA NOTA</th>
                    <th>IMPOSTOS DA NOTA</th>
                    <th>CHAVE DA NOTA</th>
                    <th>DATA RECEBIMENTO</th>
                    <th>DATA EMISSÃO</th>
                </tr>
                <tr v-for="nota in this.notafiscal" :key="nota.id">
                    <td>{{ nota.data.message.id }}</td>
                    <td>{{ nota.data.message.cnpj_cpf_prestador }}</td>
                    <td>R$ {{ nota.data.message.nota_valor }}</td>
                    <td>{{ nota.data.message.nota_impostos }}%</td>
                    <td>{{ nota.data.message.nota_chave }}</td>
                    <td>{{ nota.data.message.nota_data_recebimento }}</td>
                    <td>{{ nota.data.message.nota_data_emissao }}</td>
                </tr>
            </table>
        </div>
        <span class="loader" v-if="this.isLoading"></span>
        <button class="b-button" @click="enviarConsultaNFe">Consultar</button>
    </div>
</template>

<script>
import ConsultarNFe from '@/entities/ConsultarNFe';
import { mapGetters } from 'vuex';

export default {
    name: 'ConsultarNFe',
    components: {},
    data(){
        return {
            nota_chave: {...ConsultarNFe},
            notafiscal: [],
            isLoading: false
        }
    },
    methods: {
        enviarConsultaNFe() {
            if(this.validarCampoVazio()){
                return;
            }

            this.isLoading = true;
            this.$store.dispatch('consultarNFe/salvarNotaChave', this.nota_chave.nota_chave)
                .then(() => {
                    this.pegarNota();
                    this.isLoading = false;
                }).catch(() => {
                    this.pegarErro()
                    this.isLoading = false;
                })
        },
        definirChave(isCorreta){
            let chave = '';
            if(isCorreta){
                chave = '38921657136821895164871231768222223532453411'
            }else {
                chave = '057128934671283612HASDAWJGHFD1736712367912AD'
            }
            this.nota_chave.nota_chave = chave
        },
        pegarNota() {
            this.notafiscal.push(this.nfe)
            this.$swal.fire({
                position: "top-center",
                icon: "success",
                title: "Nota Fiscal Consultada com Sucesso!",
                showConfirmButton: false,
                timer: 1300
            });
        },
        pegarErro() {
            this.$swal.fire({
                icon: "error",
                title: "Oops...",
                text: this.erros.data.error.message,
                });
        },
        validarCampoVazio(){
            if(this.nota_chave.nota_chave == ""){
                this.$swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "O campo da chave não pode ser vazio.",
                });
                return true;
            }
            return false;
        }
    },
    computed: {
        ...mapGetters({
            nfe: "consultarNFe/pegarChaveDaNota",
            erros: "consultarNFe/pegarErrosDaNota"
        })
    }
}
</script>

<style scoped>
    .buttonChave {
        margin: 10px 5px 0 5px;
    }
    table {
        margin-top: 20px;
    }
    tr, th, td, table {
        padding: 5px;
        border: 1px solid #AAA;
    }
    .chave-nfe {
        text-align: center;
    }

    .b-input {
        width: 550px;
        padding: 10px;
        border: 1px solid #AAA;
        border-radius: 5px;
        margin-top: 15px;
    }

    .b-input:focus {
        outline: none;
        box-shadow: 0px 0px 5px #EA5B0C;
    }
    .b-button {
        background-color: #EA5B0C;
        border: none;
        padding: 12px;
        border-radius: 5px;
        color: white;
        margin-top: 20px;
        width: 100%;
    }

    .b-button:hover {
        background-color: #ff8c4e;
        cursor: pointer;
    }

    .b-button:active {
        background-color: #7e3711;
    }

    .loader {
        width: 48px;
        height: 48px;
        border: 5px solid #FFF;
        border-bottom-color: #FF3D00;
        border-radius: 50%;
        display: inline-block;
        box-sizing: border-box;
        animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    } 
</style>