<template>
  <div class="md:flex my-8 md:max-w-[1440px] mx-auto">
    <div
      class="flex gap-y-4 m-2 place-items-center flex-col md:justify-evenly md:place-items-start md:place-content-center md:w-2/5 md:mr-32"
    >
      <h3 class="uppercase text-2xl md:text-3xl text-deep-purple font-semibold">
        Cat Fact:
      </h3>
      <p class="text-center text-xl md:text-justify md:text-2xl text-purple">
        {{ data[0] }}
      </p>
      <button
        @click="refreshData()"
        class="uppercase bg-purple text-light-pink p-3 rounded-lg drop-shadow-[0_4px_5px_rgba(0,0,0,.75)]"
      >
        get a random cat fact
      </button>
    </div>

    <div
      class="flex w-full gap-y-4 mt-8 md:grid md:grid-cols-4 md:grid-rows-2 md:gap-x-8"
    >
      <div
        class="col-span-1 w-1/2 md:w-full md:grid md:col-span-3 md:row-span-2"
      >
        <img
          class="rounded-3xl md:h-full object-cover"
          src="https://placekitten.com/g/700/700"
          alt="Kitten picture 1"
        />
      </div>
      <div class="col-span-1 row-span-1">
        <img
          class="rounded-3xl object-cover w-fit md:h-[85%]"
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
  const response = await $fetch("https://meowfacts.herokuapp.com/");
  const data = response.data;
  return data;
});
</script>
