export let NameChange = {

    name_changer: function () {
        let productDataContainer = document.querySelectorAll(".product-data");
        for (let dataContainer of productDataContainer) {
            let identifier = dataContainer.dataset.identifier;
            if (identifier == 3) {
                change_name(dataContainer);
            }
        }
    }
}


function change_name(dataContainer) {
    dataContainer.querySelector('.product-name').addEventListener("click", function () {
        let textToChange = this.textContent;
        let previousSiblingElement = this.parentNode.parentElement.previousElementSibling;
        let previousTextContainer = previousSiblingElement.querySelector('.product-name');
        this.textContent = previousTextContainer.textContent;
        previousTextContainer.textContent = textToChange;
    })
}
