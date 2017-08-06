<template lang="pug">
  #app
    section.hero.is-mint
      .hero-body
        .container
          .columns.is-multiline.is-mobile
            .column.is-full-mobile.is-full-tablet.is-3-desktop
              h1.title To-do's
            .column.is-8-mobile.is-9-tablet.is-7-desktop.is-offset-1-mobile.is-offset-1-tablet.no-offset-desktop
              input(type="text").input
            .column.is-1-mobile.is-2-tablet.is-2-desktop
              button.button.is-primary.is-outlined.is-inverted Apply
    section.todo-list
      .columns.is-multiline.is-mobile
        .column.is-10-mobile.is-10-tablet.is-4-desktop.is-offset-1-mobile.is-offset-1-tablet.is-offset-todolist-desktop
          h2 Task
          table.table.task-list
            thead
            tfoot
            tbody
              tr(v-for="n in 10")
                td {{n}}
        .column.is-10-mobile.is-10-tablet.is-offset-1-mobile.is-offset-1-tablet.is-4-desktop
          h2 Completed
          table.table.completed-list
            thead
            tfoot
            tbody
              tr(v-for="n in 10")
                td {{n}}

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

.is-mint
  background-color: rgba(46, 211, 213, 1)
  box-shadow: 0px 2px 8px 1px #777

.hero-body
  padding: 3rem 0

.title
  color: #fff
  text-align: center

.input
  color: rgba(46, 211, 213, 1)
  font-weight: bold

.todo-list
  margin-top: 70px
  h2
    font-size: 35px
    font-weight: bold
  table
    width: 100%
    border-top: 4px solid #dbdbdb


+mobile
  .title
    font-size: 60px
+tablet
  .title
    font-size: 55px

+desktop
  .title
    text-align: right
  .no-offset-desktop
    margin-left: 0 !important
  .is-3-desktop
    width: 22.5% !important
  .column.is-offset-todolist-desktop
    margin-left: 9.83%

</style>
