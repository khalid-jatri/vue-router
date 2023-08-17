<script setup>
</script>

<template>

<div class="p-10">
  
  <div class="">
    <nav>
      <ul class="flex gap-5 justify-center bg-gray-200 p-4">
        <li> <router-link active-class="active" class="font-medium text-black/90 hover:text-blue-600" to="/">Home</router-link> </li>
        <li> <router-link active-class="active" class="font-medium text-black/90 hover:text-blue-600" to="/about">About</router-link> </li>
        <li> <router-link active-class="active" class="font-medium text-black/90 hover:text-blue-600" to="/contact">Contact</router-link> </li>
      </ul>
    </nav>
  </div>
</div>

  <router-view></router-view>
</template>

<style scoped>
.active {
  @apply text-blue-600
}
</style>