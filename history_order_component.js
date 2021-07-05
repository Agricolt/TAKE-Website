// Functions for easy array acces from localStorage
Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}

Vue.component('history-order', {
	props: ['order_no', 'order_sum', 'items_list'],
	template: `
    <li class="order_item">
            <div class="order_details">
                <h2>Numer zamówienia: {{order_no}}</h2>
                <h2>Lista przedmiotów zamówienia:</h2>
                <ul class="list_of_items_order">
                    <history-order-item
                    v-for="i in items_list"
                    v-bind:item_name="i.produkt.nazwa"
                    v-bind:item_price="i.produkt.cena"
                    v-bind:item_count="i.ilosc"
                    ></history-order-item>
                </ul>
                <h3>Suma całkowita: {{order_sum}}</h3>
            </div>
        </li>
		`
})