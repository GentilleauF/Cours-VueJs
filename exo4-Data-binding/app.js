


Vue.createApp({
data() {
    return {
        nom: "Fry",
        age: 28,
        nbrFetiche: Math.random(),
        monImage : "./fry.png"

    };
},

methods: {
    plusVieux () {
        return "Mon age dans 10 ans: " + (this.age+10) + ' ans'
    }

}


}).mount('#app');