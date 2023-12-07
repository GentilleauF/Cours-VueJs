

Vue.createApp({
data() {
    return {
        myNumber:0,
        myName: ''

    };
},

methods: {
    decrement() {
        this.myNumber--
      },
      
      increment() {
          this.myNumber++
      }
},

computed: {
    userName(){
        console.log("la fonction est executée");
        if (this.myName==''){
            return "hello1"
        } else {
            return "helloBis"
        }
    },
}

}).mount('#app');