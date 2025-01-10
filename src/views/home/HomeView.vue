<script setup>
import TheWelcome from '../../components/TheWelcome.vue';
import { BadgeButton } from "@/components/badges";
</script>

<template>
<div id="wrapper">
  <header>
    <div class="2xl:px-56 px-6 py-2 border-b-2 border-gray-100 flex items-center justify-between">
      <ul class="text-[13px] flex gap-2 text-gray-600">
        <li><a href="">About Us</a></li>
        <span class="text-[10px]">|</span>
        <li><a href="">My Accout</a></li>
        <span class="text-[10px]">|</span>
        <li><a href="">Wishlist</a></li>
        <span class="text-[10px]">|</span>
        <li><a href="">Order Tracking</a></li>
      </ul>
      <div class="text-color-brand text-[13px] font-semibold">
        100% Secure delivery without contacting the courier
      </div>
      <div class="text-[13px] text-gray-600 flex gap-3">
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
    <div class="2xl:px-56 px-6 py-3 border-b-2 border-gray-100 flex justify-between items-center">
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
          <a href="" class="transition-all border-[1px] px-5 py-3 bg-white shadow text-sm text-color-brand flex items-center gap-2 hover:translate-y-[-4px] rounded-md">Became Vendor <i class="pi pi-arrow-right"></i></a>
        </div>
        <div class="flex gap-7">
          <BadgeButton badge="0" iconClass="pi pi-sync" label="Compare" />
          <BadgeButton badge="0" iconClass="pi pi-heart" label="Wishlist" />
          <BadgeButton badge="0" iconClass="pi pi-shopping-cart" label="Cart" />
          <BadgeButton :isBadge=false iconClass="pi pi-user" label="Account" />
        </div>
    </div>
    <nav class="2xl:px-56 px-6 py-3 border-b-2 border-gray-100 flex justify-start items-center gap-36">
      <div class="flex items-center gap-12">
        <button class="transition-all duration-700 bg-color-brand py-3 px-6 text-white flex items-center justify-center gap-3 rounded-md hover:bg-[#29A56C]">
          <i class="pi pi-th-large"></i> 
          <span>Browse All Categories</span>
          <i class="pi pi-angle-down"></i>
        </button>
        <div>
          <a href="" class="text-md"><i class="pi pi-lightbulb text-color-brand"></i> Hot Deals</a>
        </div>
      </div>
      <menu>
        <ul class="flex items-center text-md font-[500]">
          <li>
            <router-link class="transition-all p-6 duration-500 hover:text-color-brand" href="">Home</router-link>
          </li>
          <li>
            <router-link class="transition-all p-6 duration-500 hover:text-color-brand" href="">About</router-link>
          </li>
          <li>
            <router-link class="transition-all p-6 duration-500 hover:text-color-brand" href="">Shop</router-link>
          </li>
          <li>
            <router-link class="transition-all p-6 duration-500 hover:text-color-brand" href="">Vendors</router-link>
          </li>
          <li>
            <router-link class="transition-all p-6 duration-500 hover:text-color-brand" href="">Mega Menu</router-link>
          </li>
          <li>
            <router-link class="transition-all p-6 duration-500 hover:text-color-brand" href="">Blog</router-link>
          </li>
          <li>
            <router-link class="transition-all p-6 duration-500 hover:text-color-brand" href="">Pages</router-link>
          </li>
          <li>
            <router-link class="transition-all p-6 duration-500 hover:text-color-brand" href="">Contact</router-link>
          </li>
        </ul>
      </menu>
    </nav>
  </header>
  <main>
  </main>
</div>
</template>
