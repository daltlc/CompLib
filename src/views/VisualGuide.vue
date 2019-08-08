<template>
  <div class="guidelines">
      <h1>Indigo Slate UI guidelines</h1>
    <p>
      File Download:
      <a href>UI guidelines</a>
    </p>
  </div>
</template>
<style lang="scss" scoped>
@import "@/styles/partials/__variables.scss";
.guidelines{
  padding-left: 18px;
}
h1{
    color:white;
}
p{
    color:white;
}
a{
    text-decoration: none;
    color: #4258b9;
    &:hover{
        text-decoration: underline;
    }
}
</style>
