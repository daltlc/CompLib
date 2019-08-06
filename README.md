# Indigo Slate UI component library

> All current components are for Vue.js

- [Microsoft](#microsoft)
  -<a href="https://www.npmjs.com/package/vue-uhf">UHF</a>
  - [Atoms](#MS-atoms)

- [General](#general)
  - [ScrollBehavior](#Scroll-behavior)
  
  
<img id="microsoft" src="src/assets/ms.png" width="140">

### MS-atoms

- [AppButton](#AppButton)

<strong>AppButton</strong>
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

<strong>Placement</strong>

```
<AppButton :id="this.continueReadingCTA" :label="continueReading" :class="btnClass"/>
```

<strong>Common styling</strong>

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


 ## Scroll-behavior



### ScrollTrigger

> Description
 
 ``` <template>
  <div class="scrolltrigger__wrapper">
    <div class="scrolltrigger__content">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    debug: Boolean
  },
  data() {
    return {
      eventId: 0,
      lastScrollEventTimestamp: 0,
      lastEmittedDirection: null,
      centerPosition: null,
      scrolledAmount: null,
      metThreshold: null,
      direction: null,
    }
  },
  computed: {
    scrollData() {
      return {
          direction: this.direction,
          eventId: this.eventId
      }
    }
  },
  methods: {
      handleScrollEvents() {
        this.direction =  window.pageYOffset > this.centerPosition ? "down" : window.pageYOffset < this.centerPosition ? "up" : null;
        if (this.direction) {
          this.lastScrollEventTimestamp = Date.now();
        }
        //event hasn't fired in 100ms. AKA the scroll momentum has stopped.
        if ((Date.now() - this.lastScrollEventTimestamp) > 100) {
          
          //Reset the direction
          this.direction = null;
          if (this.lastEmittedDirection) {
            this.eventId += 1;
            this.lastEmittedDirection = this.direction;
            this.$emit('onScroll', this.scrollData);
          }
        } else {
            if (this.direction) {
              this.eventId += 1;
              this.lastEmittedDirection = this.direction;
              this.$emit('onScroll', this.scrollData);
            }
        }
        window.scrollTo(0, this.centerPosition);
        window.requestAnimationFrame(this.handleScrollEvents);
      }
  },
  mounted() {
    this.centerPosition = parseInt(window.innerHeight / 2);
    window.scrollTo(0, this.centerPosition);
    window.requestAnimationFrame(this.handleScrollEvents);
   }
}
</script>

<style lang="scss">
  .scrolltrigger {
    &__wrapper {
      height: 200vh;
    }
    &__content {
      width: 100vw;
      height: 100vh;
      position: fixed;
    }
    &__debug {
      position: fixed;
      left: 0;
      top: 0;
      width: 300px;
      background: rgba(255, 255, 255, 0.171);
      text-align: left;
    }
  }
  body {
    /* overflow: hidden; */
    &::-webkit-scrollbar { width: 0 !important }
    -ms-overflow-style: none;
    overflow: -moz-scrollbars-none;
  }
</style>
```