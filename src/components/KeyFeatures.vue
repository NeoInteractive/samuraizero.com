<template>
  <section class="keyFeatures">
    <div class="container">
      <div class="columns">
        <div class="column  va ">
          <h3 class="jp-subheading" lang="jp">あなたの過去に目を向ける</h3>

          <h1 class="title">Hone your skills, samurai</h1>
          <br />
          <div class="columns">
            <div class="column is-4">
              <h2 class="subtitle">Tactical Action RPG</h2>
              <p>
                Experience a unique champloo of fast paced octane with skillful
                competitive mechanics and tactical game modes. RPG systems allow
                for players to create situational builds for their favorite
                characters. Team up as a squad of three or take the loner's path
                and fight on your own.
              </p>
            </div>
            <div class="column is-4">
              <h2 class="subtitle">Iconic Samurai</h2>
              <p>
                Play as a unique cast of super powered Samurai, each with their
                own abilities and powerful signature attack that enhance combat
                and team cooperation. No two Samurai play alike and each has
                depth which will require hours to master.
              </p>
            </div>
            <div class="column is-4">
              <h2 class="subtitle">An Evolving Universe</h2>
              <p>
                Discover everything the world of Edo has to offer. From ancient
                mystical ruins to technologically marvelous capitals, become
                enraptured in the vast history of conflict that has shaped the
                world. Become invested in an eclectic cast and bear witness to
                the journeys they take to change both themselves and the world
                of Edo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.keyFeatures {
  background: radial-gradient(
      136.03% 54.57% at 50% 48.04%,
      rgba(255, 255, 255, 0) 0%,
      rgba(0, 0, 0, 0) 60.63%,
      #000000 80%
    ),
    url(../assets/img/wraith-forest.jpg);
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  padding-bottom: 25rem;
  padding-top: 25rem;
}
.va {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.jp-subheading {
  color: #ff2c3c;
  font-size: 1.5rem;
  font-weight: 500;
  font-family: source-han-sans-japanese, sans-serif;
  margin-bottom: 0.75rem;
}
.title {
  color: #e9e2ca;
  text-transform: uppercase;
  font-family: hypatia-sans-pro, sans-serif;
  font-size: 3rem;
  padding-bottom: 0.75rem;
  border-bottom: 5px solid #faf7eb;
  letter-spacing: 2px;
}
.subtitle {
  color: #e9e2ca;
  font-size: 2rem;
  font-family: hypatia-sans-pro, sans-serif;
}
p {
  letter-spacing: 0.1rem;
  text-align: justify;
  font-family: hypatia-sans-pro, sans-serif;
  font-size: 1.4rem;
  color: #faf7eb;
}

// Mobile styles
@media only screen and (max-width: 450px) {
  .keyFeatures {
    padding: 5rem 1rem;
    text-align: center;
    padding-bottom: 0rem;
    p {
      text-align: center;
    }
    .title {
      font-size: 2.25rem !important;
      padding-top: 0 !important;
    }
  }
}
</style>
