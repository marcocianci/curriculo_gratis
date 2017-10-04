<template lang="pug">
// Form get the data info person
form#curriculo.template(action="")
  fieldset
    legend.animate_intro(contenteditable="true") Dados pessoais
    ul(v-if='posts && posts.length')
      li(v-for='post of posts')
        p
          strong {{post.title}}
        p {{post.body}}
    ul(v-if='errors && errors.length')
      li(v-for='error of errors') {{error.message}}

      ul(is='transition-group')
        li(v-for='user in users' class='user' :key="user['.key']")
          span
            | {{user.name}}
            | -
            | {{user.email}}
          button(v-on:click='removeUser(user)') X

      form(id='form' v-on:submit.prevent='addUser')
        input(type='text' v-model='newUser.name' placeholder='Username')
        input(type='email' v-model='newUser.email' placeholder='email@email.com')
        input(type='submit' value='Add User')
      ul(class='errors')
        li(v-show='!validation.name') Name cannot be empty
        li(v-show='!validation.email') Please provide a valid email address
</template>

<script>
  import axios from 'axios'
  import firebase from 'firebase'

  let config = {
    piKey: 'AIzaSyB7iNBsdHCprT5C94-_QVNsqe8G67vt6iA',
    authDomain: 'curriculo-gratis.firebaseapp.com',
    databaseURL: 'https://curriculo-gratis.firebaseio.com',
    projectId: 'curriculo-gratis',
    storageBucket: 'curriculo-gratis.appspot.com',
    messagingSenderId: '1061542615682'
  }

  firebase.initializeApp(config)
  let db = firebase.database()

  let booksRef = db.ref('books')

  console.log(booksRef)

  let usersRef = db.ref('users')

  const HTTP = axios.create({
    baseURL: `https://curriculo-gratis.firebaseio.com/`,
    headers: {
      Authorization: 'Bearer {token}'
    }
  })

  export default {
    name: 'form-curriculo-new',
    data: () => ({
      posts: [],
      errors: [],
      newUser: {
        name: '',
        email: ''
      }
    }),
    firebase: {
      users: usersRef
    },
    created () {
      HTTP.get(`posts`)
      .then(response => {
        let vm = this
        vm.posts = response.data
        console.log(vm.posts)
      })
      .catch(e => {
        let vm = this
        vm.errors.push(e)
        console.log(e)
      })
    },
    computed: {
      validation: function () {
        return {
          name: !!this.newUser.name.trim(),
          email: !!this.newUser.email.trim()
        }
      },
      isValid: function () {
        var validation = this.validation
        return Object.keys(validation).every(function (key) {
          return validation[key]
        })
      }
    },
    methods: {
      addUser: function () {
        if (this.isValid) {
          usersRef.push(this.newUser)
          this.newUser.name = ''
          this.newUser.email = ''
        }
      },
      removeUser: function (user) {
        usersRef.child(user['.key']).remove()
      }
    }
  }
</script>
