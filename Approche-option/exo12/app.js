

Vue.createApp({
  data() {
    return {
      valeurDeLinput: '',   
      movieArray: []   
    };
  },


  methods : {
    addMovie () {
      this.movieArray.push(this.valeurDeLinput)
    }
  

  },

}).mount("#app");





