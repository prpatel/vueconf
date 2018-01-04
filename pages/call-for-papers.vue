<template lang="pug">
.container
  .container__inner
    :markdown-it
      # Call for Papers Guidelines

      ### The VueConf.US 2018 call for proposals is now closed.

      **Before submitting a talk, please review these guidelines.**

      The conference will be in New Orleans on March 26-28, 2018.

      Workshop day is March 26, main conference days are March 27, 28

      Notifications for acceptance will go out on a rolling basis; submit early and often!

      Rejection notices will go out on December 15, 2017 or earlier.

      We look forward to reviewing your submissions!

      ---

      ### Please take a moment to read this guidelines
      * Once you've signed up on the CFP site, click 'Create New Event'.
      * Select the topic area accordingly in the CFP system:
        * Vue.js Fundamentals
        * Vue.js In Practice
        * Web/HTML/CSS
        * Vue on Mobile, Mobile Web & PWAs
        * Design & UI & UX
        * Tools, Testing
      * Presentations are 30 mins. Break apart longer sessions into PARTS I, II, etc.
      * Please ask your company if they can cover your travel first. Please mark accordingly if you need travel reimbursement (see below).
      * **Do not change your "cover travel" selection once your session has been accepted. We get a notification when this flag has been flipped, and we will re-evaluate your acceptance!** If you need to change this flag, please email us first!
      * Please email hello@VueConf.US if you have any questions.
      * Read the VueConf.US Code Of Conduct [Here](/codeofconduct)

      ---

    h3 Instructions for the Call for Papers Application

    .step
      .half
        img(src="~assets/img/cfp0.png")
      .half
        h4 Step 1
        p While creating your profile, be sure to fill in these sections.
    .step
      .half
        img(src="~assets/img/cfp3.png")
      .half
        h4 Step 2
        p This CFP system calls a presentation/session an EVENT. Create a new one for each of your proposed talks.
    .step
      .half
        img(src="~assets/img/cfp1.png")
      .half
        h4 Step 3
        p Set Event Type to lecture. Be sure to pick the correct topic area/track also.
    .step
      .half
        img(src="~assets/img/cfp2.png")
      .half
        h4 Step 4
        p Finally, set your availability for presenting. We can not guarantee we will be able to fit your availability, but we'll do our best.

    br
    .center
      a.button(
        href="https://cfp.connectevents.io/en/vueus2018/cfp/session/new",
        target="_BLANK"
      )
        | Submit a session

</template>
<script>
export default {
  head: {
    title: 'VueConf US 2018 | Call For Papers'
  }
}
</script>

<style lang="sass" scoped>
@import ~assets/css/base/helpers
@import ~assets/css/components/card

.half
  display: inline-block
  max-width: 100%
  vertical-align: middle
  text-align: left

  img
    max-width: 100%

  @media #{$medium-up}
    padding: 0 20px
    max-width: calc(50% - 40px)

.step
  @include card
  padding: 20px
  margin: 40px 0 0

h1, h2, h3
  text-align: center

h1, h2
  margin-bottom: 0

h3, h4
  margin-top: 0

h1
  margin-bottom: 40px

ul
  margin: 0

hr
  margin: 40px 0
</style>
