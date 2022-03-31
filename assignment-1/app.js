const app = Vue.createApp({
  data() {
    return {
      name: 'Ashvini',
      age: 26,
      imageUrl: 'https://i.picsum.photos/id/88/536/354.jpg?hmac=9sXz55jNeMZO8qXjYbd9resF7aGeDPG7B1HbOMWTafo',
      rawhtml:'<h1>This is the raw html text</h1>',
      counter: 0
    };
  },
  methods: {
    calAge() {
      return this.age + 5 ;
    },
    showRandom() {
      return Math.random();
    },
    add(num){
      this.counter = this.counter + num;
    },
    subtract(num){
      this.counter = this.counter - num;
    }
  }
});

app.mount('#assignment');