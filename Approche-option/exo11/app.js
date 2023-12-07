

Vue.createApp({
  data() {
    return {
      valeurDeLinput: '',
      couleurInput: "",
      visible: true

      
    };
  },


  methods : {
    displayModify () {
      this.visible = !this.visible
       console.log(this.visible);
    }

   
    

  },

}).mount("#app");





