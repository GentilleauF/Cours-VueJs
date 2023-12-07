


Vue.createApp({
data() {
    return {
        nom: "Fry",
        age: 25,
        nbrFetiche: Math.random(),
        monImage : "./fry.png",
        platsPref: ["Pizza regina", "Pates carbonara" ]


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
    },

    addMeal() {
        if(newMeal.value !=0){
            this.platsPref.push(newMeal.value);
        }
        console.log(newMeal.value);
    },

    deleteMeal() {
        let indexASupprimer = parseInt(deleteMeal.value)-1;
        console.log(indexASupprimer);
        this.platsPref.splice(indexASupprimer,1);
        deleteMeal.value = ""
    }

}


}).mount('#app');