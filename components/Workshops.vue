<template lang="pug">
.container
  .container__inner.post-section
    h1
      | Workshops
    h2
      | Level-up your Vue.js knowledge with Vue.js core team members and experts!

    .workshops-button.center
      nuxt-link(to="/workshops")
        button.button.speaker-button See Workshop Details
</template>

<script>
import SpeakersList from '@/components/SpeakersList'
import workshops from '@/content/speakers/workshop-list'

export default {
  components: { SpeakersList },
  data () {
    return {
      workshops
    }
  }
}
</script>

<style lang="sass" scoped>
@import ~assets/css/base/helpers

h2
  margin: 60px 0 100px

.container__inner
  text-align: center
  z-index: 2

.workshops-button
  margin-top: 20px
</style>
