


Vue.createApp({
data() {
    return {
        nom: "Fry",
        age: 25,
        nbrFetiche: Math.random(),
        monImage : "./fry.png"

    };
},

methods: {
    plusVieux () {
        return "Mon age dans 10 ans: " + (this.age+10) + ' ans'
    },

    changeName() {
        console.log('ok');
        this.nom = nameInput.value
    },

    decrement() {
        if(this.age >1){
            this.age--
        } else {
            this.age==1
        }
    },
    
    increment() {
        this.age++
    }

}


}).mount('#app');