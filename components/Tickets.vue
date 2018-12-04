<template lang="pug">
.section.ticket-section
  .container__inner
    .nav-target#tickets
    h1 Tickets

    p
      | Regular price tickets available until January 15
    .ticket(v-for="ticket2 in tickets2")
      span
        span.ticket__name {{ ticket2.name }}
        span.ticket__date {{ ticket2.date }}
      .ticket__price
        a.button.button--dark(

          href="https://tickets.connectevents.io/events/vueconf2019/",
          @click="trackTicketsEvent"
        )
          | {{ ticket2.price }}

</template>

<script>
import tickets from '../content/tickets'
import tickets2 from '../content/tickets2'
import tickets3 from '../content/tickets3'

export default {
  data () {
    return {
      tickets: tickets,
        tickets2: tickets2,
        tickets3: tickets3,
    }
  },
  methods: {
    trackTicketsEvent (event) {
      // ga('send', 'event', {
      //   eventAction: 'click',
      //   eventLabel: event.target.href,
      //   eventCategory: 'Tickets link',
      //   transport: 'beacon'
      // })
      // _pq.push(['track', 'GoToTickets'])
      // fbq('trackCustom', 'GoToTickets', { source: 'Main page' });
    }
  }
}
</script>

<style lang="sass" scoped>
@import ~assets/css/base/helpers

.ticket-section
  background-color: $color-green--dark
  text-align: center

  h1, p
    color: #fff
    margin-top: 0
    margin-bottom: 30px

  p
    font-size: 24px
    margin-bottom: 40px

.button[disabled]
  background: #8c9caf
  pointer-events: none

.ticket
  margin: 0 auto
  text-align: left
  max-width: 700px
  background: #fff
  margin-bottom: 20px
  border-radius: 5px
  padding: 15px
  text-align: center

  @media #{$medium-up}
    text-align: left
    padding: 7px 7px 7px 40px
    border-radius: 50px
    display: flex
    justify-content: space-between

    .button--dark
      margin-top: 0
.ticket--disabled
  margin: 0 auto
  text-align: left
  max-width: 700px
  background: #000
  margin-bottom: 20px
  border-radius: 5px
  padding: 15px
  text-align: center

  @media #{$medium-up}
    text-align: left
    padding: 7px 7px 7px 40px
    border-radius: 50px
    display: flex
    justify-content: space-between

    .button--dark
      margin-top: 0

.ticket__name
  padding-right: 20px
  line-height: 43px
  font-size: 22px
  display: inline-block
  vertical-align: middle

.tickets__info
  color: #fff
  margin-top: 10px
  font-weight: 300

.ticket__date
  color: #bbb
  line-height: 43px
  font-size: 18px
  max-width: 250px
  display: inline-block
  line-height: 1
  vertical-align: middle

.ticket__price
  display: block
  font-size: 22px
  vertical-align: middle

  @media #{$medium-up}
    display: inline-block

.button--dark
  font-size: 18px
  line-height: 22px
  margin-top: 10px
</style>
