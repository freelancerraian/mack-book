// main function
function funk(pricingId,amount){
    const pricingInput = document.getElementById(pricingId);
    pricingInput.innerText = amount;
    totalPrice();
}

// total Price sec
function totalPrice(){
    const best = parseFloat(document.getElementById('bestPrice').innerText)

    const memory = parseFloat(document.getElementById('memoryPrice').innerText);
    
    const storage = parseFloat(document.getElementById('storagePrice').innerText);
    
    const delivary = parseFloat(document.getElementById('deliveryPrice').innerText);
    
    const totalPriceText = document.getElementById('totalPriceId');
    
    totalPriceText.innerText = best + memory + storage + delivary;

    fullTotal()
}

// memory sec 
document.getElementById('memory8Gb').addEventListener('click', function(){
    funk('memoryPrice', 0);
})
document.getElementById('memory16Gb').addEventListener('click', function () {
    funk('memoryPrice', 180);
})

// Storage sec 
document.getElementById('storage256Gb').addEventListener('click', function(){
    funk('storagePrice',0);
})
document.getElementById('storage512Gb').addEventListener('click', function () {
    funk('storagePrice', 100);
})
document.getElementById('storage1Tb').addEventListener('click', function () {
    funk('storagePrice', 180);
})

// Delivery sec 
document.getElementById('delivaryFree').addEventListener('click', function(){
    funk('deliveryPrice',0);
})
document.getElementById('delivaryFast').addEventListener('click', function () {
    funk('deliveryPrice', 20);
})

// promo sec
document.getElementById('promoBtn').addEventListener('click', function(){
    const totalPriceId = parseFloat(document.getElementById('totalPriceId').innerText);

    const Input = document.getElementById('promoInput').value;

    const fullTotal = document.getElementById('fullTotal');

    const promo = totalPriceId * 0.2;
    
    const code = "stevekaku";

    if(Input == code){
        fullTotal.innerText = totalPriceId - promo;
    }
    document.getElementById('promoInput').value = "";

})

// Full Total Function
function fullTotal(){
    const totalPrice = document.getElementById('totalPriceId').innerText;
    document.getElementById('fullTotal').innerText = totalPrice;

}

    
