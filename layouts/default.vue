<template lang="pug">
  div
    Navbar(title='grimoire')
      li.is-active
        nuxt-link(to='/about') About us
      li
        a(id='colors') Colors
      li
        a(id='forms') Forms

    nuxt
</template>

<script>

export default {
}
</script>

<style lang="stylus">
@require '../assets/spellbook.styl'
</style>
