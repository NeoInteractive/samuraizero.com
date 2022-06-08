<script setup lang="ts">
import axios from "axios";
import { ref, onMounted } from "vue";
import SZButton from "@/components/global/SZButton.vue";

interface News {
  id: string;
  uuid: string;
  title: string;
  slug: string;
  html: string;
  comment_id: string;
  feature_image: string;
  featured: boolean;
  created_at: string;
  updated_at: string;
  published_at: string;
  custom_excerpt?: string | null;
  codeinjection_head?: null;
  codeinjection_foot?: null;
  custom_template?: null;
  canonical_url?: null;
  primary_author?: null;
  primary_tag?: null;
  url: string;
  page: boolean;
  excerpt?: string | null;
  og_image?: null;
  og_title?: null;
  og_description?: null;
  twitter_image?: null;
  twitter_title?: null;
  twitter_description?: null;
  meta_title?: null;
  meta_description?: null;
}

let posts = ref<News[]>([]);

const fetchNews = async (): Promise<void> => {
  try {
    posts.value = await axios
      .get(
        "https://news.samuraizero.com/ghost/api/v2/content/posts/?key=e13efcce8f892a9cccaa14c7ae&limit=4"
      )
      .then((res) => res.data.posts as News[]);
  } catch (error) {
    console.error(error);
  }
};

onMounted(() => {
  fetchNews();
});
</script>

<template>
  <div
    id="news-feed"
    class="xl:py-24 py-12 px-8 bg-[#0e0e0e] border-t-2 border-[#e9e2caab]"
  >
    <div class="container mx-auto">
      <div class="flex xl:flex-row flex-col justify-between items-center">
        <h1 class="xl:text-5xl text-3xl text-[#f7f0d9] xl:pb-8 font-bold">
          Latest News & Updates
        </h1>
        <a
          href="https://news.samuraizero.com"
          target="_blank"
          class="text-xl text-[#ff2c3c] font-bold hover:underline transition-all pb-8"
        >
          View All
        </a>
      </div>
      <section class="flex flex-row flex-wrap lg:flex-nowrap gap-8 items-top">
        <article
          v-for="post in posts"
          :key="post.id"
          class="lg:w-1/4 md:w-1/2 w-full rounded shadow-md"
        >
          <a :href="post.url">
            <img
              :src="post.feature_image"
              :alt="post.title"
              class="aspect-video w-full rounded-t border-t-4 border-red-600"
            />
          </a>
          <div class="bg-black text-white px-4 py-6 rounded-b">
            <p class="text-xs font-light pb-2 text-[#e9e2ca]">
              {{ new Date(post.published_at).toLocaleDateString("en-US") }}
            </p>
            <p class="pb-6 text-2xl text-[#f7f0d9]">
              <a :href="post.url">
                {{ post.title }}
              </a>
            </p>
            <SZButton type="external" :href="post.url" size="xs">
              Read More
            </SZButton>
          </div>
        </article>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
