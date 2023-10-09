    // Variables para el carrito y el total
    let cart = [];
    let total = 0;

    // Función para agregar una mascota al carrito
    function addToCart(pet) {
        cart.push(pet);
        updateCart();
    }

    // Función para actualizar el carrito y el total
    function updateCart() {
        const cartItems = document.getElementById("cart-items");
        cartItems.innerHTML = "";

        cart.forEach((pet) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${pet.name}</td>
                <td>${pet.type}</td>
                <td>${pet.age}</td>
                <td>${pet.weight}</td>
                <td>${pet.observations}</td>
            `;
            cartItems.appendChild(row);
        });
    }

    // Llamar a esta función cuando un usuario haga clic en "Adopt"
    function adoptClicked() {
        // Aquí se implementa la funcionalidad de confirmación de adopción
        alert(" Confirmed adoption for selected pets.");
        cart = [];
        updateCart();
    }

    // Cada animal ocupa su propio objeto
    const inventory = {
        Tony: 1, 
        Pacho: 1,
    };

    