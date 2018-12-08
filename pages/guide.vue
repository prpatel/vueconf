<template>
<div>
    <div class="container">
        <div class="section post-section">
            <h1 class="header">Conference guide</h1>
            <p class="subheader__description"><strong>All the information about the event, accommodation, and Wrocław in one place.</strong></p>
        </div>
        <div class="container__inner">
            <div class="content">
                <div class="half half--left"><img class="venue-image" src="~assets/img/knh-front.jpg" alt="New Horizons Cinema, Wrocław" /></div>
                <div class="half text-left">
                    <h2>The Venue:<br/><strong>New Horizons Cinema</strong></h2>
                    <p>The conference part (June 22–23) will take place in the<strong> New Horizons Cinema</strong>, the largest art-cinema in Poland.</p>
                    <p><strong>Address:</strong><br/>Kazimierza Wielkiego 19a-21<br/>50-077 Wrocław,<br/>Poland</p><a class="button button--dark" href="https://goo.gl/maps/wDdmhQGQb9N2" target="_BLANK">SEE THE MAP</a></div>
            </div>
        </div>
        <div class="container__inner">
            <div class="content">
                <div class="half text-left">
                    <h2><strong>The location</strong></h2>
                    <p>It was one of the most important criteria for picking the venue – just next to the city centre and old town. This means it’s a perfect opportunity for all the attendees to explore Wrocław, one of the most beautiful cities in Poland.</p>
                    <p>Secondly, there are multiple hotels and hostels nearby, meaning no need to use the public transportation to reach the venue and back, as well as tons of restaurants and pubs to go after the conference.</p>
                </div>
                <div class="half half--right"><img src="~assets/img/knh-inner.jpg" alt="New Horizons Cinema, Wrocław" /></div>
            </div>
        </div>
        <div class="container__inner">
            <h2><strong>Why Wrocław?</strong></h2>
            <p>We chose Wroclaw as the venue for VueConf because the city has a well-developed IT sector - the best in Poland. Due to its uniqueness, it became the European Capital of Culture in 2016. Wroclaw itself is a magical, picturesque place with a
                long history and has about 100 bridges.</p>
            <p>To break the hard set schedule, plan a few extra days after the conference and explore the city, visit various nightclubs and taste Polish cuisine - there are plenty of restaurants to choose from. There are also many options for walking tours:
                search for famous dwarves (small figures spread around the city), follow fantastic murals or taste a diverse array of beer brands. Meet Wroclaw before you leave!</p>
        </div>
        <wroclaw-video></wroclaw-video>
        <div class="container__inner">
            <h2><strong>Hotel recommendations</strong></h2>
            <p>Here you can find helpful info that will make your stay in Wroclaw easier and more entertaining. We chose several places and attractions that are certainly worth your attention. Check out these special conference discounts and extras:
            </p>
            <attraction v-for="hotel of hotels" :attraction="hotel" :key="hotel.title"></attraction>
            <h2><strong>Restaurant recommendations</strong></h2>
            <p>A list of our favorite places to eat and drink. Show your VueConf badge and get special discounts!
            </p>
            <attraction v-for="restaurant of restaurants" :attraction="restaurant" :key="restaurant.title"></attraction>
            <h2><strong>Good to know</strong></h2>
            <p>A bit more key information to make your stay comfortable!
            </p>
            <hint v-for="hint of hints" :hint="hint" :key="hint.title"></hint>
            <h2><strong>Attractions</strong></h2>
            <p>Wrocław is full of beautiful and interesting places you must see being here. We created a short list of the most important ones to help you plan your trip around this astonishing city!
            </p>
            <attraction v-for="sight of sights" :attraction="sight" :key="sight.title"></attraction>
        </div>
    </div>
</div>
</template>


<script>
import VenueSection from '@/components/Venue'
import WroclawVideo from '@/components/WroclawVideo'
import Attraction from '@/components/Attraction'
import Hint from '@/components/Hint'
import hotels from '~/content/hotels'
import restaurants from '~/content/restaurants'
import hints from '~/content/hints'
import sights from '~/content/sights'

export default {
  components: {
    VenueSection,
    WroclawVideo,
    Attraction,
    Hint
  },
  head: {
    title: 'VueConf US 2018 | Guide'
  },
  data () {
    return {
      hotels,
      restaurants,
      hints,
      sights
    }
  }
}
</script>


<style lang="sass" scoped>
@import ~assets/css/base/helpers
.container__inner
    position: relative

    @media #{$medium-up}
        padding-top: 100px
        padding-bottom: 100px

    .venue-image
        max-height: 540px

    .half
        display: inline-block
        max-width: 100%
        vertical-align: top
        text-align: left
        position: relative
        margin-bottom: 20px
        padding: 0 20px

        img
            max-width: 100%

            @media #{$medium-up}
                max-width: none
                right: 20px
                position: absolute

        @media #{$medium-up}
            width: 100%
            max-width: calc(50% - 40px)

    .half--right
        img
            @media #{$medium-up}
                left: 20px

    .button
        margin-top: 20px
        font-weight: 400
        font-size: 16px

    .more-info
        margin-top: 60px
        text-align: center
</style>
