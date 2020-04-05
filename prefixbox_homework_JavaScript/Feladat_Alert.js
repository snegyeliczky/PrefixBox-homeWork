export let Alert = {

    alert_data: function () {
        let productDataContainer = document.querySelectorAll(".product-data");
        for (let dataContainer of productDataContainer) {
            dataContainer.querySelector('.product-name').addEventListener("click", function () {
                let name = this.textContent;
                let price = this.nextElementSibling.textContent;
                let id = this.parentNode.dataset.identifier;
                let text = `Product name : ${name}\n` +
                    `Product ID : ${id}\n` +
                    `Product price : ${price}`;
                alert(text);
            });
        };
    }
}
