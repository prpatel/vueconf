<template lang="pug">
div
  hero-section

  .container
    SubmitTalks
    tickets-section#tickets
    workshops-section
    .container__inner.section.post-section
          //- TODO: Uncomment when there are speakers
          h1 Presentations
          speakers-list(:speakers="speakers")
    lightning-section
    venue-section
    //- newsletter-section
    sponsors-section
    //- organizers-section
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
import WorkshopsSection from '@/components/Workshops'
import LightningSection from '@/components/Lightning'
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
    VenueSection,
    WorkshopsSection,
    LightningSection
  },
  head: {
    title: 'VueConf US – March 26–28, 2018 in New Orleans, USA | Vue.js Conference'
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
</style>
