<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";

import {
  EffectFade,
  Navigation,
  Pagination,
  Parallax,
  Autoplay,
} from "swiper/modules";

const modules = [EffectFade, Pagination, Navigation, Parallax, Autoplay];
</script>
<template>
  <div class="min-[1550px]:px-56 px-4 py-6 rounded-3xl">
    <swiper
      :spaceBetween="30"
      :effect="'fade'"
      :speed="600"
      :parallax="true"
      :loop="true"
      :navigation="true"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
      }"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
      class="mySwiper rounded-3xl"
    >
      <swiper-slide>
        <div class="relative">
          <img src="/images/banner/slider-1-min.png" />
          <div class="absolute z-50 top-[50%] translate-y-[-50%] left-32 w-1/2">
            <h2
              class="text-[50px] text-color-heading font-semibold"
              data-swiper-parallax="-300"
            >
              Fresh Vegetables Big discount
            </h2>
            <div
              class="text-[35px] mt-5 mb-8 text-color-text"
              data-swiper-parallax="-200"
            >
              Save up to 50% off on your first order
            </div>
            <div class="text" data-swiper-parallax="-100">
              <form
                action=""
                class="h-16 w-96 bg-white flex items-center justify-between rounded-[35px]"
              >
                <input
                  class="px-4 w-4/5 focus:outline-none rounded-[35px]"
                  type="text"
                  placeholder="Your email address"
                />
                <button
                  class="transition-all duration-700 bg-color-brand text-white w-1/3 h-full rounded-[35px] hover:bg-[#29A56C]"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="relative">
          <img src="/images/banner/slider-2-min.png" />
          <div class="absolute z-50 top-[50%] translate-y-[-50%] left-32 w-1/2">
            <h2
              class="text-[50px] text-color-heading font-semibold"
              data-swiper-parallax="-300"
            >
              Fresh Vegetables Big discount
            </h2>
            <div
              class="text-[35px] mt-5 mb-8 text-color-text"
              data-swiper-parallax="-200"
            >
              Save up to 50% off on your first order
            </div>
            <div class="text" data-swiper-parallax="-100">
              <form
                action=""
                class="h-16 w-96 bg-white flex items-center justify-between rounded-[35px]"
              >
                <input
                  class="px-4 w-4/5 focus:outline-none rounded-[35px]"
                  type="text"
                  placeholder="Your email address"
                />
                <button
                  class="transition-all duration-700 bg-color-brand text-white w-1/3 h-full rounded-[35px] hover:bg-[#29A56C]"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<style lang="css">
.swiper-button-next,
.swiper-button-prev {
  color: #000; 
  background-color: #fff; 
  border-radius: 50%; 
  width: 40px; 
  height: 40px;
  display: none;
  justify-content: center;
  align-items: center;
  cursor: pointer; 
  justify-content: center;
  transition: all ease 0.4s;
  animation: moveDown 0.6s ease;
}

.swiper-button-next:hover,
.swiper-button-prev:hover {
  background-color: #3BB77E; 
  color: #fff; 
}

.swiper-button-next::after,
.swiper-button-prev::after {
  font-size: 16px; 
  font-weight: bold;
}

.swiper:hover .swiper-button-next,
.swiper:hover .swiper-button-prev {
  display: flex !important;
}

.swiper-pagination-bullet {
  width: 14px;
  height: 14px;
  border: 1px solid #1f1f1f;
  background-color: #fff;
}

.swiper-pagination-bullet-active {
  background-color: #3BB77E;
}

@keyframes moveDown {
  from {
    transform: translateY(40px);
    opacity: 0;
  }to {
    transform: translateY(0);
    opacity: 1;
  }
}

</style>