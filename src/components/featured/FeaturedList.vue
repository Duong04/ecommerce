<template>
    <swiper
          :slidesPerView="10"
          :spaceBetween="30"
          :speed="600"
          :parallax="true"
          :loop="true"
          :freeMode="true"
          :navigation="true"
          :modules="modules"
          class="featured"
        >
          <swiper-slide v-for="(category, index) in categories" :key="index">
            <CategoryCard :category="category" :color="randomColor()" />
          </swiper-slide>
        </swiper>
</template>
<script setup>
    import { Swiper, SwiperSlide } from "swiper/vue";
    import { CategoryCard } from "@/components/cards";
    import { FreeMode, Navigation } from "swiper/modules";
    import { computed } from "vue";

    const modules = [FreeMode, Navigation];

    const categories = [
        {
            name: "Cake & Milk",
            count: 10,
            image: "https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/cat-13.png"
        },
        {
            name: "Cake & Milk",
            count: 10,
            image: "https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/cat-13.png"
        },
        {
            name: "Cake & Milk",
            count: 10,
            image: "https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/cat-13.png"
        },
        {
            name: "Cake & Milk",
            count: 10,
            image: "https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/cat-13.png"
        },
        {
            name: "Cake & Milk",
            count: 10,
            image: "https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/cat-13.png"
        },
        {
            name: "Cake & Milk",
            count: 10,
            image: "https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/cat-13.png"
        },
        {
            name: "Cake & Milk",
            count: 10,
            image: "https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/cat-13.png"
        },
        {
            name: "Cake & Milk",
            count: 10,
            image: "https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/cat-13.png"
        },
        {
            name: "Cake & Milk",
            count: 10,
            image: "https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/cat-13.png"
        },
        {
            name: "Cake & Milk",
            count: 10,
            image: "https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/cat-13.png"
        },
        {
            name: "Cake & Milk",
            count: 10,
            image: "https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/cat-13.png"
        },
        {
            name: "Cake & Milk",
            count: 10,
            image: "https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/cat-13.png"
        },
        {
            name: "Cake & Milk",
            count: 10,
            image: "https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/cat-13.png"
        }
    ];

    const colors = ['#F2FCE4', '#FFFCEB', '#ECFFEC', '#FEEFEA', '#FFF3EB', '#FFF3FF'];

    const randomColor = () => {
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    };

</script>