const app = Vue.createApp({
  data() {
    return {
      name: "Eduardo",
      age: 25,
      imageUrl:
        "https://images.pexels.com/photos/3104708/pexels-photo-3104708.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    };
  },
  methods: {
    calculateAge() {
        return this.age + 5;
    },
    
    getRandomNumber() {
      return Math.random();
    },
  },
});

app.mount("#assignment");
