<template>
<button class="button" :class="buttonClass"><a :id="ctaID">{{label}}</a></button>
</template>

<script>
export default {
  name: "AppButton",
  props: {
    ctaID:'String',
    label: String,
    buttonClass: {
      type: String
    },
    hovered:false,
  }
};
</script>
<style lang="scss" scoped>
.button {
  a {
    border-bottom: solid 0.5px #0078d4;;
    transition: border-bottom 0.3s ease;
  }
}
.button:hover {
  a {
    border-bottom: solid 0.4px white;
  }
}
</style>