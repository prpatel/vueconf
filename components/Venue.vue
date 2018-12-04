<template lang="pug">
.section.post-section
  .nav-target#location
  .container__inner
    h1
      | Location
    a.venue__map(href="https://goo.gl/maps/hNy2FiQWVgu", target="_BLANK")
      img(src="~assets/img/straz1.jpg" alt="STRAZ ARTS CENTER")
    .text-center
      h2: strong STRAZ ARTS CENTER
      p
        | VueConf.US will take place in beautiful Tampa, Florida. We'll be in the heart of downtown on the river, and within a short drive of Tampa's amazing beaches.

      p
        strong Address:
        br
        | 1010 N Macinnes Pl
        br
        | Tampa, FL, USA

      a.button.button--dark(href="https://goo.gl/maps/Zx36nMrTTEn", target="_BLANK") SEE THE MAP
      p
        | Discounted block rooms available!
      a.button.button--dark(href="http://www.marriott.com/meeting-event-hotels/group-corporate-travel/groupCorp.mi?resLinkData=VueConf%5Etpatd%60vuevuea%7Cvuevueb%60229.00%60USD%60false%602%60;tpadt%60vuevuea%7Cvuevueb%60219%60USD%60false%602%603/24/19%603/27/19%6002/24/19&app=resvlink&stop_mobi=yes", target="_BLANK") CLICK HERE TO BOOK

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
