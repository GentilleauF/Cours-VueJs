

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
        }, 3000);
      }
    },
  },
}).mount("#app");