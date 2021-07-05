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
		items: [] // recommended items loaded from API
	},
	beforeCreate() {
        if (sessionStorage.getItem('userEmail') == null){
            window.location.href = 'index.html'
        }
		axios.get('http://localhost:8080/warehouse/produkt')
		.then(response => {
			this.items = response.data;
			console.log("succes");
            console.log(this.items);
		})
		.catch(error => {
			console.log("error");
		});
	},
	methods: {
		koszyk : function(){
			window.location.href = 'koszyk.html'
		},
		zamowienia : function(){
			window.location.href = 'zamowienia.html'
		},
		wyloguj : function(){
			sessionStorage.removeItem('userEmail');
            window.location.href = 'index.html'
		}
	},
})