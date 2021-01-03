<template>
  <section class="newsletter">
    <div class="container">
      <div class="columns">
        <div class="column is-5 va">
          <h3 class="jp-subheading" lang="jp">更新情報を受け取る</h3>
          <h2 class="title">Samurai Zero Newsletter</h2>
          <p>
            Stay up to date with the latest development updates by signing up
            for the Samurai Zero Development Newsletter.
          </p>
        </div>
        <div class="column is-5 is-offset-2 input-fields va">
          <div @keydown.enter="submit" style="text-align: right">
            <br />
            <div class="field has-addons">
              <div class="control is-expanded">
                <input
                  v-model="email"
                  class="input is-medium is-dark"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                />
              </div>
              <div class="control">
                <a
                  class="button zero-btn outlined white is-medium"
                  type="submit"
                  @click="submit"
                  >Sign Up</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import { ToastProgrammatic as Toast } from "buefy";

export default {
  name: "News",
  data() {
    return {
      email: undefined,
    };
  },
  methods: {
    submit() {
      if (this.email !== undefined) {
        axios
          .post("https://submit-form.com/BJ3aUFP7KgN74Es3oKlB3", {
            message: this.email,
          })
          .then(function(response) {
            if (response.status === 200) {
              Toast.open({
                duration: 10000,
                message:
                  "Success! Thank you for signing up to the Samurai Zero newsletter!",
                type: "is-primary",
                position: "is-bottom",
                queue: false,
              });
            }
          })
          .catch(function(response) {
            console.log(response);
            Toast.open({
              duration: 10000,
              message:
                "Oops, something went wrong on our end. Please try again later",
              type: "is-danger",
              position: "is-bottom",
              queue: false,
            });
          });
      } else {
        alert("Please enter an email address to sign up!");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.newsletter {
  background: #000000;
  font-family: hypatia-sans-pro, sans-serif;
  border-bottom: 1px solid #e9e2ca;
  padding-top: 10rem;
  padding-bottom: 10rem;
}
h2.title {
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
.jp-subheading {
  color: #ff2c3c;
  font-size: 1.5rem;
  font-weight: 500;
  font-family: source-han-sans-japanese, sans-serif;
  margin-bottom: 0.75rem;
}
.signup {
  border-color: #faf7eb;
  background: #faf7eb;
}
.input-fields {
  padding-left: 2rem;
}
input {
  background: transparent;
  border: transparent;
  border-bottom: 1px solid #e9e2ca;
  border-radius: 0;
  box-shadow: none;
  color: #e9e2ca;
  &::placeholder {
    color: #faf7eb;
  }
}
.va {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
