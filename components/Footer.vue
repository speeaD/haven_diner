<template>
    <footer class="footer" id="contact">
        <div class="section__container footer__container">
            <div class="footer__col">
                <div class="logo footer__logo">
                    <NuxtLink to="#">Haven<span>Diner.</span></NuxtLink>
                </div>
                <p class="section__description">
                    Embark on a gastronomic journey with HavenDiner, where every bite tells
                    a story and every dish is crafted to perfection.
                </p>
            </div>
            <div v-for="(section, index) in footerSections" :key="index" class="footer__col">
                <h4>{{ section.title }}</h4>
                <ul class="footer__links">
                    <li v-for="(link, linkIndex) in section.links" :key="linkIndex">
                        <NuxtLink :to="link.url">{{ link.text }}</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
        <div class="footer__bar">
            Copyright © {{ new Date().getFullYear() }} HavenDiner. All rights reserved.
        </div>
    </footer>
</template>

<script setup>
const footerSections = [
    {
        title: 'Product',
        links: [
            { text: 'Menu', url: '#' },
            { text: 'Specials', url: '#' },
            { text: 'Meal Deals', url: '#' },
            { text: 'Catering Options', url: '#' },
            { text: 'Seasonal Offerings', url: '#' }
        ]
    },
    {
        title: 'Information',
        links: [
            { text: 'About Us', url: '#' },
            { text: 'Contact Us', url: '#' },
            { text: 'Nutrition Information', url: '#' },
            { text: 'Allergen Information', url: '#' }
        ]
    },
    {
        title: 'Company',
        links: [
            { text: 'Our Story', url: '#' },
            { text: 'Careers', url: '#' },
            { text: 'Terms of Service', url: '#' },
            { text: 'Privacy Policy', url: '#' }
        ]
    }
]
</script>