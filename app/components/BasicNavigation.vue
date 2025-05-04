<script setup lang="ts"></script>

<template>
    <header class="py-4 border-b">
        <nav class="flex container items-center">
            <NuxtLink href="" class="flex gap-1 items-center">
                <img src="/icon-green.png" class="w-10" alt="green" />


                <!-- <NuxtImg src="/icon-green.png" alt="green" /> -->

                <span class="text-3xl max-sm:text-[12px] font-bold">Nuxt Recipes</span>
            </NuxtLink>
            <ul class="flex gap-6 ml-auto text-xl font-bold capitalize">
                <li>

                    <NuxtLink class="max-sm:text-[11px] " to="/">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink class="max-sm:text-[11px] " to="/about">About</NuxtLink>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style scoped></style>