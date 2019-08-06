#Indigo Slate UI component library

> All current components are for Vue.js

- [Microsoft](#microsoft)
  - [Atoms](#MS-atoms)
  
<img id="microsoft" src="src/assets/ms.png" width="100">

### MS-atoms


- [AppButton](#AppButton)

AppButton
```
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

```

Placement

```
<AppButton :id="this.continueReadingCTA" :label="continueReading" :class="btnClass"/>
```

Common styling

```
.btnClass {
@include simpleTransition(all 0.25s ease-in-out);
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
      }
      &__btnClass:hover {
        background-color: $bg--blue--2;
}
```
