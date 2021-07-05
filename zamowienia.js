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
		items : [],
		orders : [],    		// every order client ordered is stored here
        is_orders : false
	},
    created() {
        const getOrdersHistory = async () => {
			try{
                var userEmail = sessionStorage.getItem('userEmail');

                var queryURL = 'http://localhost:8080/warehouse/klient/faktury/' + userEmail;

				const resp = await axios.get(queryURL);
                if (resp.data != null){
                    this.orders = resp.data;
                }
                else{
                    this.ifOrders = false;
                }
                console.log(this.orders);
			}
			catch (err){
				window.location.href = 'index.html';
			}
		};
		getOrdersHistory();
    },
})