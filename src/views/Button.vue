<template>
  <div class="buttons__main col-xl-8">
    <h1>Buttons</h1>
    <!-- <img class="ms-logo" src="../assets/ms.png" alt /> -->

    <h4>Microsoft button 1</h4>
    <AppButton :id="this.continueReadingCTA" :label="continueReading" class="btnClass" />
    <p>Code:  <a href="https://github.com/daltlc/CompLib#AppButton">Demo</a></p>
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
      continueReadingCTA: "Continue",
      continueReading: "Continue"
    };
  }
};
</script>
<style lang="scss" scoped>
@import "@/styles/partials/__variables.scss";

.btnClass {
  transition: 0.3s ease;
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

  &:hover {
    background-color: $bg--blue--2;
    transition: 0.3s ease;
  }
}

h1 {
  color: white;

}
h4{
    color:white;
}
.ms-logo {
  width: 120px;
  margin-left: -2px;
  margin-top: -40px;
  margin-bottom: -20px;
}

p{
    color:white;
}
a{
    text-decoration: none;
    color:#617df7;
    &:hover{
        text-decoration: underline;
    }
}
</style>
