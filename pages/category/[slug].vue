<script setup lang="ts">
const route = useRoute();
const { products: {categories} } = useAppConfig();


const {name, products} = categories.find((category) => category.id === route.params.slug)!;
</script>

<template>
  <div>
    <h2 class="mb-2 text-3xl">
      {{ name }}
    </h2>
    <ul class="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
      <li 
        v-for="product in products"
        :key="product.name"
        class="flex flex-col gap-2 bg-white p-2"
      >
        <img :src="product.img" :alt="product.name" class="object-cover">
        <div class="border-b-1 font-bold">
          {{ product.name }}
        </div>
        <ul class="text-sm flex-1">
          <li>
            {{ product.size }}
          </li>
          <li>
            Застосування: {{ product.application }}
          </li>
          <li>
            {{ product.standard }}
          </li>
        </ul>
        <div class="border-t-1 text-right font-bold">
          {{ product.price }}
        </div>
      </li>
    </ul>
  </div>
</template>
