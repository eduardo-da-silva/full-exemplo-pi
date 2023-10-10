<script>
import ClientesApi from "@/services/clientes.js";
const clientesApi = new ClientesApi();
export default {
  data() {
    return {
      clientes: [],
      cliente: {},
    };
  },
  async created() {
    this.clientes = await clientesApi.buscarTodosOsClientes();
  },
  methods: {
    async salvar() {
      if (this.cliente.id) {
        await clientesApi.atualizarCliente(this.cliente);
      } else {
        await clientesApi.adicionarCliente(this.cliente);
      }
      this.clientes = await clientesApi.buscarTodosOsClientes();
      this.cliente = {};
    },
    async excluir(cliente) {
      await clientesApi.excluirCliente(cliente.id);
      this.clientes = await clientesApi.buscarTodosOsClientes();
    },
    editar(cliente) {
      Object.assign(this.cliente, cliente);
    },
  },
};
</script>
<template>
  <article id="cliente">
    <div class="title">
      <h2>Clientes</h2>
    </div>
    <div class="cliente-input">
      <input type="text" placeholder="nome" v-model="cliente.nome" @keyup.enter="salvar" />
      <input type="number" placeholder="cpf" v-model="cliente.cpf" @keyup.enter="salvar" />
      <input type="email" placeholder="email" v-model="cliente.email" @keyup.enter="salvar" />
      <input type="number" placeholder="telefone" v-model="cliente.telefone" @keyup.enter="salvar" />
      <button @click="salvar">Salvar</button>
    </div>
    <div class="cliente-form">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>CPF</th>
            <th>Email</th>
            <th>Telefone</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="cliente in clientes" :key="cliente.id">
            <td>{{ cliente.id }}</td>
            <td>{{ cliente.nome }}</td>
            <td>{{ cliente.cpf }}</td>
            <td>{{ cliente.email }}</td>
            <td>{{ cliente.telefone }}</td>
            <td>
              <button class="excluir" @click="excluir(cliente)">excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </article>
</template>

<style>
#cliente {
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

.cliente-input {
  margin-top: 10px;
  display: flex;
  justify-content: center;
}

.cliente-input input {
  width: 60%;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 0 10px;
}

.cliente-input button {
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

.cliente-form {
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
