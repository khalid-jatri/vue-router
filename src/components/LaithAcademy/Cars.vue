<script setup>
import { ref, watch, onMounted } from 'vue';
import carsData from '../../data/data.json';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
const cars = ref(carsData);
const make = ref("");

onMounted(() => {
    make.value = route.query.make;
});

watch(make, () => {
    if (make.value) {
        if (make.value === "All") {
            return cars.value = carsData
        }
        else {
            return cars.value = carsData.filter(c => c.make === make.value || "");
        }
    }
})

const handleChange = () => {
    router.push({ query: { make: make.value } });
}
</script>

<template>
    <div>
        <div>
            <select @change="handleChange()" v-model="make" class="border border-gray-400 px-2 py-1">
                <option value="" disabled selected>Select your option</option>
                <option value="All">All</option>
                <option value="Chevrolet">Chevrolet</option>
                <option value="Buick">Buick</option>
                <option value="Porsche">Porsche</option>
                <option value="Lamborghini">Lamborghini</option>
                <option value="Audi">Audi</option>
            </select>
        </div>
        <div class="mt-5 flex flex-wrap gap-4">
            <div @click="router.push(`/car/${car.id}`)"
                class="min-w-[200px] px-6 py-4 shadow-sm border border-gray-200 cursor-pointer" v-for="car in cars"
                :key="car.id">
                <p>{{ car.id }}</p>
                <h1 class="font-medium text-lg">{{ car.make }}</h1>
                <h1>${{ car.price }}</h1>
            </div>
        </div>
    </div>
</template>