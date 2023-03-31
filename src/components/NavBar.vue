<template>
    <header class="bg-white shadow-md max-w-5xl my-0 mx-auto h-16 flex justify-between items-center">
      
        <router-link
        :to="{ name: 'home' }"
        class="inline-flex items-center h-full transition-colors px-8 hover:bg-sky-100  text-sky-900 font-bold uppercase"
      >
        Home
      </router-link>
      
        <router-link :to="{ name: 'favourites' }"  class="inline-flex items-center h-full transition-colors px-8 hover:bg-sky-100  text-sky-900 font-bold uppercase">
            Favourites
        </router-link>
      
   
    </header>
</template>