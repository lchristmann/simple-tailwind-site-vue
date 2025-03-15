<script setup>
import { ref } from 'vue';

const menuOpen = ref(false)
</script>


<template>

    <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div class="flex lg:flex-1">
            <router-link :to="{ name: 'home' }" class="-m-1.5 p-1.5">
                <span class="sr-only">Simple Tailwind</span>
                <img class="h-8 w-auto"
                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="Simple Tailwind Logo">
            </router-link>
        </div>
        <div class="flex lg:hidden">
            <!-- Button to open mobile menu -->
            <button type="button" @click="menuOpen = true"
                class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 cursor-pointer">
                <span class="sr-only">Open main menu</span>
                <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
            <router-link :to="{ name: 'about' }" class="text-sm/6 font-semibold text-gray-900">About</router-link>
            <router-link :to="{ name: 'blog' }" class="text-sm/6 font-semibold text-gray-900">Blog</router-link>
            <router-link :to="{ name: 'docs' }" class="text-sm/6 font-semibold text-gray-900">Docs</router-link>
            <router-link :to="{ name: 'changelog' }" class="text-sm/6 font-semibold text-gray-900">Changelog</router-link>
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
            <router-link :to="{ name: 'docs' }" class="text-sm/6 font-semibold text-gray-900">Try it out <span aria-hidden="true">&rarr;</span></router-link>
        </div>
    </nav>
    <!-- Mobile menu, show/hide based on menu open state. -->
    <div v-if="menuOpen" class="lg:hidden" role="dialog" aria-modal="true">
        <!-- Background backdrop, show/hide based on slide-over state. -->
        <div class="fixed inset-0"></div>
        <div
            class="fixed inset-y-0 right-0 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div class="flex items-center justify-between">
                <router-link :to="{ name: 'home' }" class="-m-1.5 p-1.5">
                    <span class="sr-only">Simple Tailwind</span>
                    <img class="h-8 w-auto"
                        src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="Simple Tailwind Logo">
                </router-link>
                <button @click="menuOpen = !menuOpen" type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700 cursor-pointer">
                    <span class="sr-only">Close menu</span>
                    <!-- Icon to close mobile menu -->
                    <svg v-if="menuOpen" class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                    <svg v-else class="block size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>
            <div class="mt-6 flow-root">
                <div class="-my-6 divide-y divide-gray-500/10">
                    <div class="space-y-2 py-6">
                        <router-link :to="{ name: 'about' }" @click="menuOpen = false"
                            class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">About</router-link>
                        <router-link :to="{ name: 'blog' }" @click="menuOpen = false"
                            class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Blog</router-link>
                        <router-link :to="{ name: 'docs' }" @click="menuOpen = false"
                            class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Docs</router-link>
                        <router-link :to="{ name: 'changelog' }" @click="menuOpen = false"
                            class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Changelog</router-link>
                    </div>
                    <div class="py-6">
                        <router-link :to="{ name: 'docs' }" @click="menuOpen = false"
                            class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Try it out</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>