<script setup lang="ts">
import { type Recipe } from '../../types/types'

defineProps<{
    recipe: Recipe;
}>();
</script>

<template>
    <div class="shadow rounded-md">
        <NuxtImg sizes="xs:100vw sm:50vw lg:400px" format="webp" densities="x1" :src="recipe.image" alt=""
            class="rounded-t-md" />
        <div class="flex flex-col py-6 px-4">
            <p class="text-2xl font-semibold mb-2">{{ recipe.name }}</p>
            <div class="font-normal w-full bg-white/80 flex gap-8 text-xl mb-4">
                <div class="flex items-center gap-1">
                    <Icon name="mdi:clock-time-eight-outline" style="color: #f79f1a" />
                    <span class="max-sm:text-[12px]">{{ recipe.cookTimeMinutes }}</span>
                </div>
                <div class="flex items-center gap-1">
                    <Icon name="mdi:fire" style="color: #f79f1a" />
                    <span class="max-sm:text-[12px]">{{ recipe.caloriesPerServing }}</span>
                </div>
                <div class="flex items-center gap-1">
                    <Icon name="mdi:star" style="color: #f79f1a" />
                    <span class="max-sm:text-[12px]">{{ recipe.rating }} </span>
                </div>
            </div>
            <NuxtLink
                class="px-4 py-2 text-white self-start bg-yellow-500 rounded-md text-base lg:text-lg cursor-pointer"
                :to="`/recipe/${recipe?.id}`">
                View
            </NuxtLink>


        </div>
    </div>
</template>