<template lang="pug">
div
  .hero.pt-10.pb-9.sm-pv-6.gradient-tb-d1-d2
    .container.md-p-6
      .row.wrap
        .col-8.sm-col-12
          h1.mb-7.bold.font-body.text-neutral-l-3 Stylish hand-crafted website designs for the modern age
          h4.mb-10.font-body.text-neutral-l-3
            | Don't choose between good and cheap - have both.
          //- h4.mb-4.font-body.text-neutral-l-3
          //-   | Incredibly fast load times ensuring people see your content
          //- h4.mb-4.font-body.text-neutral-l-3
          //-   | Unbeatable prices

          a.button.primary.large.m-2.ml-0 Why Grimoire?
          a.button.white.large.m-2 Pricing
        .col-4.sm-hidden
          OrbitingLogos

  .separator-container(style='overflow: hidden')
    .separator-double-diagonal-lr

  .container.md-p-6
    //- section
      .row
        .col
          .card.m-4
            h4.mb-4 Lorem ipsum dolor sit
            p.mb-3 Consectetur adipiscing elit. Fusce malesuada arcu metus, non semper dolor porttitor eu.
            p.mb-3 Integer elementum orci non feugiat facilisis. Nunc fringilla velit non odio aliquam bibendum. Nulla facilisi.
            p Sed sed enim ac est suscipit pharetra. Sed volutpat arcu sed pretium consectetur.
        .col
          .card.m-4
            h2 yo
        .col
          .card.m-4
            h2 yo
    section

      .row
        .col-7
          .line-height-large
            h1.section-header Free hosting&nbsp;
              span.underline.f9 for life
            h5.mb-6 Completely free and hassle-free hosting, entirely managed by us, for up to&nbsp;
              span.underline.slim.bold.font-6 100.000&nbsp;
              span.underline.slim.font-6 monthly visitors.
            h6 We will charge you the standard market rate for websites that go over the free limit, with no additional markup, starting at $10 per month.
        .col-5

  .separator-container
    .separator-double-diagonal-rl
  .bg-primary-d-2
    .container
      section
        .row
          .col-5.text-center.mr-6
            SVGDiamond.icon-diamond(width='372px' height='372px')
          .col-7
            .line-height-large
              h1.section-header.text-neutral-l-3 Lorem ipsum dolor sit amet
              h5.text-neutral-l-3.mb-6 Integer finibus nibh aliquet leo posuere ullamcorper. Orci varius natoque penatibus et magnis dis parturient montes
              h6.text-neutral-l-3 Sed sodales nunc vitae aliquet sagittis. Suspendisse elementum

  .separator-container
    .separator-double-diagonal-lr

</template>

<script>
import OrbitingLogos from '~/components/OrbitingLogos'
import SVGDiamond from '~/static/icons/diamond.svg'

export default {
  components: {
    OrbitingLogos,
    SVGDiamond
  }
}
</script>

<style lang="stylus">

.hero
  height 80vh

.icon-diamond .path-border
  fill c-primary-l-1

.section-header
  margin-bottom size-6

.separator-container
  overflow hidden

.separator-double-diagonal-lr
  line-height 0
  padding-bottom 160px
  position relative

  &:before,
  &:after
    content: ''
    display inline-block
    position absolute
    width 101%
    transform rotate(2deg)
    height 30px

  &:before
    height 173px
    top -105px
    z-index 1
    background-color c-primary-d-2

  &:after
    left -1px
    top 67px
    background-color c-primary

.separator-double-diagonal-rl
  line-height 0
  padding-bottom 160px
  position relative

  &:before,
  &:after
    content: ''
    display inline-block
    position absolute
    width 101%
    transform rotate(-2deg)
    height 30px

  &:before
    left -1px
    top 67px
    z-index 1
    background-color c-primary

  &:after
    height 173px
    top 95px
    background-color c-primary-d-2

</style>
