<template>
  <div>
    <b-collapse
      v-for="(collapse, index) of collapses"
      :key="index"
      class="card"
      :open="isOpen == index"
      @open="isOpen = index"
    >
      <div slot="trigger" class="card-header" role="button">
        <p class="card-header-title">{{ collapse.title }}</p>
        <a class="card-header-icon">
          <i class="fas fa-angle-down"></i>
        </a>
      </div>
      <div class="card-content">
        <div class="content">{{ collapse.text }}</div>
      </div>
    </b-collapse>
    <b-collapse class="card" :open="isOpen == index" @open="isOpen = index">
      <div slot="trigger" class="card-header" role="button">
        <p class="card-header-title">
          Can I help with voice acting / modeling / programming / music / etc.?
        </p>
        <a class="card-header-icon">
          <i class="fas fa-angle-down"></i>
        </a>
      </div>
      <div class="card-content">
        <div class="content">
          <p>
            Thank you for your interest - We are always on the lookout for those
            who will mesh well with the team and provide unique skillsets. See
            our active job postings on the Neo Interactive website below. If
            there are no open positions, feel free to fill out the applicable
            general interest forms below.
          </p>
          <div class="buttons">
            <a
              href="https://neointeractive.dev/jobs/"
              target="_blank"
              class="button is-primary"
              style="margin-right: 20px"
              >View Open Positions</a
            >
            <a
              href="https://airtable.com/shrRXCBWS3cycnTzG"
              target="_blank"
              class="button is-white is-outlined"
              style="margin-right: 20px"
              >Voice Acting Audition Form</a
            >
          </div>
        </div>
      </div>
    </b-collapse>
    <b-collapse class="card" :open="isOpen == index" @open="isOpen = index">
      <div slot="trigger" class="card-header" role="button">
        <p class="card-header-title">Do you have a Patreon? Can I donate?</p>
        <a class="card-header-icon">
          <i class="fas fa-angle-down"></i>
        </a>
      </div>
      <div class="card-content">
        <div class="content">
          <p>
            Yes we have a Patreon page for Neo Interactive as well as a one-time
            donation page through PayPal:
          </p>
          <a
            href="https://patreon.com/neointeractive"
            target="_blank"
            class="button is-patreon"
            style="margin-right: 20px"
            >Become a Patreon Backer</a
          >
          <a
            href="https://paypal.me/neointeractive"
            target="_blank"
            class="button is-info"
            >One-Time PayPal Donation</a
          >
        </div>
      </div>
    </b-collapse>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: 0,
      collapses: [
        {
          title: "What is Samurai Zero?",
          text:
            "Samurai zero is a third-person multiplayer action rpg game set in the science fantasy world of Edo, developed by Neo Interactive. But if we're being honest, we don't *really* know what genre Samurai Zero is - it draws a lot of inspiration from many different genres and themes.",
        },
        {
          title: "What is the gameplay like?",
          text:
            "Every conflict is an intense champloo of the power of the unknown, fusing samurai power fantasies and over-the-top action. In Samurai Zero, a host of characters with their own special abilities and personalities fight across an ever-changing fantasy landscape inspired by the Japanese Age of the Samurai. You'll find yourself perfecting your movement in the Gauntlet, proving your combat merit in 1v1 duels, and coordinating with your team in 3v3 or 4v4 objective game modes.",
        },
        {
          title: "Where can I get the game?",
          text:
            "You can’t, yet. Samurai Zero is still in early development. Distribution platforms will be announced as we get closer to launch. The closed movement build will be shared with Patreon supporters at the end of October 2020. Our open combat test build is slated for December/January.",
        },
        {
          title: "How much will Samurai Zero cost?",
          text: "Still undecided at this time.",
        },
        {
          title: "What engine is Samurai Zero being developed in?",
          text:
            "Samurai Zero is currently being developed with Unreal Engine 4.",
        },
        {
          title: "Will there be a PC / Mac / Linux / Console version?",
          text: "At this time we are focused on PC.",
        },
        {
          title: "What are the required system specs?",
          text:
            "While we can't really say at this point, the graphical fidelity we are aiming for requires semi-modern hardware. Think GTX 1060/ RX 580 and up for graphics, multicore CPU minimum and at least 6GB of ram should get you going just fine. We will have more concrete system specs as we get closer to release.",
        },
        {
          title: "Can I be an alpha/beta tester?",
          text: `Both alpha and beta testing will be closed. Priority will be given to our Patreon backers first, then to those who are most active in our discord channel, and finally to those who signed up on the website when the form is opened.`,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.collapse {
  border-radius: 4px !important;
  &.card {
    margin-bottom: 1rem;
    .card-header-title {
      margin-bottom: 0 !important;
      font-family: hypatia-sans-pro, sans-serif;
      font-weight: 600;
      font-size: 1.5rem;
    }
    .card-header-icon {
      color: white;
    }
    .card-header {
      background: hsl(355, 100%, 29%);
      font-size: 1.4rem;
      p {
        color: white;
      }
      color: white !important;
    }
    .card-content {
      background: #252525 !important;
      font-family: hypatia-sans-pro, sans-serif;
      font-size: 1.3rem;
    }
    background: #252525;
    color: white !important;
  }
}
</style>
