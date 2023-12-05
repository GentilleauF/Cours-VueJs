

Vue.createApp({
  data() {
    return {
      valeurDeLinput: '',   
      movieArray: [],
      listVisible: true,
      msgOk:" Afficher la liste",
      msgNotOk:" Cacher la liste"
    };
  },


  methods : {
    addMovie () {
      this.movieArray.push(this.valeurDeLinput)
    },

    showList() {
      this.listVisible = !this.listVisible;
    }
  },

}).mount("#app");





