<template lang="pug">
  #app
    section.hero.is-primary
      .hero-body
        .container
          .columns.is-multiline.is-mobile
            .column.is-full-mobile.is-full-tablet.is-3-desktop
              h1.title To-do's
            .column.is-8-mobile.is-9-tablet.is-7-desktop.is-offset-1-mobile.is-offset-1-tablet.no-offset-desktop
              input(type="text").input
            .column.is-1-mobile.is-2-tablet.is-2-desktop
              button.button.is-primary.is-outlined.is-inverted Apply

</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="sass">
@import '../node_modules/bulma/bulma.sass'

.hero-body
  padding: 3rem 0

.title
  text-align: center

+desktop
  .title
    text-align: right
  .no-offset-desktop
    margin-left: 0 !important
  .is-3-desktop
    width: 22.5% !important

</style>
