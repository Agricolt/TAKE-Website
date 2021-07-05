// Functions for easy array acces from localStorage

Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}

Vue.use(VueToast, {

});

app = new Vue({
	el: '.main_body',
	data: {
        userEmail : 'none'
	},
    beforeMount() {
        var cart = [];
        localStorage.setObj('cart', cart);
    },
    methods: {
        login : function(){
            var el = document.getElementById('e-mail');
            this.userEmail = el.value;
            console.log(this.userEmail);
            axios.get('http://localhost:8080/warehouse/klient/login/' + this.userEmail)
            .then(response => {
                sessionStorage.setItem("userEmail", this.userEmail);
                console.log("Zalogowano");
                console.log(sessionStorage.getItem('userEmail'));
                window.location.href = 'client.html'
            })
            .catch(error => {
                console.log("Error");
            })
        }  
    }
})