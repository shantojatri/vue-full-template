<template>
  <!-- Shadcn Card component for structure and styling -->
  <Card class="flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
    <CardHeader class="p-0">
      <!-- Image Placeholder/Thumbnail -->
      <img
        :src="product.thumbnail"
        :alt="product.title"
        class="w-full h-48 object-cover rounded-t-lg"
        onerror="this.onerror=null; this.src='https://placehold.co/600x400/3B82F6/FFFFFF?text=Product+Image';"
      />
    </CardHeader>
    <CardContent class="p-4 flex-grow">
      <div class="flex justify-between items-start mb-2">
        <CardTitle class="text-lg font-semibold line-clamp-2">
          {{ product.title }}
        </CardTitle>
        <!-- Shadcn Badge for price -->
        <Badge class="bg-green-500 text-white font-bold text-sm whitespace-nowrap">
          ${{ product.price.toFixed(2) }}
        </Badge>
      </div>
      <CardDescription class="text-sm text-gray-600 line-clamp-3">
        {{ product.description }}
      </CardDescription>
    </CardContent>
    <CardFooter class="p-4 pt-0">
      <!-- Shadcn Button for action -->
      <Button variant="outline" class="w-full">View Details</Button>
    </CardFooter>
  </Card>
</template>

<script setup lang="ts">
// Import necessary shadcn components
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

// Define expected props based on the Product interface in the store
interface Product {
  id: number
  title: string
  description: string
  price: number
  thumbnail: string
  // Note: Only list properties used here
}

defineProps<{
  product: Product
}>()
</script>
