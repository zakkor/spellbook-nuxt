<template lang="pug">
.footer
  .container
    .row
      .col.sm-col-6
        h4 Products
        ul
          li
            a(href='/gb/pricing') Pricing
          li.long-link
            a(href='/works-with') Works with Stripe
          li
            a(href='/global') Global
          li
            a(href='/guides') Guides
      .col
        h4 Developers
        ul
          li
            a(href='/docs') Documentation
          li
            a(href='/docs/api') API reference
          li
            a(href='https://status.stripe.com') API status
          li
            a(href='/open-source') Open source
      .col
        h4 Company
        ul
          li
            a(href='/about') About
          li
            a(href='/gb/customers') Customers
          li
            a(href='/partner-program') Partner Program
          li
            a(href='/jobs') Jobs
          li
            a(href='/blog') Blog
          li
            a(href='/newsroom') Newsroom
          li
            a(href='/environment') Environment
      .col
        h4 Resources
        ul
          li
            a(href='https://support.stripe.com') Support
          li
            a(href='/contact') Contact
          li
            a(href='/gb/privacy') Privacy & terms
          li
            a(href='/sitemap') Sitemap
</template>
<style lang="stylus">
.footer
  background-color c-neutral-l-3
  // background linear-gradient(180deg, c-neutral-l-3 0%, c-primary-l-1 100%)
  padding-top size-6
  padding-bottom size-6
  border-top 1px solid c-neutral-l-2
  // background-color c-primary-l-2

  h4
    text-transform uppercase
    font-weight bold
    font-size font-4
    margin-bottom size-3
    color c-neutral-d-1
  a
    font-weight 400
    text-decoration none
    font-size font-3
    color c-neutral-d-1
</style>
