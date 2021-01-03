<template>
  <section class="cta-container">
    <div class="columns">
      <div class="column is-8 is-offset-2 va has-text-centered">
        <h3 class="jp-subheading" lang="jp">{{ jpSubtitle }}</h3>
        <h2 class="title">{{ title }}</h2>
        <p>
          {{ description }}
        </p>
        <br /><br />
        <ZeroBtn :text="buttonText" type="patreon" :url="url" />
      </div>
    </div>
  </section>
</template>

<script>
import ZeroBtn from "@/components/global/ZeroBtn.vue";
export default {
  props: {
    jpSubtitle: String,
    title: String,
    description: String,
    buttonText: String,
    url: String,
  },
  components: {
    ZeroBtn,
  },
};
</script>

<style lang="scss" scoped>
.jp-subheading {
  color: #ff2c3c;
  font-size: 1.5rem;
  font-weight: 500;
  font-family: source-han-sans-japanese, sans-serif;
  margin-bottom: 0.75rem;
}
.title {
  color: #e9e2ca;
  font-size: 3rem;
  letter-spacing: 0.15rem;
  font-weight: 800;
  text-transform: uppercase;
  padding-bottom: 0.75rem;
  border-bottom: 5px solid #faf7eb;
}
p {
  color: #faf7eb;
  font-size: 1.3rem;
}
.va {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
