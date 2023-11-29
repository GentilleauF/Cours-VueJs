
Vue.createApp({
data() {
    return {
        nbrAleatoire: null,
        leLivre: ''
};
},

methods: {
    afficherLivreRandom(){

        this.nbrAleatoire = Math.random();

        if (this.nbrAleatoire>0.5){
            console.log('ok1');
            return this.leLivre = "Boba fett";
        } else {
            console.log('ok2');
          return this.leLivre = "The mandalorian";
        }
    
    }
}
}).mount('#app');