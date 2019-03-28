<template lang="pug">
.orbit-container
  .orbit-center
    SVGMobile.orbit-icon-1
    SVGChat.orbit-icon-2
    SVGSeo.orbit-icon-3
    SVGShare.orbit-icon-4
    SVGInternet.orbit-icon-5
    SVGCloud.orbit-icon-6
</template>

<script>
import SVGMobile from '~/static/icons/mobile.svg'
import SVGChat from '~/static/icons/chat.svg'
import SVGSeo from '~/static/icons/seo.svg'
import SVGInternet from '~/static/icons/internet.svg'
import SVGCloud from '~/static/icons/cloud.svg'
import SVGShare from '~/static/icons/share.svg'

export default {
  components: {
    SVGMobile,
    SVGChat,
    SVGSeo,
    SVGInternet,
    SVGCloud,
    SVGShare
  }
}
</script>

<style lang="stylus">
@keyframes spin-right
  100%
    transform rotate(360deg)
@keyframes spin-left
  100%
    transform rotate(-360deg)

orbit-spin-time = 20s

.orbit-container
  position relative
  width 500px
  height 500px
  border: 4px c-primary-d-3 dashed
  border-radius: 100%

  .orbit-icon-1
    left: 33%;
    top: 93%;
    // width: 73px
    // height: 73px

  .orbit-icon-2
    left: 90%;
    top: 24%;
    // width: 62px
    // height: 62px

  .orbit-icon-3
    left: -3%;
    top: 62%;
    // width: 83px
    // height: 83px

  .orbit-icon-4
    left: 50%;
    top: -6%;
    // width: 53px
    // height: 53px

  .orbit-icon-5
    left: 79%;
    top: 78%;
    // width: 93px
    // height: 93px

  .orbit-icon-6
    left: 4%;
    top: 12%;
    // width: 69px
    // height: 69px

.orbit-center
  position absolute
  width 100%
  height 100%
  animation spin-right orbit-spin-time linear infinite

.orbit-container svg
  width 72px
  height 72px
  z-index 999
  position absolute

  left 50%
  top -32px
  animation spin-left orbit-spin-time linear infinite
  transition width 0.2s, height 0.2s

  &:hover
    width: 92px
    height: 92px

  .path-content
    fill c-primary
  .path-border
    fill c-primary-l-1
</style>
