<template>
  <div class="flex my-8 max-w-[1440px] mx-auto">
    <div
      class="flex flex-col justify-evenly place-items-start place-content-center w-2/5 mr-8"
    >
      <h3 class="uppercase text-3xl text-deep-purple font-semibold">
        Cat Fact:
      </h3>
      <p class="text-2xl text-purple">
        {{ data[0] }}
      </p>
      <button
        @click="refreshData()"
        class="uppercase bg-purple text-light-pink p-3 rounded-lg drop-shadow-[0_4px_5px_rgba(0,0,0,.75)]"
      >
        get a random cat fact
      </button>
    </div>

    <div class="grid grid-cols-4 grid-rows-2 gap-x-8">
      <div class="grid col-span-3 row-span-2">
        <img
          class="rounded-3xl h-full object-cover"
          src="https://placekitten.com/g/700/700"
          alt="Kitten picture 1"
        />
      </div>
      <div class="col-span-1 row-span-1">
        <img
          class="rounded-3xl object-cover w-fit h-[85%]"
          src="https://placekitten.com/g/250/300"
          alt="Kitten picture 2"
        />
      </div>
      <div class="col-span-1 row-span-1">
        <img
          class="rounded-3xl object-cover h-full"
          src="https://placekitten.com/g/250/350"
          alt="Kitten picture 3"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data } = await useAsyncData("fact", async () => {
  const response = await $fetch("https://meowfacts.herokuapp.com/?count=5");
  const data = response.data;

  // Armazena a data no cache do navegador
  localStorage.setItem("catFact", JSON.stringify(data));

  return data;
});

// Atualiza a data do cache
async function refreshData() {
  const response = await $fetch("https://meowfacts.herokuapp.com/");
  const data = response.data;

  // Atualiza o estado local
  this.data = data;

  // Atualiza o cache do navegador
  localStorage.setItem("catFact", JSON.stringify(data));
}
</script>
