<script setup>
import TheWelcome from '../../components/TheWelcome.vue';
import { BadgeButton } from '@/components/badges';
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
    <div class="py-3 px-56 border-b-2 border-gray-100 flex justify-between items-center">
        <div class="w-28">
          <a href="">
            <img src="/images/logo.png" alt="">
          </a>
        </div>
        <div>
          <div class="border w-[600px] rounded-md p-[3px] h-12 border-color-brand flex items-center justify-between">
            <input type="text" placeholder="Search for products..." class="px-3 w-full h-full focus:outline-none text-sm">
            <button class="transition-all duration-700 bg-color-brand text-white w-28 h-full rounded-md text-sm font-medium hover:bg-color-yellow">Search</button>
          </div>
        </div>
        <div>
          <a href="" class="transition-all border-[1px] px-5 py-3 bg-white shadow text-sm text-color-brand flex items-center gap-2 hover:translate-y-[-4px]">Became Vendor <i class="pi pi-arrow-right"></i></a>
        </div>
        <div class="flex gap-7">
          <BadgeButton badge="0" iconClass="pi pi-sync" label="Compare" />
          <BadgeButton badge="0" iconClass="pi pi-heart" label="Wishlist" />
          <BadgeButton badge="0" iconClass="pi pi-shopping-cart" label="Cart" />
          <BadgeButton :isBadge=false iconClass="pi pi-user" label="Account" />
        </div>
    </div>
  </header>
  <main>
  </main>
</div>
</template>
