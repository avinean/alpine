<template>
  <div class="container mx-a">
    <div class="py-2 border-b-1 flex items-center justify-center">
      <img src="/logo.svg" alt="logo">
    </div>
    <NuxtPage />

    <div class="py-2 gap-2 border-t-1 flex flex-col items-center justify-center">
      <img src="/logo.svg" alt="logo">
      <div class="flex gap-2">
        <a href="/" class="text-2xl text-gray">
          <i class="i-ic-baseline-telegram" />
        </a>
        <a href="/" class="text-2xl text-gray">
          <i class="i-ic-phone" />
        </a>
        <a href="/" class="text-2xl text-gray">
          <i class="i-ic-baseline-mail" />
        </a>
      </div>
    </div>
  </div>
</template>