<template lang="pug">
.container
  .container__inner.post-section
    h1.agenda__header Conference program
    p.subheader__description
      strong DAY 0 - WORKSHOP DAY (March 26) 9:00 – 18:00
      br
      strong 4th Floor, Bayside room
    .agenda
      event(
        v-for="event of eventsDay0",
        :event="event",
        key="index"
      )
    p.subheader__description
      strong DAY 1 (March 27) 9:00 – 18:00
      br
      strong 3rd Floor, Napoleon Ballroom
      br
      | The schedule is subject to change
    .agenda
      event(
        v-for="event of eventsDay1",
        :event="event",
        key="index"
      )
    p.subheader__description
      strong DAY 2 (March 28) 9:00 – 18:00
      br
      strong 3rd Floor, Napoleon Ballroom
    .agenda
      event(
        v-for="event of eventsDay2",
        :event="event",
        key="index"
      )
</template>

<script>
import Event from '../components/Event'
import eventsDay0 from '../content/scheduleDay0.json'
import eventsDay1 from '../content/scheduleDay1.json'
import eventsDay2 from '../content/scheduleDay2.json'
export default {
  head: {
    title: 'VueConf US 2018 | Talks'
  },
  components: { Event },
  data () {
    return {
        eventsDay0: eventsDay0,
        eventsDay1: eventsDay1,
        eventsDay2: eventsDay2

    }
  }
}
</script>

<style lang="sass" scoped>
@import ~assets/css/base/helpers

.agenda__header
  margin-bottom: 20px

.subheader__description
  margin: 80px 0

.agenda
  position: relative

</style>
