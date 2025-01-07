<script setup>
import TheWelcome from '../../components/TheWelcome.vue'
</script>

<template>
<div id="wrapper">
  <header>
    <div class="px-56 py-2 border-b-2 border-gray-100 flex justify-between">
      <ul class="text-sm flex gap-2 text-gray-600">
        <li><a href="">About Us</a></li>
        <span class="text-[10px]">|</span>
        <li><a href="">My Accout</a></li>
        <span class="text-[10px]">|</span>
        <li><a href="">Wishlist</a></li>
        <span class="text-[10px]">|</span>
        <li><a href="">Order Tracking</a></li>
      </ul>
      <div class="text-color-brand text-sm font-semibold">
        100% Secure delivery without contacting the courier
      </div>
      <div class="text-sm text-gray-600 flex gap-3">
        <div>
          <span>Need help? Call Us: <a class="transition-all text-color-brand hover:underline" href="tel:0815416086">+0815416086</a></span>
        </div>
        <span class="text-[10px]">|</span>
        <div>
          <span>English</span>
        </div>
        <span class="text-[10px]">|</span>
        <div>
          <span>USD</span>
        </div>
      </div>
    </div>
    <div class="py-3 px-56 border-b-2 border-gray-100 flex justify-between">
        <div class="w-28">
          <a href="">
            <img src="/images/logo.png" alt="">
          </a>
        </div>
        <div>
          <div class="border w-96 rounded-md py-2 border-color-brand">
            <input type="text" placeholder="Search for products" class="ps-2">
          </div>
        </div>
    </div>
  </header>
  <main>
  </main>
</div>
</template>
