const app = new Vue(
    {
        el: '#vue',
        data: {
            emailGenerata:'',
            emailCasuali:[],
        },

        mounted(){
            
            for (let index = 0; index < 10; index++) {
                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((email) => {
                    this.emailGenerata = email.data.response;
                    this.emailCasuali.push(this.emailGenerata);
                });   
            }
            console.log(this.emailCasuali);
        }
    }
)