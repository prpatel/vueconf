<template>
<div class="video__container">
    <div class="container__inner">
        <figure><iframe class="video" src="https://www.youtube.com/embed/7sXZVMD1XVY" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
            <figcaption>Author: Piotr Wiśniewski</figcaption>
        </figure>
    </div>
</div>
</template>


<script>
export default {
}
</script>
<style lang="sass">
@import ~assets/css/base/helpers

.video__container
    background: #000
    text-align: center
    padding: 20px 0
    margin-top: 40px
    position: relative

    figcaption
        display: block
        left: 0
        right: 0
        bottom: 0
        color: #666

.video
    margin: 0 auto
    display: block
    width: 100%

    @media #{$medium-up}
        height: 550px

</style>
