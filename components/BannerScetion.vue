<template>
    <section class="section__container banner__container">
        <div v-for="banner in banners" :key="banner.id" class="banner__card">
            <span class="banner__icon"><i :class="banner.icon"></i></span>
            <h4>{{ banner.title }}</h4>
            <p>{{ banner.description }}</p>
            <a href="#">
                Read more
                <span><i class="ri-arrow-right-line"></i></span>
            </a>
        </div>
    </section>
</template>

<script setup>
const banners = [
    {
        id: 1,
        icon: 'ri-bowl-fill',
        title: 'Order Your Food',
        description: 'Seamlessly place your food orders online with just a few clicks. Enjoy convenience and efficiency as you select from our diverse menu of delectable dishes.'
    },
    {
        id: 2,
        icon: 'ri-truck-fill',
        title: 'Pick Your Food',
        description: 'Customize your dining experience by choosing from a tantalizing array of options. For savory, sweet, or in between craving, find the perfect meal to satisfy your appetite.'
    },
    {
        id: 3,
        icon: 'ri-star-smile-fill',
        title: 'Enjoy Your Food',
        description: 'Sit back, relax, and savor the flavors as your meticulously prepared meal arrives. Delight in the deliciousness of every bite, knowing that your satisfaction is our top priority.'
    }
]
</script>