<template>
    <header class="bg-white shadow-md max-w-5xl my-0 mx-auto h-16 flex justify-between items-center">
      
        <router-link
        :to="{ name: 'home' }"
        class="inline-flex items-center h-full transition-colors px-8 hover:bg-purple-100"
      >
        Home
      </router-link>
      <nav>
        <router-link :to="{ name: 'byCity' }"  class="inline-flex items-center h-full transition-colors px-8 hover:bg-purple-100">
            City Search
        </router-link>
      </nav>
   
    </header>
</template>