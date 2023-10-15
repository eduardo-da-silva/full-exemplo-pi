<script>
import ConsultasApi from "@/services/consultas.js";
import AnimaisApi from "../services/animais";
const consultasApi = new ConsultasApi();
const animaisApi = new AnimaisApi();
export default {
  data() {
    return {
      consultas: [],
      consulta: {},
      animais: [],
    };
  },
  async created() {
    this.consulta = await consultasApi.buscarTodasAsConsultas();
    this.animais = await animaisApi.buscarTodosOsAnimais();
    this.consulta.selectedAnimalId = '';
  },
  methods: {
    async salvar() {
      try {
        if (this.consulta.id) {
          await consultasApi.atualizarConsulta(this.consulta);
        } else {
          this.consulta.animais = this.consulta.selectedAnimalId;
          await consultasApi.adicionarConsulta(this.consulta);
        }
        this.consultas = await consultasApi.buscarTodasAsConsultas();
        this.consulta = {}; // Limpar campos após salvar
      } catch (error) {
        console.error("Erro ao salvar consulta:", error);
      }
    },
    async excluir(consulta) {
      await consultasApi.excluirConsulta(consulta.id);
      this.consultas = await consultasApi.buscarTodasAsConsultas();
    },
    editar(consulta) {
      Object.assign(this.consulta, consulta);
    },
  },
};
</script>
<template>
  <article id="consulta">
    <div class="title">
      <h2>Consultas</h2>
    </div>
    <div class="consulta-input">
      <input placeholder="Descrição" type="text" v-model="consulta.descricao" />
    </div>
    <div class="consulta-input">
      <input placeholder="Data" type="date" v-model="consulta.data" />
    </div>
    <div class="consulta-input">
      <input placeholder="Hora" type="time" v-model="consulta.hora" />
    </div>
    <div class="consulta-input">
      <label for="animalSelect">Animal:</label>
      <select id="animalSelect" v-model="consulta.selectedAnimalId">
        <option v-for="animal in animais" :key="animal.id" :value="animal.id">{{ animal.nome }}</option>
      </select>
    </div>


    <div id="salvar">
      <button @click="salvar">Salvar</button>
    </div>
    <div class="consulta-form">
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Data</th>
            <th>Hora</th>
            <th>Animal</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="consulta in consultas" :key="consulta.id">
            <td>{{ consulta.descricao }}</td>
            <td>{{ consulta.data }}</td>
            <td>{{ consulta.hora }}</td>
            <td>{{ consulta.animal.nome }}</td>
            <td>
              <button class="excluir" @click="excluir(consulta)">Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </article>
</template>


<style>
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  margin: 0;
  padding: 0;
}

/* Estilos do contêiner da página */
#consulta {
  width: 900px;
  max-height: 100%;
  min-height: 600px;
  background-color: #d9ccc1;
  border-radius: 15px;
  padding: 20px;
  margin: 0 auto;
  margin-bottom: 30px;
}

/* Estilos do cabeçalho */
.title {
  text-align: center;
}

/* Estilos dos campos de entrada */
.consulta-input {
  margin-top: 10px;
  text-align: center;
}

.consulta-input input {
  width: 60%;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 0 10px;
}

.consulta-input select {
  width: 60%;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 0 10px;
}

/* Estilos do botão Salvar */
#salvar {
  text-align: center;
  margin-top: 10px;
}

#salvar button {
  width: 20%;
  height: 40px;
  border: 1px solid #6d8c89;
  border-radius: 10px;
  background-color: #6d8c89;
  color: white;
  font-weight: bold;
  cursor: pointer;
}

/* Estilos da tabela de consultas */
table {
  width: 100%;
  margin: 2% auto;
  border-collapse: collapse;
}

table tr th, table tr td {
  border: 1px solid #000;
  padding: 10px;
}

table tr th {
  font-weight: bold;
}

table tr:nth-child(odd) {
  background-color: #ccc;
  color: black;
}

</style>
