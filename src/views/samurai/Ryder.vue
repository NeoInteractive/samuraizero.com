<script setup lang="ts">
import MetaTags from "@/components/global/MetaTags.vue";
import Arts from "@/components/samurai/Arts.vue";
import Identity from "@/components/samurai/Identity.vue";
import History from "@/components/samurai/History.vue";

const samurai = {
  slug: "ryder",
  name: "[UNKNOWN]",
  age: "[UNKNOWN]",
  alias: "Ryder",
  spirit: "[UNKNOWN]",
  clan: "Kashikoi Clan (speculated)",
  quote: "My work will be done when the fox finally sleeps.",
  history:
    "Ryder is an automaton largely theorized to be affiliated with the Kashikoi Clan in some shape or form. Little is known about Ryder at the moment. Where he comes from or what he wants are a mystery to all but a select few. While he moves with the fluidity and natural motion of a human, he is most assuredly a machine.",
  historyMore: `From what can be gleamed, Ryder appears to take great interest in strong samurai, but does not seem to seek their elimination. Rather, he only wishes to test his skills against them. <br /><br /> Most notably, Ryder seems particularly fixated with the equally mysterious samurai Wraith, and pursues him the most doggedly. This apparently rivalry is largely one-sided, as Wraith does not share an equal fascination with the machina beyond the usual questions everyone has about him.<br /><br />The technology that composes Ryder is the most advanced in all of Edo, but snippets of things he says somewhat imply that he is not altogether sentient, and that there may be someone puppeteering the machine. If there are people privy to this knowledge, they do not share.<br /><br />With lightning-fast movements and deft strikes with his blade, he is a peerless duelist. While he might lack in crowd control to help set up combos for his teammates, he more than makes up for it in raw damage, allowing him to have some of the highest damage-dealing potential of any samurai. While in a fight, Ryder excels at eliminating threats before they become too much of an issue, as his relative fragility causes him to struggle in drawn-out fights.`,
  arts: [
    {
      name: "Instant Flash",
      description: "",
      art: "instant-flash.png",
      skill: "",
      heroic: false,
    },
    {
      name: "Speed Razor",
      description: "",
      art: "speed-razor.png",
      skill: "",
      heroic: false,
    },
    {
      name: "Stellar Conclusion",
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
          :thisIs="true"
          samurai="Ryder"
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
    url("@/assets/samurai/ryder/banner.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
