

Vue.createApp({
data() {
    return {
        myNumber:0

    };
},

methods: {
    decrement() {
      this.myNumber--
    },
    
    increment() {
        this.myNumber++
    }
}

}).mount('#app');