<template>
  <nav>
    <div class="nav__header">
      <img src="/assets/png/1.png" alt="logo" class="nav_img" />
      <div class="nav__menu__btn" id="menu-btn" @click="toggleMenu">
        <span><i :class="isOpen ? 'ri-close-line' : 'ri-menu-line'"></i></span>
      </div>
    </div>
    <ul class="nav__links" :class="{ open: isOpen }" @click="closeMenu">
      <li>
        <NuxtLink to="#home">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="#special">Menu</NuxtLink>
      </li>
      <li>
        <NuxtLink to="#chef">Chef</NuxtLink>
      </li>
      <li>
        <NuxtLink to="#contact">Contact Us</NuxtLink>
      </li>
    </ul>
    <div class="nav__btn">
      <button class="btn"><i class="ri-shopping-bag-fill"></i></button>
    </div>
  </nav>
</template>

<script setup>
const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const closeMenu = () => {
  isOpen.value = false
}
</script>