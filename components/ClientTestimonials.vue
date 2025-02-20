<template>
    <section class="section__container client__container" id="client">
        <h2 class="section__header">What Our Customers Are Saying</h2>
        <p class="section__description">
            Discover firsthand experiences and testimonials from our valued patrons.
            Explore the feedback and reviews that showcase our commitment to
            quality, service, and customer satisfaction.
        </p>
        <div class="client__swiper">
            <Swiper :modules="[SwiperPagination]" :pagination="{ clickable: true }" :loop="true" class="swiper">
                <SwiperSlide v-for="testimonial in testimonials" :key="testimonial.id">
                    <div class="client__card">
                        <p>{{ testimonial.comment }}</p>
                        <img :src="testimonial.image" :alt="testimonial.name" />
                        <h4>{{ testimonial.name }}</h4>
                        <h5>{{ testimonial.role }}</h5>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination as SwiperPagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const testimonials = [
    {
        id: 1,
        name: 'David Lee',
        role: 'Business Executive',
        comment: "HavenDIner's culinary expertise never fails to impress! Every dish is a masterpiece, bursting with flavor and freshness.",
        image: '/assets/client-1.jpg'
    },
    {
        id: 2,
        name: 'Emily Johnson',
        role: 'Food Blogger',
        comment: "I always turn to HavenDIner for a quick and delicious meal. Their efficient service and mouthwatering options never disappoint!",
        image: '/assets/client-2.jpg'
    },
    {
        id: 3,
        name: 'Michael Thompson',
        role: 'Event Planner',
        comment: "HavenDIner has become my go-to for all my catering needs. Their attention to detail and exceptional customer service make every event a success.",
        image: '/assets/client-3.jpg'
    }
]
</script>