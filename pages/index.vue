<template lang="pug">
div
  hero-section

  .container
    .container__inner.section.post-section
      .cfp-video
        <iframe width="520" height="292" src="https://www.youtube.com/embed/i9SK-l2gQEE?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
      .cfp-content
        h1 Join the band!
        h4 Call for Papers Open Now

        p We're looking for submissions on all things Vue.js!

        .center
          nuxt-link(to="/schedule")
            button.button.speaker-button Apply as a speaker
      //- TODO: Uncomment when there are speakers
      //- speakers-list(:speakers="speakers")
    tickets-section#tickets
    venue-section
    //- newsletter-section

    sponsors-section
    organizers-section
</template>

<script>
import SpeakersList from '@/components/SpeakersList'
import HeroSection from '@/components/Hero'
import NewsletterSection from '@/components/Newsletter'
import SponsorsSection from '@/components/Sponsors'
import OrganizersSection from '@/components/Organizers'
import SubmitTalks from '@/components/SubmitTalks'
import TicketsSection from '@/components/Tickets'
import VenueSection from '@/components/Venue'
import speakers from '../content/speakers/speaker-list'

export default {
  components: {
    HeroSection,
    NewsletterSection,
    OrganizersSection,
    SponsorsSection,
    SpeakersList,
    SubmitTalks,
    TicketsSection,
    VenueSection
  },
  head: {
    title: 'VueConf 2017 – 21–23 June, 2017 in Wrocław, Poland'
  },
  data () {
    return {
      speakers
    }
  }
}
</script>

<style lang="sass" scoped>
@import ~assets/css/base/helpers

.speaker-button
  margin: 40px 0 10px

.container
  padding-top: 50px

.center
  margin-top: 20px

h3
  margin: 50px 0 0
  font-size: 24px
  font-family: "Source Sans Pro", sans-serif
  font-weight: 300
  color: #35485E

  @media #{$medium-up}
    font-size: 32px

.cfp-video
  display: inline-block
  max-width: 100%
  vertical-align: middle
  text-align: left

  @media #{$medium-up}
    padding: 0 20px 0 0
    max-width: calc(60% - 40px)

.cfp-content
  display: inline-block
  max-width: 100%
  vertical-align: middle
  text-align: left

  @media #{$medium-up}
    padding: 0 20px
    max-width: calc(40% - 40px)

  h1, h4
    margin: 0

</style>
