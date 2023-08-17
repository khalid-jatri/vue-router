<script setup>
import { useRoute, useRouter } from 'vue-router';
import { ref, onBeforeMount } from 'vue';
import cars from '../../data/data.json';

const car = ref(null);
const route = useRoute();
const router = useRouter();
const { id } = route.params;
const isError = ref(false);

function isNumber(val) {
    return /^[-]?\d+$/.test(val);
}

const validateParams = () => {
    if (!isNumber(id)) {
        isError.value = true
    } else {
        isError.value = false
    }
}

validateParams();


onBeforeMount(() => {
    car.value = cars.find(c => c.id === parseInt(id));
    // car.value = cars.find(c => c.id == id);
});



</script>

<template>
    <div v-if="isError" class="text-center">
        <h1 class="text-3xl text-red-600">Something Went Wrong!</h1>
    </div>

    <div class="p-10" v-else>
        <div v-if="car">
            <h1 class="text-3xl font-semibold text-center text-cyan-600 mb-4">The Car</h1>
            <div class="bg-gray-200 grid place-content-center m-auto p-10 w-[400px]">
                <p>Id: {{ car.id }}</p>
                <p>Make: {{ car.make }}</p>
                <p>Body: {{ car.body }}</p>
                <p>Price: {{ car.price }}</p>
                <p>Year: {{ car.year }}</p>
            </div>
            <div class="grid place-content-center mt-5">
                <button @click="router.back()" class="border border-gray-400 px-6 py-1.5">Go Back</button>
            </div>
            <router-view />
        </div>

        <div v-else class="text-center text-4xl font-bold text-red-700">
            No Car Found!
        </div>
    </div>
</template>