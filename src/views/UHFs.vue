<template>
  <div class="col-xl-8">
    <h1>UHFs</h1>
    
    <!-- <VueUhf v-if="environment === 'development'"/> -->
 </div>
</template>
<script>
import VueUhf from "vue-uhf";

export default {

  components: {
   VueUhf
  },
  data() {
      return {
      environment: null
    };
  },
   mounted() {
    this.environment = process.env.NODE_ENV;
  }
};
</script> 
<style lang="scss" scoped>
h1 {
  color: white;
}
</style>
