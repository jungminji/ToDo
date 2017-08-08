<template lang="pug">
  #app(v-cloak)
    section.hero.is-mint
      .hero-body
        .container
          .columns.is-multiline.is-mobile
            .column.is-full-mobile.is-full-tablet.is-3-desktop.todo-title-padding.todo-title-width-desktop
              h1.title.todo-title To-do's
            .column.is-8-mobile.is-9-tablet.is-7-desktop.is-offset-1-mobile.todo-input-padding-mobile.todo-input-offset-desktop.todo-input-offset-tablet.todo-title-no-offset-desktop
              input(type="text" :value="userInput" @input="inputChange" @keyup.enter="addUserInput").input.todo-input
            .column.is-1-mobile.is-2-tablet.is-2-desktop.todo-btn-padding
              button(@click="addUserInput").button.is-primary.is-outlined.is-inverted.todo-apply-btn Apply
    section.todo-list
      .columns.is-multiline.is-mobile
        .column.is-10-mobile.is-10-tablet.is-4-desktop.todolist-offset
          h2 Task
          table.table.task-list
            thead
            tfoot
            tbody
              tr(v-for="(item, index) in getTask")
                td {{ item.content }}
        .column.is-10-mobile.is-10-tablet.is-offset-1-mobile.is-offset-1-tablet.is-4-desktop
          h2 Completed
          table.table.completed-list
            thead
            tfoot
            tbody
              tr(v-for="(item, index) in getCompleted")
                td {{ item.content }}
    footer.footer
      p Special thanks to MK, Moon for designing my ugly todolist.
</template>

<script>
import firebase from 'firebase'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'app',
  data () {
    return {
      userInput: ''
    }
  },
  created () {
    // Truncate store task, completed list
    this.truncateList()
    // When page is loaded, get all task and completed list from firebase
    this.getListFromFirebase()
  },
  methods: {
    ...mapActions([
      'truncateList',
      'addTask',
      'addCompleted'
    ]),
    getListFromFirebase () {
      firebase.database().ref("todolist/").once("value")
        .then( (response) => {
          response.forEach( (item) => {
            if(item.val().completed) {
              this.addCompleted({
                content: item.val().content,
                completed: item.val().completed,
                key: item.key
              })
            } else {
              this.addTask({
                content: item.val().content,
                completed: item.val().completed,
                key: item.key
              })
            }
          })
        })
    },
    inputChange (event) {
      // set userInput data from user input simultaneously
      this.userInput = event.target.value
    },
    addUserInput () {
      // Add task to firebase database
      let k = firebase.database().ref("todolist/").push({
        content: this.userInput,
        completed: false
      }).key
      // Add task to store
      this.addTask({
        content: this.userInput,
        completed: false,
        key: k
      })
      // Reset input field
      document.querySelector('.todo-input').value = ''
    }
  },
  computed: {
    ...mapGetters([
      'getTask',
      'getCompleted'
    ])
  }
}
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css?family=Noto+Sans')
@import '../node_modules/bulma/bulma.sass'
@import './assets/sass/mobile'
@import './assets/sass/tablet'
@import './assets/sass/desktop'


$primaryColor: #2ED3D5

*
  font-family: 'Noto Sans', sans-serif

.is-mint
  background-color: $primaryColor
  box-shadow: 0 5px 10px 0 rgba(109, 103, 103, 0.5)



// Header items
.title
  color: #fff

.todo-input
  color: $primaryColor
  &:focus
    border-color: #ff3860

.footer
  color: $primaryColor

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
