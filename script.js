const app = new Vue({
    el: "#app",
    data: {
        products: [
            {
                name: "Erigolim Jean-Tote",
                image: "/assets/1.jpg",
                stock: 23,
                color: "Noir",
                quantity: 1,
            },
            {
                name: "Erigolim Destroyed",
                image: "/assets/2.jpg",
                stock: 12,
                color: "Gris",
                quantity: 2,
            },
            {
                name: "Prayoon Carrelet",
                image: "/assets/3.jpg",
                stock: 25,
                color: "Gris",
                quantity: 1,
            },
        ],
    },
    methods: {
        decrementQuantity: function (product) {
            if (product.quantity > 0) {
                product.quantity--;
            }
        },
        incrementQuantity: function (product) {
            product.quantity++;
        },
    },
});
