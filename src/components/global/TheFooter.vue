<script setup lang="ts"></script>

<template>
  <footer class="bg-black w-full py-12 border-t-2 border-[#e9e2caab]">
    <div class="flex items-center justify-center my-12 px-8">
      <iframe
        data-v-5763bdde=""
        src="https://store.steampowered.com/widget/1578520/"
        frameborder="0"
        width="800px"
        height="190"
      ></iframe>
    </div>
    <section
      class="container mx-auto flex xl:flex-row flex-col justify-between items-center py-6"
    >
      <a href="https://neointeractive.dev">
        <img src="@/assets/branding/ni_full_light.svg" class="h-12" />
      </a>
      <div
        class="flex flex-row gap-4 text-white uppercase font-black tracking-wider xl:mt-0 my-6"
      >
        <a
          href="https://patreon.com/neointeractive"
          target="_blank"
          title="Patreon"
        >
          Patreon
        </a>
        <a
          href="https://neointeractive.dev/team#meet-the-team"
          target="_blank"
          title="Latest News"
        >
          The Dev Team
        </a>
        <a href="https://merch.samuraizero.com/" title="Merch"> Merch </a>
        <a href="https://codex.samuraizero.com" title="Codex"> Codex </a>
      </div>
    </section>
    <section
      class="container mx-auto flex xl:flex-row flex-col justify-between items-center border-t-2 border-[#e9e2caab] py-6"
    >
      <div class="text-[#e9e2ca] xl:text-left text-center">
        <p>
          Made with ❤️ by the team at
          <a href="https://neointeractive.dev" title="Neo Interactive">
            Neo Interactive
          </a>
        </p>
        <p>&copy; 2022 Neo Interactive</p>
      </div>
      <div class="flex flex-row gap-8 text-2xl text-[#e9e2ca] xl:mt-0 mt-6">
        <a
          href="https://twitter.com/playsamuraizero/"
          title="Twitter"
          class="opacity-50 hover:opacity-100 transition-all"
          rel="noopener"
          target="_blank"
        >
          <i class="fa-brands fa-twitter" />
        </a>
        <a
          href="https://instagram.com/playsamuraizero/"
          title="instagram"
          class="opacity-50 hover:opacity-100 transition-all"
          rel="noopener"
          target="_blank"
        >
          <i class="fa-brands fa-instagram" />
        </a>
        <a
          href="https://store.steampowered.com/app/1578520/Samurai_Zero/?curator_clanid=40077624"
          title="steam"
          class="opacity-50 hover:opacity-100 transition-all"
          rel="noopener"
          target="_blank"
        >
          <i class="fa-brands fa-steam" />
        </a>
        <a
          href="https://twitch.tv/neointeractive"
          title="twitch"
          class="opacity-50 hover:opacity-100 transition-all"
          rel="noopener"
          target="_blank"
        >
          <i class="fa-brands fa-twitch" />
        </a>
        <a
          href="https://discord.com/invite/XTpAjDP"
          title="discord"
          class="opacity-50 hover:opacity-100 transition-all"
          rel="noopener"
          target="_blank"
        >
          <i class="fa-brands fa-discord" />
        </a>
      </div>
    </section>
  </footer>
</template>

<style lang="scss" scoped>
a {
  @apply hover:underline;
}
</style>
