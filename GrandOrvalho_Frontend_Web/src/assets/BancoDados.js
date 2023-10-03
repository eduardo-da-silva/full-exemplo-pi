import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      Livros: [
        {
          isbn: "02ad4d16-be6b-452a-b0de-24e7cf50266c",
          titulo: "H.P Love Craft",
          autor: "Howard Phillips Lovecraft",
          quant: "2",
          preco: "R$64,00",
        },
        {
          isbn: "3358e436-a0c2-410a-826a-42e2979d9792",
          titulo: "Frankenstein",
          autor: "Mary Shelley",
          quant: "10",
          preco: "R$124,00",
        },
        {
          isbn: "02ad4d16-be6b-452a-b0de-24e7cf50266c",
          titulo: "Dracula",
          autor: "Bram Stoker",
          quant: "9",
          preco: "R$234,00",
        },
        {
          isbn: "3358e436-a0c2-410a-826a-42e2979d9792",
          titulo: "Solo leveling",
          autor: "Chu-Gong",
          quant: "0",
          preco: "R$59,00",
        },
        {
          isbn: "02ad4d16-be6b-452a-b0de-24e7cf50266c",
          titulo: "The beging of the end",
          autor: "TurtleMe",
          quant: "2",
          preco: "R$64,00",
        },
        {
          isbn: "3358e436-a0c2-410a-826a-42e2979d9792",
          titulo: "Lucia",
          autor: "Haneul",
          quant: "1",
          preco: "R$64,00",
        },
        {
          isbn: "02ad4d16-be6b-452a-b0de-24e7cf50266c",
          titulo: "One piece",
          autor: "Eichiro Oda",
          quant: "3",
          preco: "R$56,00",
        },
        {
          isbn: "3358e436-a0c2-410a-826a-42e2979d9792",
          titulo: "O menino que se alimenta de pesadelos",
          autor: "Jo Yong",
          quant: "5",
          preco: "R$124,00",
        },
      ],
      novo_livro: "",
      novo_autor: "",
      quantidade: "",
      preco: "",
    };
  },
  methods: {
    salvar() {
      const novo_isbn = uuidv4();
      this.Livros.push({
        isbn: novo_isbn,
        titulo: this.novo_livro,
        autor: this.novo_autor,
        quant: this.quantidade,
        preco: this.preco,
      });
    },
  },
};
