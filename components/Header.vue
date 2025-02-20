<template>
    <header class="section__container header__container" id="home">
        <div class="header__image">
            <img src="/assets/header.png" alt="header" v-scroll-reveal="headerImageOptions" />
        </div>
        <div class="header__content ">
            <h1 v-scroll-reveal="headerTitleOptions">
                Haven Diner <span>comfort meets creativity</span>.
            </h1>
            <p class="section__description montserrat-font" v-scroll-reveal="headerDescOptions">
                At Haven Diner, we envision a warm, welcoming space where every meal feels like home, and every bite
                tells a story.
                Our goal is to create a dining experience that blends nostalgic comfort with modern culinary delight.
            </p>
            <div class="header__btn" v-scroll-reveal="headerBtnOptions">
                <button class="btn montserrat-font">Get Started</button>
            </div>
        </div>
    </header>
</template>

<script setup>
const { getScrollRevealOptions } = useScrollReveal()

const headerImageOptions = getScrollRevealOptions({
    origin: 'right',
    distance: '100px',
})

const headerTitleOptions = getScrollRevealOptions({
    delay: 500,
})

const headerDescOptions = getScrollRevealOptions({
    delay: 1000,
})

const headerBtnOptions = getScrollRevealOptions({
    delay: 1500,
})
</script>