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
  background: linear-gradient(150deg, #0000009d, #000000),
    url("../assets/img/wood-dark.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  font-family: "Space Grotesk", sans-serif;
  border-top: 1px solid #e9e2cac2;
  border-bottom: 1px solid #e9e2cac2;
  padding-top: 10rem;
  padding-bottom: 10rem;
}

// Mobile styles
@media only screen and (max-width: 450px) {
  .newsletter {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
}
</style>
