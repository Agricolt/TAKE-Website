// Functions for easy array acces from localStorage
Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}

Vue.component('history-order-item', {
	props: ['item_name', 'item_price', 'item_count'],
    data: function() {
        return {
            suma : 0
        }
    },
    created() {
        this.suma = this.item_price * this.item_count;

    },
	template: `
    <li class="item_of_order">
        <div class="order_item_details">
            <h3>{{item_name}}</h3>
            <h4>Cena za sztukę: {{item_price}}</h4>
            <h4>Ilość sztuk: {{item_count}}</h4>
            <h3>Suma: {{suma}}</h3>
        </div>
    </li>
		`
})