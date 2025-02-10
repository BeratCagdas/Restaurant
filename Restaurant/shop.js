document.addEventListener("DOMContentLoaded", function () {
    const shoppingCartIcon = document.querySelector(".fa-shopping-cart"); // Sepet butonu
    const shoppingCart = document.getElementById("shoppingCart"); // Sepet kutusu
    const closeCartButton = document.getElementById("closeCart"); // Sepeti kapatma butonu
    const cartItems = document.getElementById("cartItems"); // Sepet içeriği
    const addToCartButtons = document.querySelectorAll(".add-to-cart"); // Sepete ekleme butonları
    const clearCartButton = document.getElementById("clearCartButton"); // Sepeti temizleme butonu
    const closeButton = document.getElementById("checkout"); // Ödeme butonu
    const cartIcon = document.getElementById("shopping"); // Mobil sepet ikonu
    console.log("Merhaba");
    let cartData = []; // Sepetteki ürünleri tutan dizi

    // Sepeti Güncelleme Fonksiyonu
    function updateCart() {
        cartItems.innerHTML = ""; // Önceki öğeleri temizle
        if (cartData.length === 0) {
            cartItems.innerHTML = "<li>Sepetiniz boş.</li>";
            return;
        }

        cartData.forEach((item, index) => {
            const li = document.createElement("li");
            li.textContent = `${item.name} - ${item.price}₺`;

            // Ürünü kaldırma butonu
            const removeButton = document.createElement("button");
            removeButton.textContent = "X";
            removeButton.style.marginLeft = "10px";
            removeButton.style.cursor = "pointer";
            removeButton.style.background = "red";
            removeButton.style.color = "white";
            removeButton.style.border = "none";
            removeButton.style.padding = "3px 6px";
            removeButton.style.borderRadius = "5px";

            removeButton.addEventListener("click", function () {
                cartData.splice(index, 1); // Diziden ürünü kaldır
                updateCart(); // Sepeti güncelle
                console.log(cartData.length);
            });

            li.appendChild(removeButton);
            cartItems.appendChild(li);
        });
        if (cartData.length > 0) {
            cartIcon.style.backgroundColor = "#11da1b"; 
        }
        
        else if(cartData.length < 1)
            {
                cartIcon.style.backgroundColor = "#a15151";
            }
     
    }
     
      
   
        
    // Sepeti Açma Fonksiyonu
    function openCart() {
        if (shoppingCart) {
            shoppingCart.classList.add("open");
        }
    }

    // Sepeti Kapama Fonksiyonu
    function closeCart() {
        if (shoppingCart) {
            shoppingCart.classList.remove("open");
        }
    }

    // Sepete Ürün Ekleme
    addToCartButtons.forEach(button => {
        button.addEventListener("click", function () {
            const itemName = button.getAttribute("data-name");
            const itemPrice = button.getAttribute("data-price");

            if (itemName && itemPrice) {
                cartData.push({ name: itemName, price: itemPrice });
                updateCart(); // Sepeti Güncelle
                if (window.innerWidth >= 768) {
                    openCart();
                }
                
            }
        });
    });


    
    // Sepeti Açma Butonu
    if (shoppingCartIcon) {
        shoppingCartIcon.addEventListener("click", openCart);
    }

    // Sepeti Kapatma Butonu
    if (closeCartButton) {
        closeCartButton.addEventListener("click", closeCart);
    }

    // Sepeti Temizleme Butonu
    if (clearCartButton) {
        clearCartButton.addEventListener("click", function () {
            cartData = []; // Sepeti tamamen temizle
            updateCart(); // Güncelle
        });
    }
    

    // Ödeme Butonu
    if (closeButton) {
        closeButton.addEventListener("click", function () {
            alert("Ödeme Yapılıyor...");
        });
    }
    cartIcon.addEventListener("click", function () {
        shoppingCart.classList.toggle("open");
    });
    
    // 📌 Kapatma Butonu
    closeCart.addEventListener("click", function () {
        shoppingCart.classList.remove("open");
    });

});

    
