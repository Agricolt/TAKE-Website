// Functions for easy array acces from localStorage

Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}

Vue.component('displayed-item', {

	methods : {
		addToCart : function(item_id, item_name, item_price){
			var cartArray = localStorage.getObj('cart');
			// check if item is already in cart - if yes just add 1 more to item_count
			if (cartArray.length == 0){
				this.pushAnItem(item_id, item_name, item_price);
			}
			else{
				if (this.checkIfAlreadyInCartAndIncCount(item_id) == false){
					this.pushAnItem(item_id, item_name, item_price);
				}
			}
			// Display a toast message
			this.$toast.open({
				message: "Przedmiot: " + item_name + " został pomyślnie dodany do koszyka",
				type: "success",
				duration: 5000,
				dismissible: true
			})
			console.log(localStorage.getObj('cart'));
		},
		checkIfAlreadyInCartAndIncCount : function(item_id){
			var cartArray = localStorage.getObj('cart');
			for (var i = 0; i < cartArray.length; i++){
				if (cartArray[i].item_id == item_id){
					cartArray[i].item_count++;
					localStorage.removeItem('cart');
					localStorage.setObj('cart', cartArray);
					return true;
				}
			}
			return false;
		},
		pushAnItem : function(item_id, item_name, item_price){
			var cartArray = localStorage.getObj('cart');
			cartArray.push({
				item_id: item_id,
				item_name: item_name,
				item_price: item_price,
				item_count: 1
			})
			localStorage.removeItem('cart');
			localStorage.setObj('cart', cartArray);
		}
	},
	props: ['item_class', 'item_name', 'item_price', 'item_id', "item_ilosc"],
	template: `
				<li>
				<div :class="item_class">
					<h4 class="item_name">{{item_name}}</h4>
					<h4 class="item_price">Cena za sztukę: {{item_price}}</h4>
					<button class="add_to_cart_button"  v-on:click="addToCart(item_id, item_name, item_price)">
                    <h4>Ilość na magazynie: {{item_ilosc}}</h4>
						<div class="add_to_cart_box">
							<img src="add_to_cart.png" class="add_to_cart">
							<p>
								Dodaj do koszyka
							</p>
						</div>
					</button>
				</div>
			</li>
		`
})