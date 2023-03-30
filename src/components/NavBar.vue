<template>
    <header class="bg-white shadow-md max-w-5xl my-0 mx-auto h-16 flex justify-between items-center">
      
        <router-link
        :to="{ name: 'home' }"
        class="inline-flex items-center h-full transition-colors px-8 hover:bg-purple-100  text-purple-500 font-bold"
      >
        Home
      </router-link>
      
        <router-link :to="{ name: 'byCity' }"  class="inline-flex items-center h-full transition-colors px-8 hover:bg-purple-100  text-purple-500 font-bold">
            Favourites
        </router-link>
      
   
    </header>
</template>