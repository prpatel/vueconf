<template lang="pug">
    .section.lightning-section
        .center
        .container__inner
        h1
          | Lightning Talks!
          h2: strong Get involved with VueConf.US! This is your chance to do an 8 minute presentation on your favorite Vue.js (or other) topic!
          p
            | Lightning talks will be on both days of the main conference, and all are encouraged to present!

</template>

<script>
    export default {
    }
</script>

<style lang="sass" scoped>
  @import ~assets/css/base/helpers
  @import ~assets/css/components/card

  h1
    margin-bottom: 0

  .section.post-section
    background-color: white

  .venue__map
    margin-top: 40px
    display: block
    @include card

    img
      max-width: 100%

  .button
    margin-top: 20px
    font-weight: 400
    font-size: 16px
</style>

