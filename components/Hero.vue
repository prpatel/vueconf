<template lang="pug">
<div class="hero-banner">
    <div class="hero-banner__content"><img class="hero-banner__image" src="~/assets/img/vuesplash.png" /><br/><br/>
        <h2 class="hero-banner__subheader"><strong>STRAZ ARTS CENTER</strong><br/>Tampa, USA • March 25-27, 2019</h2>
        <h1 class="hero-banner__tagline">Art. Code. Vue.</h1>
        <h2 class="hero-banner__subheader hero-banner__subheader--last"><strong>Workshop day:</strong> March 25,<br/>
        <strong>Main Conference:</strong> March 26-27</h2>
        <a class="post-section__button button" href="https://tickets.connectevents.io/events/vueconf2019/">Register</a>
    </div>
</div>
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
  max-width: 800px
  margin: 0 auto
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
  margin-top: 30px

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
