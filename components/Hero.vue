<template lang="pug">
  .hero-banner
    .hero-banner__content
      //- logo-type
      img.hero-banner__image(src="~/assets/img/vuesplash.png")
      h2.hero-banner__subheader
        strong Sheraton New Orleans
        br
        | LA, USA • March 26-28, 2018
      h1.hero-banner__tagline Music. Food. Vue.
      h2.hero-banner__subheader.hero-banner__subheader--last
        strong Workshop day:
        |  March 26,
        br
        strong Main Conference:
        |  March 27-28
      a.post-section__button.button(href="https://tickets.connectevents.io/events/vueconfus/")
        | Register
</template>

<script>
import LogoType from './LogoType.vue'

export default {
  components: { LogoType },
  methods: {
    trackTicketsEvent (event) {
      // ga('send', 'event', {
      //   eventAction: 'click',
      //   eventLabel: event.target.href,
      //   eventCategory: 'Tickets link - hero',
      //   transport: 'beacon'
      // })
      _pq.push(['track', 'GoToTickets'])
    }
  }
}
</script>

<style lang="sass">
@import ~assets/css/base/helpers

.hero-banner__tagline
  margin-bottom: 5px

.hero-banner
  text-align: center
  position: relative
  transform: translateZ(0)

  @media #{$medium-up}
    background-size: contain
    background-position: center

  @media only screen and (min-width: 1900px)
    background-size: cover

  .post-section__button
    margin: 25px 0

.hero-banner__content
  padding-top: 100px

  // @media #{$large-up}
  //   padding-top: 480px
  //
  // @media #{$xlarge-up}
  //   padding-top: 520px

.hero-banner__image
  display: block
  margin: 0 auto
  max-width: 100%

.hero-banner__header
  font-family: $font
  font-size: 40px
  color: $color-white
  font-weight: 300
  display: inline-block
  position: relative
  margin:
    top: 0
    bottom: 5px

  @media #{$medium-up}
    font-size: 62px

  @media #{$large-up}
    font-size: 82px

  .hero-banner__header__place
    color: $color-green--dark
    font-size: 28px
    position: absolute
    bottom: -15px
    right: 15px

.hero-banner__subheader
  font-family: $font
  font-size: 18px
  color: $color-text
  font-weight: 300
  letter-spacing: 1pt
  text-transform: uppercase
  margin-top: 0

  &--last
    margin-top: 25px
    text-transform: none

  @media #{$medium-up}
    font-size: 22px

  @media #{$large-up}
    font-size: 26px
</style>
