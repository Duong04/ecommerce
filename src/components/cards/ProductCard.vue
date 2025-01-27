<template>
  <div
    class="transition-all duration-700 border rounded-2xl relative overflow-hidden hover:border-color-brand hover:shadow-xl"
  >
    <span
      class="bg-color-brand block px-5 py-2 absolute text-[0.8rem] rounded-br-2xl rounded-tl-2xl text-white z-10"
      >10%</span
    >
    <a href="" class="flex flex-col px-5 py-8 gap-3 product-item">
      <div class="img-product">
        <img
          class="img-1"
          src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/02/product-4-1.jpg"
          alt=""
        />
        <img
          class="hidden img-2"
          src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/02/product-4-2.jpg"
          alt=""
        />
      </div>
      <span class="text-[0.8rem] text-[#949494]">Baking Material</span>
      <h2 class="font-semibold leading-5">
        Foster Farms Takeout Crispy Classic
      </h2>
      <div class="flex items-center gap-1 text-[0.7rem] text-[#949494]">
        <div class="flex items-center gap-1">
          <i class="pi pi-star"></i>
          <i class="pi pi-star"></i>
          <i class="pi pi-star"></i>
          <i class="pi pi-star"></i>
          <i class="pi pi-star"></i>
        </div>
        <span>10</span>
      </div>
      <h5>By <span class="text-color-brand">Sugar Dev</span></h5>
      <div class="flex items-center justify-between">
        <div class="flex gap-2 items-center">
          <span class="font-semibold text-lg text-color-brand underline"
            >100$</span
          >
          <del class="text-[0.8rem] text-[#949494]">200$</del>
        </div>
        <button class="bg-[#DEF9EC] px-3 py-1 rounded-md text-color-brand">
          <i class="pi pi-cart-plus"></i>
          Cart
        </button>
      </div>
    </a>
  </div>
</template>

<style lang="css">
.product-item:hover .img-2 {
  display: block;
}

.product-item:hover .img-1 {
  display: none;
}

.product-item:hover .img-product {
  transform: scale(1.05);
}

.img-product {
  transition: all ease 0.5s;
}
</style>