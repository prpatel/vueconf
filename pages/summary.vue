<template>
    <div class="container">
        <div class="section desc-section">
            <div class="container__inner post-section"></div>
        </div>
        <photo-slider :photos="photos" :autoPlayDuration="10000"></photo-slider>
        <div class="section videos-section">
            <div class="container__inner post-section">
                <h2>Talks</h2>
                <video-player :talks="talks"></video-player><a class="button youtube" href="https://www.youtube.com/channel/UC9dJjbYeXjirDYYVfUD3bSw">See on YouTube</a></div>
        </div>
    </div>
</template>
<script>
import PhotoSlider from '../components/PhotoSlider'
import VideoPlayer from '../components/VideoPlayer'

import talkVideos from '../content/talkVideos.js'

const s3Base = 'https://vueconf.s3.amazonaws.com'

const workshopPhotos = [...Array(19).keys()].map(index => ({
  url: `${s3Base}/workshops/workshop${index+1}.jpg`,
  thumbnail: `${s3Base}/workshops/workshop_min${index+1}.jpg`
}))

const vueconfPhotos = [...Array(159).keys()].map(index => ({
  url: `${s3Base}/vueconf-2017/img${index+1}.jpg`,
  thumbnail: `${s3Base}/vueconf-2017/img_min${index+1}.jpg`
}))

export default {
  components: {
    PhotoSlider,
    VideoPlayer,
  },
  data() {
    return {
      photos: [ ...vueconfPhotos, ...workshopPhotos ],
      talks: talkVideos,
    }
  },
  head: {
    title: 'VueConf US 2018 | Summary'
  },
}
</script>


<style lang="sass" scoped>
@import ~assets/css/base/helpers

h1
    margin-bottom: 64px

.desc-section
    padding-top: 0

.videos-section
    background-color: $color-blue
    margin-bottom: -80px
    padding-top: 10px

    h2, p
        color: white


    .youtube
        font-size: 12pt
        margin-top: 48px
</style>
