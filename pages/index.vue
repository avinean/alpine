<script setup lang="ts">
import meta from './meta.json'
import products from './products.json'
</script>

<template>
  <main>
    <div class="overflow-hidden relative">
      <img src="/alpine.webp" alt="" class="w-full md:aspect-[2/1]">
      <div class="absolute text-center inset-0 bg-black/50 flex flex-col items-center justify-center">
        <div class="text-white text-4xl">
          {{ meta.title }}
        </div>    
        <div class="text-white text-2xl">
          {{ meta.subtitle }}
        </div>
      </div>
    </div>

    <div class="py-2">
      <h2 class="mb-2 text-3xl">
        Products
      </h2>
      <ul class="grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <li v-for="product in products" :key="product.id" class="space-y-2">
          <img :src="product.img" :alt="product.name">
          <div class="font-bold">
            {{ product.name }}
          </div>
          <div>{{ product.price }}</div>
        </li>
      </ul>
    </div>
    <div class="py-2">
      <iframe 
        class="w-full "
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20322.61446666946!2d30.522721750000002!3d50.453638749999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce549257acfb%3A0x8d2070a5d66c0e0b!2sGorodetsky%20House!5e0!3m2!1sen!2sua!4v1709638864630!5m2!1sen!2sua" 
        width="600"
        height="450" 
        style="border:0;"
        allowfullscreen
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade" 
      />
    </div>
  </main>
</template>