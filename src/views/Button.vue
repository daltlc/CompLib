<template>
  <div class="buttons__main col-xl-8">
    <h1>Buttons</h1>
    <img class="ms-logo" src="../assets/ms.png" alt />

    <h4>Component</h4>
   <AppButton :id="this.continueReadingCTA" :label="continueReading" :class="btnClass"/>


  </div>
</template>
<script>
import AppButton from "../components/AppButton.vue";

export default {
  components: {
    AppButton
  },
  data() {
    return {
        continueReadingCTA: "Continue"
    };
  }
};
</script>
<style lang="scss" scoped>
@import "@/styles/partials/__variables.scss";
.btnClass {
// @include simpleTransition(all 0.25s ease-in-out);
border: 0;
display: inline-block;
width: 264px;
height: 64px;
text-decoration: none;
cursor: pointer;
background: $bg--blue;
        color: $text--white;
font-family: $segoe--bold;
        font-weight: bold;
        font-size: 1em;
        margin-top: 15px;
        text-transform: uppercase;
        
        &__btnClass:hover {
        background-color: $bg--blue--2;
}
      }
      
h1 {
  color: black;
  font-family: monospace;
}
.ms-logo {
  width: 120px;
  margin-left: -2px;
  margin-top: -40px;
  margin-bottom: -20px;
}

</style>
