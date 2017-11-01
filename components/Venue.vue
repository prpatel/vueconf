<template lang="pug">
.section.post-section
  .nav-target#location
  .container__inner
    h1
      | Location
    a.venue__map(href="https://goo.gl/maps/hNy2FiQWVgu", target="_BLANK")
      img(src="~assets/img/map.png" alt="Sheraton New Orleans")
    .text-center
      h2: strong Sheraton New Orleans
      p
        | VueConf.US will take place in the heart of historic New Orleans, within walking distance of the best food, music, and culture the city has to offer.

      p
        strong Address:
        br
        | 500 Canal St,
        br
        | New Orleans, LA
      a.button.button--dark(href="https://goo.gl/maps/hNy2FiQWVgu", target="_BLANK") SEE THE MAP
</template>

<script>
export default {
}
</script>

<style lang="sass" scoped>
  @import ~assets/css/base/helpers
  @import ~assets/css/components/card

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
