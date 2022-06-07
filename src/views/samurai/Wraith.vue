<script setup lang="ts">
import MetaTags from "@/components/global/MetaTags.vue";
import Arts from "@/components/samurai/Arts.vue";
import Identity from "@/components/samurai/Identity.vue";
import History from "@/components/samurai/History.vue";

const samurai = {
  slug: "wraith",
  name: "Dyrus Simi",
  age: "29",
  alias: "Wraith",
  spirit: "Chausiku (Shattered)",
  clan: "Unaffiliated",
  quote: "Maybe a leopard can't change its spots...but it can hide them.",
  history:
    "Wraith is an ex-mercenary forged by both ancestral teachings passed down to him and through withstanding a lifetime of tragedy. The final survivor of the once proud Simi Clan, Dyrus watched the mountains he called home burn to the ground by Meridian forces when he was only a boy. However at Chausiku's insistence, the orphaned boy decided to forsake revenge and focus only on surviving so that he might carry the Simi legacy.",
  historyMore: `In time, Dyrus found a new family in the Silver Cloaks, a mercenary group he co-founded with his friend Ren. The group would undertake several different kinds of jobs, from reconnaissance to guard duty, and even wetwork operations for those that truly deserved it. Yet even this family would be ripped away from him, as they were slain by the Shinigami during the New Dawn, including the shattering of his own Spirit Partner, Chausiku.<br /><br /> Now without a family once again, and this time without even a Spirit to guide him, Dyrus spends all his efforts gathering information for an unknown purpose. He denies that what he seeks is revenge, only commenting that "it's not what they would want." The true goal of this samurai remains in the shadows.<br /><br />Specializing in speed and precision, he prefers to handle tasks as quickly an efficiently as possible. While he has no qualms with killing, he detests needless violence, so when he goes for the throat, you can be assured that there was no other choice. In battle, Wraith is most lethal at identifying and isolating high-priority targets and ending them quickly, before disappearing just as fast.`,
  arts: [
    {
      name: "Night Hunter",
      description: "",
      art: "placeholder.png",
      skill: "",
      heroic: false,
    },
    {
      name: "Fractured Cloak",
      description: "",
      art: "placeholder.png",
      skill: "",
      heroic: false,
    },
    {
      name: "Spirit of the Night",
      description: "",
      art: "placeholder.png",
      skill: "",
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
    <div class="container mx-auto pt-24 flex flex-row">
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
    url("@/assets/samurai/wraith/banner.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
