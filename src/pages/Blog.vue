<template>
  <div class="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h1 class="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-3">
        The Modular Blog
      </h1>
      <p class="text-xl text-gray-600 dark:text-gray-400">
        Insights, patterns, and news from our development team.
      </p>
    </div>

    <!-- Error State Display -->
    <div
      v-if="store.error"
      class="mb-8 p-4 rounded-lg bg-red-100 border border-red-400 text-red-700"
    >
      <p class="font-semibold">Error loading posts:</p>
      <p>{{ store.error }}</p>
    </div>

    <!-- Loading State: Use Shadcn Skeleton -->
    <div
      v-if="store.isLoading && store.list.length === 0"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      <Card v-for="n in 6" :key="n" class="h-[300px]">
        <Skeleton class="h-40 w-full rounded-b-none" />
        <CardHeader>
          <Skeleton class="h-6 w-3/4 mb-2" />
          <div class="flex space-x-2">
            <Skeleton class="h-4 w-1/4" />
            <Skeleton class="h-4 w-1/4" />
          </div>
        </CardHeader>
      </Card>
    </div>

    <!-- Blog Posts Grid -->
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <Card
        v-for="post in store.list"
        :key="post.id"
        class="flex flex-col h-full hover:shadow-xl transition-all duration-300"
      >
        <CardHeader>
          <!-- Placeholder Image (MOCKED, as API doesn't provide images) -->
          <img
            :src="`https://placehold.co/600x400/3B82F6/FFFFFF?text=Post+${post.id}`"
            :alt="post.title"
            class="w-full h-40 object-cover rounded-lg mb-4"
          />

          <CardTitle class="text-xl font-semibold line-clamp-2">
            {{ post.title }}
          </CardTitle>
          <div class="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mt-2">
            <!-- Use the first tag as a category, or 'Untagged' if none -->
            <Badge
              v-if="post.tags && post.tags.length"
              variant="secondary"
              class="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
            >
              {{ post.tags[0] }}
            </Badge>
            <Badge
              v-else
              variant="secondary"
              class="bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300"
            >
              Untagged
            </Badge>
            <span>•</span>
            <!-- Date MOCKED/Placeholder -->
            <span>{{ new Date().toLocaleDateString() }}</span>
          </div>
        </CardHeader>
        <CardContent class="flex-grow">
          <CardDescription class="text-gray-700 dark:text-gray-300 line-clamp-3">
            {{ post.body }}
          </CardDescription>
        </CardContent>
        <CardFooter>
          <!-- Dynamic Router Link to post details -->
          <RouterLink :to="`/blogs/${post.id}`" class="w-full">
            <Button
              variant="link"
              class="p-0 justify-start text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Read Article &rarr;
            </Button>
          </RouterLink>
        </CardFooter>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useBlogStore } from '@/stores/blog/blog.store' // <-- New Blog Store

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Skeleton } from '@/components/ui/skeleton' // For loading state

const store = useBlogStore()
const { list, isLoading, error } = storeToRefs(store)

onMounted(() => {
  // Fetch data when the component is mounted
  if (list.value.length === 0) {
    store.fetchPosts()
  }
})
</script>
