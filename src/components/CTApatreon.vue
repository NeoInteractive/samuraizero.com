<template>
  <section class="newsletter">
    <div class="container">
      <CTABase
        title="Support us on Patreon"
        jpSubtitle="寄付をする"
        description="Get an exclusive look behind the scenes as we develop Samurai Zero. Our Patrons help us to continue to turn our vision of Samurai Zero into a reality every day."
        buttonText="View our page on Patreon"
        url="https://patreon.com/neointeractive"
      />
    </div>
  </section>
</template>

<script>
import CTABase from "@/components/_CTAbase.vue";

export default {
  name: "News",
  data() {
    return {
      email: undefined,
    };
  },
  components: {
    CTABase,
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.newsletter {
  background: #000000;
  font-family: hypatia-sans-pro, sans-serif;
  border-top: 1px solid #e9e2ca;
  border-bottom: 1px solid #e9e2ca;
  padding-top: 10rem;
  padding-bottom: 10rem;
}
</style>
