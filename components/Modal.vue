<template>
<transition name="modal">
    <div class="modal-mask">
        <div class="modal-wrapper" @click.self="$emit('close')">
            <div class="modal-container">
                <div class="modal-header">
                    <slot name="header"></slot>
                </div>
                <div class="modal-body">
                    <slot name="body"></slot>
                </div>
                <div class="modal-footer">
                    <slot name="footer"></slot>
                </div>
            </div><button class="button-secondary modal-button" @click="$emit('close')">Close</button></div>
    </div>
</transition>
</template>


<script>
export default {
  mounted () {
    document.body.style = 'overflow: hidden'
  },
  beforeDestroy () {
    document.body.style = ''
  }
}
</script>

<style lang="sass" scoped>
@import ~assets/css/base/helpers

.modal-mask
  position: fixed
  z-index: 9998
  top: 0
  left: 0
  width: 100%
  height: 100%
  background-color: rgba(#000, 0.3)
  display: table
  transition: opacity .3s ease

.modal-wrapper
  display: table-cell
  vertical-align: middle

.modal-container
  max-width: 650px
  position: relative
  width: 100%
  max-height: 72vh
  overflow: auto
  box-sizing: border-box
  margin: 40px auto 0
  padding: 20px 20px 0
  background-color: #fff
  border-radius: 5px
  box-shadow: 0 18px 35px rgba(50,50,93,.1), 0 8px 15px rgba(0,0,0,.07)
  transition: all .3s ease

  @media #{$medium-up}
    padding: 40px 40px 0

.modal-body
  padding-bottom: 20px

  @media #{$medium-up}
    padding-bottom: 40px

.modal-footer
  text-align: right

.modal-header h3
  margin-top: 0
  color: #42b983

.modal-enter
  opacity: 0

.modal-leave-active
  opacity: 0

.modal-enter .modal-container,
.modal-leave-active .modal-container
  transform: scale(1.1)

.modal-button
  background: #fff
  padding: 20px
  margin: 0 auto
  display: block
  box-shadow: 0 18px 35px rgba(50,50,93,.1), 0 8px 15px rgba(0,0,0,.07)
  border-bottom-left-radius: 5px
  border-bottom-right-radius: 5px
</style>
