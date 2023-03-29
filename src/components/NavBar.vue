<template>
    <header class="bg-white shadow-md h-16 flex justify-between items-center">
      <router-link
        :to="{ name: 'home' }"
        class="inline-flex items-center h-full transition-colors px-2 hover:bg-purple-100"
      >
        Home
      </router-link>
      <nav>
        <router-link :to="{ name: 'byCity' }"  class="inline-flex items-center h-full transition-colors px-2 hover:bg-purple-100">
            City Search
        </router-link>
      </nav>
    </header>
</template>