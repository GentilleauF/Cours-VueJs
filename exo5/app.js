


Vue.createApp({
data() {
    return {
        myNumber:0

    };
},

methods: {
    decrement() {
        if(this.myNumber >=1){
            this.myNumber--
        } else {
            this.myNumber==1
        }
    },
    
    increment() {
        this.myNumber++
    }
}

}).mount('#app');