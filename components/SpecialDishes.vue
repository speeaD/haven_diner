<template>
    <section class="section__container special__container" id="special">
        <h2 class="section__header">Our Special Dish</h2>
        <p class="section__description">
            Each dish promises an unforgettable dining experience, blending
            innovation with tradition to delight your senses.
        </p>
        <div class="special__grid">
            <div v-for="dish in specialDishes" :key="dish.id" class="special__card">
                <img :src="dish.image" :alt="dish.name" />
                <h4>{{ dish.name }}</h4>
                <p>{{ dish.description }}</p>
                <div class="special__ratings">
                    <span v-for="n in 5" :key="n"><i class="ri-star-fill"></i></span>
                </div>
                <div class="special__footer">
                    <p class="price">${{ dish.price }}</p>
                    <button class="btn">Add to Cart</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const specialDishes = [
    {
        id: 1,
        name: 'Chicken Veg Curry',
        description: 'Diced chicken simmered in aromatic curry sauce with mixed veggies like potatoes, cauliflower, and beans for a hearty, flavorful dish.',
        price: '12.50',
        image: '/assets/special-1.png'
    },
    {
        id: 2,
        name: 'Chicken Veg Stir-Fry',
        description: 'Tender chicken strips wok-tossed with a colorful array of fresh vegetables in a flavorful blend of spices and sauces.',
        price: '18.50',
        image: '/assets/special-2.png'
    },
    {
        id: 3,
        name: 'Chicken Veg Pasta',
        description: 'Al dente pasta tossed with chicken strips and a mix of vibrant vegetables in a creamy garlic herb sauce, offering a delightful pasta experience.',
        price: '15.50',
        image: '/assets/special-3.png'
    }
]
</script>