<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";

import { EffectFade, Navigation, Pagination, Parallax, Autoplay } from "swiper/modules";

const modules = [EffectFade, Pagination, Navigation, Parallax, Autoplay];
</script>
<template>
  <div>
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
      class="mySwiper"
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