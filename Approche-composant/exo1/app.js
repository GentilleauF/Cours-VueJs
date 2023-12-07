Vue.createApp({
    data() {
      return {
        detailsVisible: false,
        lesAmis: [{id:1, name:'théo', phone:"0655254585", email:"bczrerrez@gmail.com"}, {id:2, name:'Tom', phone:"066544585", email:"kjezdirez@gmail.com"}]
    
      };
    },
  
  
    methods : {
      toggleDetails () {
        this.detailsVisible = !this.detailsVisible

      }

    },
  
  }).mount("#app");
  
  
  
  
  
  