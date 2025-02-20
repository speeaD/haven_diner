<template>
  <section class="section__container explore__container">
    <div class="explore__image">
      <img 
        src="/assets/explore.png" 
        alt="explore" 
        v-scroll-reveal="exploreImageOptions"
      />
    </div>
    <div class="explore__content">
      <h1 
        class="section__header"
        v-scroll-reveal="exploreTitleOptions"
      >
        We Serve Healthy & Tasty Food
      </h1>
      <p 
        class="section__description"
        v-scroll-reveal="exploreDescOptions"
      >
        Indulge guilt-free with our commitment to serving wholesome and
        delicious meals. Explore a menu curated to balance taste and
        nutrition, ensuring every bite is both satisfying and nourishing.
      </p>
      <div 
        class="explore__btn"
        v-scroll-reveal="exploreBtnOptions"
      >
        <button class="btn">
          Explore Story <span><i class="ri-arrow-right-line"></i></span>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
const { getScrollRevealOptions } = useScrollReveal()

const exploreImageOptions = getScrollRevealOptions({
  origin: 'left',
  distance: '100px',
})

const exploreTitleOptions = getScrollRevealOptions({
  delay: 500,
})

const exploreDescOptions = getScrollRevealOptions({
  delay: 1000,
})

const exploreBtnOptions = getScrollRevealOptions({
  delay: 1500,
})
</script>