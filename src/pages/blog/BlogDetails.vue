<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useBlogStore } from '@/stores/blog/blog.store'
// Shadcn Components
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Skeleton } from '@/components/ui/skeleton'

const props = defineProps<{
  id: string
}>()

const blogStore = useBlogStore()
const { singleBlog: post, isLoading, error } = storeToRefs(blogStore)

const loadPost = (postId: string | number) => {
  const id = typeof postId === 'string' ? parseInt(postId) : postId
  if (!isNaN(id)) {
    blogStore.fetchBlogById(id)
  } else {
    blogStore.error = 'Invalid post ID provided.'
  }
}

onMounted(() => {
  loadPost(props.id)
})

watch(
  () => props.id,
  (newId) => {
    if (newId) loadPost(newId)
  },
)
</script>

<template>
  <div class="mx-auto py-12 px-4 sm:px-6 lg:px-8">
    <!-- Navigation: Back Button -->
    <div class="mb-8">
      <RouterLink to="/blogs">
        <Button
          variant="ghost"
          class="pl-0 hover:pl-2 transition-all duration-300 text-gray-600 dark:text-gray-400 hover:bg-transparent"
        >
          <svg
            class="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            ></path>
          </svg>
          Back to Blogs
        </Button>
      </RouterLink>
    </div>

    <!-- Loading State -->
    <div v-if="blogStore.isLoading" class="space-y-6">
      <Skeleton class="h-[400px] w-full rounded-xl" />
      <div class="space-y-4 px-4">
        <Skeleton class="h-10 w-3/4" />
        <div class="flex gap-2">
          <Skeleton class="h-6 w-20" />
          <Skeleton class="h-6 w-20" />
        </div>
        <Skeleton class="h-4 w-full" />
        <Skeleton class="h-4 w-full" />
        <Skeleton class="h-4 w-2/3" />
      </div>
    </div>

    <!-- Error State -->
    <div
      v-else-if="blogStore.error"
      class="p-6 rounded-lg bg-red-50 border border-red-200 text-red-700 text-center"
    >
      <p class="font-semibold text-lg">Unable to load post</p>
      <p class="text-sm opacity-80">{{ blogStore.error }}</p>
    </div>

    <!-- Post Content Card -->
    <Card v-else-if="post" class="overflow-hidden shadow-2xl border-0 bg-white dark:bg-gray-800">
      <!-- Hero Image -->
      <div class="relative w-full h-64 md:h-96 bg-gray-100 dark:bg-gray-900">
        <img
          :src="`https://placehold.co/1200x600/3B82F6/FFFFFF?text=${encodeURIComponent(post.title)}`"
          :alt="post.title"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

        <!-- Optional: Title overlay on image for a magazine look, or keep it in header below -->
      </div>

      <CardHeader class="p-8 pb-4">
        <!-- Metadata Row -->
        <div class="flex flex-wrap items-center gap-3 mb-4 text-sm">
          <Badge
            v-for="tag in post.tags"
            :key="tag"
            variant="secondary"
            class="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1"
          >
            #{{ tag }}
          </Badge>
          <span class="text-gray-400">•</span>
          <span class="text-gray-500 dark:text-gray-400 font-medium">{{
            new Date().toLocaleDateString()
          }}</span>
          <span class="text-gray-400">•</span>
          <span class="flex items-center text-gray-500 dark:text-gray-400">
            <svg class="w-4 h-4 mr-1 text-red-500" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clip-rule="evenodd"
              ></path>
            </svg>
            {{ post.reactions }}
          </span>
        </div>

        <CardTitle
          class="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight"
        >
          {{ post.title }}
        </CardTitle>
      </CardHeader>

      <CardContent class="p-8 pt-2">
        <!-- Post Body -->
        <div
          class="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed"
        >
          <p
            class="first-letter:text-5xl first-letter:font-bold first-letter:text-blue-600 first-letter:float-left first-letter:mr-3 first-letter:mt-[-10px]"
          >
            {{ post.body }}
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget leo at velit
            imperdiet varius. In eu ipsum vitae velit congue iaculis vitae at risus. Nullam tortor
            nunc, bibendum vitae semper ac, volutpat eget massa.
          </p>
          <blockquote>
            "Modular architecture isn't just about code organization; it's about scalability of
            thought."
          </blockquote>
          <p>
            {{ post.body }}
            <!-- Repeating for visual length -->
          </p>
        </div>
      </CardContent>

      <CardFooter
        class="bg-gray-50 dark:bg-gray-900/50 p-8 border-t dark:border-gray-700 flex justify-between items-center"
      >
        <div class="text-sm text-gray-500">
          Written by
          <span class="font-semibold text-gray-900 dark:text-gray-100"
            >User ID: {{ post.userId }}</span
          >
        </div>
        <div class="flex space-x-2">
          <!-- Share Buttons Placeholder -->
          <Button size="sm" variant="outline">Share</Button>
          <Button size="sm">Subscribe</Button>
        </div>
      </CardFooter>
    </Card>
  </div>
</template>
