<template lang="pug">
.speaker__container
  modal(v-if="modalVisible", @close="modalVisible = false")
    div(slot="body")
      .speaker__large
        img.speaker__image(:src="image", :alt="speaker.name")
        .speaker__aside
          .speaker__title
            | {{ speaker.name }}
          .speaker__sessionTitle
            | {{ speaker.sessionTitle }}
          .speaker__sessionAbstract
            | {{ speaker.sessionAbstract}}
          .speaker__social
          //  a.icon.icon--github(v-if="speaker.github", :href="speaker.github" target="_blank")
            a.icon.icon--twitter(v-if="speaker.twitter", :href="speaker.twitter" target="_blank")
      .speaker__bio
        | {{ speaker.title}}
    blockquote.speaker__quote(v-if="speaker.quote")
          | {{ speaker.quote }}
          cite {{ speaker.name }}
  .speaker(@click="showDetails")
    img.speaker__image(:src="image", :alt="speaker.name")
    .speaker__aside
      .speaker__details
        .speaker__description
          .speaker__title
            | {{ speaker.name }}
          .speaker__subtitle
            | {{ speaker.sessionTitle }}
        .speaker__links
          .speaker__social
            a.icon.icon--gitlab(@click.stop="", v-if="speaker.gitlab", :href="speaker.gitlab" target="_blank")
            a.icon.icon--github(@click.stop="", v-if="speaker.github", :href="speaker.github" target="_blank")
            a.icon.icon--twitter(@click.stop="", v-if="speaker.twitter", :href="speaker.twitter" target="_blank")
          button.button-secondary(@click.stop="showDetails") Learn more
</template>

<script>
import Modal from './Modal'

export default {
  components: { Modal },
  props: {
    speaker: {
      type: Object,
      required: true
    },
    adjustImgUrl: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      modalVisible: false
    }
  },
  methods: {
    showDetails () {
      if (this.speaker.link) {
        this.$router.push(`/workshops?focus=${this.speaker.link}`)
        return
      }
      this.modalVisible = true
      // ga('send', 'event', {
      //   eventAction: 'click',
      //   eventCategory: `Speaker details ${this.speaker.name}`
      // })
    }
  },
  computed: {
    image () {
      return this.adjustImgUrl
        ? `/../${this.speaker.img}`
        : this.speaker.img
    }
  }
}
</script>

<style lang="sass">
@import ~assets/css/base/helpers
@import ~assets/css/components/card

.speaker__container
  width: calc(100% - 20px)
  display: inline-block
  margin: 10px
  position: relative
  text-align: left

  @media #{$medium-up}
    width: calc(50% - 20px)

.speaker
  display: flex
  width: 100%
  height: 130px
  @include card

.speaker__image
  height: 100%
  display: inline-block
  padding: 0
  vertical-align: top
  margin-right: 20px
  border-radius: 5px
  border-top-right-radius: 0
  border-bottom-right-radius: 0

  @media #{$medium-up}
    max-width: 140px

.speaker__aside
  vertical-align: top
  max-width: calc(100% - 120px)

  @media #{$medium-up}
    max-width: calc(100% - 160px)

.speaker__details
  display: flex
  flex-direction: column
  justify-content: space-between
  height: 100%

.speaker__title
  margin-top: 12px
  font-size: 14px
  letter-spacing: 0.8px
  font-weight: 600
  color: $color-text
  text-transform: uppercase

  @media #{$medium-up}
    font-size: 18px

.speaker__sessionTitle
  font-size: 20px
  font-weight: 300
  color: #495669
  word-break: break-words
  white-space: pre-line
  margin-bottom: 10px
  margin-top: 10px

  .speaker__sessionAbstract
    font-size: 12px
    font-weight: 300
    color: #495669
    word-break: break-words
    white-space: pre-line
    margin-bottom: 30px
    margin-top: 10px

.speaker__subtitle
  font-size: 12px
  font-weight: 300
  color: #8795a9
  word-break: break-words
  white-space: pre-line

  @media #{$medium-up}
    font-size: 16px

.speaker__large
  .speaker__aside
    max-width: calc(100% - 160px)

    @media #{$medium-up}
      max-width: calc(100% - 260px)

  .speaker__image
    max-width: 140px
    border-top-right-radius: 5px
    border-bottom-right-radius: 5px

    @media #{$medium-up}
      max-width: 240px

  .speaker__title
    font-size: 28px
    text-transform: none

  .speaker__subtitle
    font-size: 18px

.speaker__bio,
.speaker__quote
  margin-top: 20px
  font-size: 16px
  font-weight: 300
  color: #495669

  @media #{$medium-up}
    font-size: 18px

.speaker__quote
  margin: 20px 0 0 0
  font-style: italic

  cite
    display: block
    margin-top: 10px

    &:before
      content: "— "

.speaker__links
  display: flex
  margin-bottom: 12px
  .speaker__social
    margin-top: 0
  .button-secondary
    position: static
    line-height: 22px

.speaker__social
  margin-top: 4px

  @media #{$medium-up}
    margin-top: 10px

  .icon--twitter
    margin-left: 10px

  .icon:first-child
    margin-left: 0

.speaker
  .button-secondary
    position: absolute
    right: 10px

  .button-secondary
    display: none

    @media #{$medium-up}
      display: inline-block

.button-secondary
  background: none
  border: none
  text-transform: uppercase
  padding: 00px
  line-height: 15px
  font-size: 15px
  font-weight: 400
  color: $color-link
  letter-spacing: 0.8px

  &:hover
    background: #f8f8f8
</style>
