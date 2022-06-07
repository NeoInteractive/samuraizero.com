<script setup lang="ts">
import MetaTags from "@/components/global/MetaTags.vue";
import Arts from "@/components/samurai/Arts.vue";
import Identity from "@/components/samurai/Identity.vue";
import History from "@/components/samurai/History.vue";

const samurai = {
  slug: "luna",
  name: "Luna Alcmene",
  age: "21",
  alias: "Luna",
  spirit: "Leporin",
  clan: "Alcmene Clan",
  quote: "Even in the darkness of night, the moon is always shining.",
  history:
    "Luna is the inexperienced but earnest head of the illustrious Alcmene Clan. Despite the troubles that plague her, she is a firm believer that things will improve so long as she keeps hope alive. To her, if a leader can assure their people with a smile, then they can inspire them to be better.",
  historyMore: `Born the second child of the former Alcmene Head, Luna was never expected to lead, yet she did not harbor resentment of this fact. On the contrary, she was excited to have her older brother lead their clan into a bright future. But on the night he was supposed to rise to the occasion, disaster struck, and Luna's brother was possessed by a Demon, maiming his sister before escaping into the night.<br /><br /> Now suddenly thrusted into a role she never thought she would have, Luna does her best to lead her clan into the bright future she idealizes. However, she never loses hope that someday she'll find and save her beloved brother from his terrible fate, and she can give him back the leadership she is forced to contend with.<br /><br />During a conflict, Luna functions as a close to mid-range support, providing healing to her teammates while also dealing respectable damage. In the right hands, Luna can turn the tide of a fight, grasping a sudden victory from the jaws of defeat.`,
  arts: [
    {
      name: "Envious Light",
      description: "",
      art: "envious-light.png",
      heroic: false,
    },
    {
      name: "Nurturing Rift",
      description: "",
      art: "nurturing-rift.png",
      heroic: false,
    },
    {
      name: "Lunar Radiance",
      description: "",
      art: "penumbra.png",
      heroic: true,
    },
  ],
};
const getImagePath = () => {
  const path = `../../assets/samurai/${samurai.slug}/portrait.png`;
  return new URL(path, import.meta.url).href;
};
</script>
<template>
  <MetaTags :title="samurai.alias" :description="samurai.history" />
  <div id="hero" class="bg-[#000000] pt-56 text-white">
    <div class="container mx-auto text-center pb-12 flex justify-center">
      <div class="max-w-[50rem] px-4">
        <h3
          class="font-black text-[#ff2c3c] uppercase tracking-widest text-shadow"
        >
          <router-link to="/samurai" class="hover:text-[#e9e2ca]">
            All Samurai
          </router-link>
          / {{ samurai.alias }}
        </h3>
        <h1 class="text-6xl font-black text-shadow py-4 text-[#e9e2ca]">
          {{ samurai.alias }}
        </h1>
        <q class="tracking-wide text-lg italic text-shadow text-gray-100">
          {{ samurai.quote }}
        </q>
      </div>
    </div>
  </div>
  <main class="bg-[#0a0a0a] text-[#e9e2ca] pb-48">
    <div class="container mx-auto pt-24 flex flex-row gap-6">
      <div class="xl:w-1/2 xl:flex hidden justify-center p-4">
        <img :src="getImagePath()" />
      </div>
      <div class="xl:w-1/2 w-full">
        <History
          :history="samurai.history"
          :historyMore="samurai.historyMore"
        />
        <section id="Identity" class="xl:w-[35rem] py-6">
          <Identity
            :name="samurai.name"
            :age="samurai.age"
            :alias="samurai.alias"
            :clan="samurai.clan"
            :spirit="samurai.spirit"
          />
        </section>
        <section id="Arts" class="xl:w-[35rem] py-6">
          <Arts :arts="samurai.arts" />
        </section>
      </div>
    </div>
  </main>
</template>

<style scoped>
#hero {
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.6) 75%,
      rgba(0, 0, 0, 1) 100%
    ),
    url("@/assets/samurai/luna/banner.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
