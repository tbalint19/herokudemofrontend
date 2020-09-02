var app = new Vue({
  el: '#app',
  data: {
    username: "",
    greeting: ""
  },
  methods: {
    sendUsername: function() {
      fetch(`${backendUrl}/hello`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: this.username})
        }
      ).then(response => response.json())
      .then(data => this.greeting = data.greeting)
    }
  }
})
