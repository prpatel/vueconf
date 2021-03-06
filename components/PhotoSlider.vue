<template>
<div class="photo-slider-section" @keyup.right="nextPhoto">
    <div class="buttons-section" v-if="!listOpen">
        <div class="auto-play-button button" @click="toggleAutoPlay"><img :src="icon" /></div>
        <div class="show-list-button button" @click="openList">
            <div>Show all photos</div>
        </div>
    </div>
    <div class="navigation">
        <div class="button-wrap">
            <div class="left button" @click="prevPhoto"><img :src="playIcon" /></div>
        </div>
        <div class="button-wrap">
            <div class="right button" @click="nextPhoto"><img :src="playIcon" /></div>
        </div>
    </div>
    <div class="main-photo-section">
        <transition name="main-photo" :class="{'blur': listOpen}">
            <main-photo class="main-photo" :blur="listOpen" :photo="selectedPhoto" :key="selectedPhoto.url"></main-photo>
        </transition>
    </div>
    <transition name="photo-list">
        <photo-list v-show="listOpen" :selectedPhoto="selectedPhoto" @photo:selected="handlePhotoSelected" :photos="photos"></photo-list>
    </transition>
</div>
</template>
<script>

import MainPhoto from './MainPhoto'
import PhotoList from './PhotoList'

import playIcon from '../assets/img/media-play.svg'
import pauseIcon from '../assets/img/media-pause.svg'


export default {
  components: {
    MainPhoto,
    PhotoList,
  },
  props: {
    photos: {
      type: Array,
      required: true,
    },
    autoPlayDuration: {
      type: Number,
      required: false
    }
  },
  data() {
    return {
      listOpen: false,
      autoPlay: false,
      selectedPhoto: this.photos[0],
      autoPlayTimeout: 0,
      playIcon,
    }
  },
  computed: {
    icon() {
      return this.autoPlay ? pauseIcon : playIcon
    }
  },
  mounted() {
    this.startAutoPlay()
    window.addEventListener('keyup', (ev) => {
      if(ev.key === 'ArrowRight') {
        this.nextPhoto()
        this.stopAutoPlay()
      } else if (ev.key === 'ArrowLeft') {
        this.prevPhoto()
        this.stopAutoPlay()
      }
    })
  },
  beforeDestroy() {
    this.stopAutoPlay()
  },
  methods: {
    openList() {
      this.listOpen = true
    },
    closeList() {
      this.listOpen = false
    },
    toggleAutoPlay() {
      if(this.autoPlay) {
        this.stopAutoPlay()
      } else {
        this.startAutoPlay()
      }
    },
    startAutoPlay() {
      this.autoPlay = true
      const autoNext = () => {
        this.nextPhoto()
        this.autoPlayTimeout = setTimeout(autoNext, this.autoPlayDuration || 5000)
      }
      autoNext()
    },
    stopAutoPlay() {
      this.autoPlay = false
      clearTimeout(this.autoPlayTimeout)
    },
    handlePhotoSelected(photo) {
      this.stopAutoPlay()
      this.closeList()
      this.selectedPhoto = photo
    },
    nextPhoto() {
      const index = this.photos.indexOf(this.selectedPhoto)
      const nextIndex = (index === this.photos.length-1) ? 0 : index + 1
      this.selectedPhoto = this.photos[nextIndex]
    },
    prevPhoto() {
      const index = this.photos.indexOf(this.selectedPhoto);
      const prevIndex = (index === 0) ? this.photos.length-1 : index - 1
      this.selectedPhoto = this.photos[prevIndex]
    }
  }
}
</script>
<style lang="sass" scoped>
.photo-slider-section
    position: relative
    height: calc(100vh * 0.8)
    overflow: hidden
    background-color: black

    .main-photo-section
        transition: filter 0.2s ease
        filter: blur(0px)
        backface-visibility: hidden
        transform: translateZ(0)
        perspective: 1000

        &.blur
            filter: blur(5px)

    .main-photo
        position: absolute
        width: 100%
        height: 100%
        top: 0
        left: 0

    .buttons-section
        position: absolute
        right: 0
        bottom: 0
        padding: 32px
        color: white
        opacity: 0.7
        transition: opacity 0.2s ease
        z-index: 2

        &:hover
            opacity: 1

    .show-list-button
        font-size: 10pt

    .auto-play-button
        height: 36px
        width: 36px
        padding: 0
        margin-right: 12px
        display: inline-flex
        justify-content: center
        align-items: center

        img
            padding-left: 2px

    .navigation
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
        display: flex
        flex-direction: row
        justify-content: space-between
        z-index: 1
        pointer-events: none

        .button-wrap
            width: 100px
            height: 100%
            display: flex
            justify-content: center
            align-items: center
            opacity: 0.7
            transition: opacity 0.2s ease
            pointer-events: auto

            &:hover
                opacity: 1

        .button
            margin: 0 32px
            width: 36px
            height: 36px
            padding: 0
            display: flex
            justify-content: center
            align-items: center

            img
                padding-left: 2px

            &.left
                img
                    padding-bottom: 4px
                    transform: rotate(180deg)


    .photo-list-enter, .photo-list-leave-to
        opacity: 0
        transform: scale(1.2)

    .photo-list-enter-to, .photo-list-leave
        opacity: 1
        transform: scale(1)

    .photo-list-enter-active, .photo-list-leave-active
        transition: opacity 0.2s ease, transform 0.2s ease

    .main-photo-enter
        opacity: 0
        transform: scale(0.95)

    .main-photo-enter-to, .main-photo-leave
        opacity: 1
        transform: scale(1)

    .main-photo-leave-to
        opacity: 0
        transform: scale(1.05)

    .main-photo-enter-active, .main-photo-leave-active
        transition: opacity 1s ease, transform 1s ease


</style>
