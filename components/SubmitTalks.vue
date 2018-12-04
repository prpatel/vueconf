<template lang="pug">
div
  hero-section

  .container
    .container__inner.section.post-section
      .cfp-video
        iframe(
          width="520"
          height="292"
          src="https://www.youtube.com/embed/tdBO-XGOMPI?rel=0&amp;showinfo=0"
          frameborder="0"
          allowfullscreen
        )
      .cfp-content
        h1 How do you Vue?
        br
        h4 Attendees will get a chance to do lightning talks and share their passion for Vue.js!

        p Lightning talk papers can be submitted a week before the event, so start thinking of your ideas after you've gotten you tickets!

</template>

<script>
export default {
}
</script>

<style lang="sass" scoped>
@import ~assets/css/base/helpers

.speaker-button
  margin: 40px 0 10px

.cfp-video
  display: inline-block
  max-width: 100%
  overflow-x: hidden
  vertical-align: middle
  text-align: left

  @media #{$medium-up}
    padding: 0 20px 0 0
    max-width: calc(60% - 40px)

.cfp-content
  display: inline-block
  max-width: 90%
  vertical-align: middle
  text-align: left

  @media #{$medium-up}
    padding: 0 20px
    max-width: calc(40% - 40px)

  h1, h4
    margin: 0

</style>
