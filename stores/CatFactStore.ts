export interface CatFact {
  fact: string;
  length: number;
}

export interface CatFactResponse {
  data: CatFact[] | null;
}

export const useCatFactStore = defineStore({
  id: "catFacts",
  state: () => ({
    data: [] as CatFact[] | null,
  }),
  actions: {
    async fetchCatFacts() {
      try {
        const response: CatFactResponse = await $fetch("/api/catFacts");
        const dataResponse = response.data;

        if (dataResponse !== null) {
          this.data = dataResponse;
        } else {
          console.log("A resposta é null");
        }
        return this.data;
      } catch (error) {
        console.error("Erro ao buscar os dados: ", error);
      }
    },
    async refreshData() {
      try {
        const response: CatFactResponse = await $fetch("/api/catFacts");
        const dataResponse = response.data;

        if (dataResponse !== null) {
          this.data = dataResponse;
        } else {
          console.log("A resposta é null");
        }
        return this.data;
      } catch (error) {
        console.error("Erro ao atualizar os dados: ", error);
      }
    },
  },
});
