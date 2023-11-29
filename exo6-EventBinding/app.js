

Vue.createApp({
data() {
    return {
        maString: "",
        maString2: ""

    };
},

methods: {
    write(e){
        console.log(this.maString);
        this.maString = e.target.value
    },

    write2(e){
        console.log(this.maString2);
        this.maString2 = e.target.value
    },

    alerte(){
        alert('Alerte generale')
    }

}

}).mount('#app');