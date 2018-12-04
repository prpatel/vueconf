<template lang="pug">
.section.sponsors-section
  .center
    .container__inner
      h1 Sponsors
      //- TODO: Fill this as needed when there are sponsors
      .sponsors__container
        .div
          // h2 DIAMOND
          // a(href="https://rangle.io/", target="_BLANK")
          //  img.sponsor__image(src="~assets/img/rangle.png")
          // p
          h2 GOLD
          a(href="https://www.vehikl.com/", target="_BLANK")
            img.sponsor__image(src="~assets/img/vehikl.png")
          p
          h2 SILVER
          a(href="https://www.openshift.com/", target="_BLANK")
            img.sponsor__image(src="~assets/img/openshift.png")

          p
          h2 HAPPY HOUR
          a(href="https://www.ritterim.com/", target="_BLANK")
            img.sponsor__image(src="~assets/img/ritter.png")

          h2 VIDEO
          a(href="http://vuemastery.com/", target="_BLANK")
            img.sponsor__image(src="~assets/img/vuemastery.png")
          p
          // h2 LANYARD
          // p
          //  a(href="https://www.gitlab.com/", target="_BLANK")
          //    img.sponsor__image(src="~assets/img/gitlab.png")
          p
          h2 NAME BADGE
          p
            a(href="https://www.cloudinary.com/", target="_BLANK")
              img.sponsor__image(src="~assets/img/cloudinary.png")

          p
          h2 COMMUNITY PARTNERS
            p
              a(href="https://www.vuevixens.org/", target="_BLANK")
                img.sponsor__image(src="~assets/img/vuevixens.png")

      //- h2 Partners
      //- .sponsors__container
      //-   div
      //-     a(href="https://www.kinonh.pl/", target="_BLANK")
      //-       img.partner__image.partner__image--special(src="~assets/img/knh-logo.svg")
      //-   div
      //-     a(href="http://vue-newsletter.com/", target="_BLANK")
      //-       img.partner__image(src="~assets/img/logo_vue-newsletter.png")
      //-     a(href="https://vuejsfeed.com/", target="_BLANK")
      //-       img.partner__image(src="~assets/img/vuejsfeed-logo.png")

      p Help us make it the best possible conference for the community.
      a.button(
        target="_BLANK",
        href="https://connectevents.typeform.com/to/lNGV4O"
      ) Become a Sponsor
</template>

<script>
export default {
}
</script>

<style lang="sass" scoped>
@import ~assets/css/base/helpers

.button
  margin-top: 40px

.sponsors-section
  h1
    margin-bottom: 40px
  h2
    margin-top: 40px
    margin-bottom: 40px

.sponsors__container
  margin: 60px 0

.sponsor__image
  max-width: 90%
  /*width: 280px*/
  height: auto
  /*max-height: 100px*/
  margin: 0 20px 20px 20px
  vertical-align: middle
  display: inline-block

.partner__image
  display: inline-block
  vertical-align: middle
  max-width: 90%
  width: 180px
  height: auto
  margin: 0 12px 20px 12px

.partner__image--special
  width: 320px
  margin-bottom: 50px
</style>
