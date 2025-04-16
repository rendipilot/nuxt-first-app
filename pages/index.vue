<template>
    <h2>Index page</h2>
    <NuxtLink to="/about">
        <button class="flex items-center p-4 rounded-md bg-orange-400 mt-4 h-12">About page</button>
    </NuxtLink>
    <button class="lex items-center mt-10 bg-blue-400 rounded-md p-4" @click="getRandomImage">Get Random Cat</button>
    <img :src="catImage" alt="Random Cat" class="w-64 ml-10 rounded-md mt-10"/>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';


const catImage = ref("")

const getRandomImage = async() => {
    const res = await axios.get("https://api.thecatapi.com/v1/images/search")

    catImage.value = res.data[0].url
    console.log(catImage.value)
}
</script>