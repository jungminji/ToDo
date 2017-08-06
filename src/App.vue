<template lang="pug">
  #app
    section.hero.is-mint
      .hero-body
        .container
          .columns.is-multiline.is-mobile
            .column.is-full-mobile.is-full-tablet.is-3-desktop.todo-title-pad-fix.todo-3-desktop
              h1.title.todo-title To-do's
            .column.is-8-mobile.is-9-tablet.is-7-desktop.is-offset-1-mobile.todo-input-pad-fix.is-offset-todolist-mobile.todolist-input-offset.todo-no-offset-desktop
              input(type="text").input.todo-input
            .column.is-1-mobile.is-2-tablet.is-2-desktop.todo-btn-pad-fix
              button.button.is-primary.is-outlined.is-inverted.todo-apply-btn Apply
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
@import url('https://fonts.googleapis.com/css?family=Noto+Sans')
@import '../node_modules/bulma/bulma.sass'
@import './assets/sass/mobile'
@import './assets/sass/tablet'
@import './assets/sass/desktop'

*
  font-family: 'Noto Sans', sans-serif

.is-mint
  background-color: #2ed3d5
  box-shadow: 0 5px 10px 0 rgba(109, 103, 103, 0.5)



// Header items
.title
  color: #fff

.todo-input
  color: rgba(46, 211, 213, 1)


// List : Check later
.todo-list
  margin-top: 70px
  h2
    font-size: 35px
    font-weight: bold
  table
    width: 100%
    border-top: 4px solid #dbdbdb

</style>
