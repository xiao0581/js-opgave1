Vue.createApp({
    data(){
        return{
            word:null,
            words:[],
            message: null            
        }
    },
    methods:{
        save(word){
           this.words.push(word)
        },
        clear(){
            this.words=[]
            this.words=null
        },
        show(){
            if (this.words == null) {
                this.message = "null words"
            }
            else {
                this.message = this.words.toString()
            }
        }
    }
}).mount('#app')