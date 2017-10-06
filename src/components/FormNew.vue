<template lang="pug">
// Form get the data info person
form#curriculo.template(action="")
  fieldset
    legend.animate_intro(contenteditable="true") Dados pessoais
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

  const HTTP = axios.create({
    baseURL: config.databaseURL
  })

  export default {
    name: 'form-curriculo-new',
    data: () => ({
      posts: [],
      errors: []
    }),
    created () {
      HTTP.get(`posts.json`)
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
    }
  }
</script>
