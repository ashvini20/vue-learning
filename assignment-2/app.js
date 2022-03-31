
const app = Vue.createApp({
    data() {
      return {
        user_id : '',
        user_name : '',
      };
    },
    methods: {
        displayAlert() {
            alert('Hello, Welcome to the Vue!!')
      },
      user(event){
        this.user_name = event.target.value ; 
      },
      userId(){
        this.user_id = this.user_name ; 
      }
 
    }
  });
  
  app.mount('#assignment');