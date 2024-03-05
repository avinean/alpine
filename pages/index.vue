<script setup lang="ts">
const {  products } =  useAppConfig();
</script>

<template>
  <div>
    <h2 class="mb-2 text-3xl">
      {{ products.title }}
    </h2>
    <ul class="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
      <li 
        v-for="category in products.categories"
        :key="category.name"
        class="flex flex-col gap-2 text-center bg-white p-2 relative"
      >
        <img :src="category.img" :alt="category.name" class="flex-1 object-cover">
        <div>
          {{ category.name }}
        </div>
        <nuxt-link :to="`/category/${category.id}`" class="absolute inset-0">
          <span class="sr-only">{{ category.name }}</span>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>
