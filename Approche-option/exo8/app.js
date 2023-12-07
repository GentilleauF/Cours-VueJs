

Vue.createApp({
  data() {
    return {
      myNumber: 0,
      myResult: "Essaie encore",
    };
  },

  methods: {
    decrement() {
      this.myNumber++;
    },

    increment() {
      this.myNumber += 5;
    },
  },

  watch: {
    myNumber(value) {
      if (value == 7) {
        console.log("ok");
        return (this.myResult = "Bravo");
      } else if (value >= 7 && value < 30) {
        console.log("plus grand");
        return (this.myResult = "Tu as dépassé le nombre mystére");
      } else if (value >= 30) {
        console.log("plus que 30");
        this.myResult = "Tu es bcp trop loin";
        setTimeout(() => {
          console.log("timeout");
          this.myNumber = 0;
          this.myResult ='Esaie encore'
        }, 3000);
      }
    },
  },
}).mount("#app");







//2EME METHODE (CORRIGE)
Vue.createApp({
  data() {
      return {
      leNombre: 0,
      msg:''
      };
  },
  computed: {
      indice() {
      if (this.leNombre < 7) {
          return 'ESSAIE ENCORE!';
      } else if (this.leNombre === 7) {
          return this.leNombre + '...BINGO';
      } else {
          return 'tu as dépassé le nombre';
      }
      },
  },
  methods: {
      augmenter(num) {
      this.leNombre += num;
      },
  },
  watch: {
      // Value en param par réflexe mais on s'en sert pas ici 
      leNombre(value) {
          console.log('le watcher en action...');
          if(value>30){
              // this.leNombre = 0;
              this.msg= "BCP BCP mais alors bcp TROP"
              setTimeout(() => {
                  this.leNombre = 0;
              }, 3000);
          }
  
      },
  },
  }).mount('#monApp');