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
    this.animal = await animaisApi.buscarTodosOsAnimais();
  },
  methods: {
    async salvar() {
      if (this.consulta.id) {
        await consultasApi.atualizarConsulta(this.consulta);
      } else {
        await consultasApi.adicionarConsulta(this.consulta);
      }
      this.consultas = await consultasApi.buscarTodasAsConsultas();
      this.consulta = {};
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
      <input
        placeholder="Descrição:"
        type="text"
        v-model="consulta.descricao"
        @keyup.enter="salvar"
      />
    </div>
    <div class="consulta-input">
      <input
        placeholder="Data:"
        type="date"
        v-model="consulta.data"
        @keyup.enter="salvar"
      />
    </div>
    <div class="consulta-input">
      <input
        placeholder="Hora:"
        type="time"
        v-model="consulta.hora"
        @keyup.enter="salvar"
      />
    </div>
    <div class="consulta-input">
      <label for="animalSelect">Animal:</label>
      <select id="animalSelect" v-model="consulta.animais">
        <option v-for="animal in animais" :key="animal.id" :value="animal.id">{{ animal.name }}</option>
      </select>
    </div>

    <div id="salvar">
      <button @click="salvar">Salvar</button>
    </div>
    <div class="editora-form">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Descrição</th>
            <th>Data</th>
            <th>Hora</th>
            <th>Animal</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="consulta in consultas" :key="consulta.id">
            <td>{{ consulta.id }}</td>
            <td>{{ consulta.descricao }}</td>
            <td>{{ consulta.data }}</td>
            <td>{{ consulta.hora }}</td>
            <td>{{ consulta.animais }}</td>
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
#consulta {
  width: 900px;
  max-height: 100%;
  min-height: 600px;
  background-color: #d9ccc1;
  border-radius: 15px;
  padding: 20px;
  margin-bottom: 30px;
}
.title {
  display: flex;
  justify-content: center;
}

.consulta-input {
  margin-top: 10px;
  display: flex;
  justify-content: center;
}

.consulta-input input {
  width: 60%;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 0 10px;
}

.consulta-input button {
  margin-left: 1%;
  width: 20%;
  height: 40px;
  border: 1px solid #6d8c89;
  border-radius: 10px;
  background-color: #6d8c89;
  color: white;
  font-weight: bold;
  cursor: pointer;
}

.consulta-form {
  display: flax;
  justify-content: center;
}

table {
  width: auto;
  margin: 2% auto;
  border-collapse: collapse;
}

table tr th {
  border: 1px solid rgb(0, 0, 0);
  padding: 10px;
  font-weight: bold;
}

table tr td {
  border: 1px solid rgb(0, 0, 0);
  padding: 10px;
}

table tr:nth-child(odd) {
  background-color: #ccc;
  color: black;
}
</style>
