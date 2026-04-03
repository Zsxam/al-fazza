function loadComponent(elementId, filePath) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Gagal memuat ${filePath}`);
            }
            return response.text();
        })
        .then(htmlData => {
            document.getElementById(elementId).innerHTML = htmlData;

            if (elementId === "header-placeholder") {
                aktifkanKeranjang();
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function aktifkanKeranjang() {
    const cartBtn = document.getElementById('cart-btn'); 
    const cartSidebar = document.getElementById('cart-sidebar');
    const closeCartBtn = document.getElementById('close-cart');
    const cartOverlay = document.getElementById('cart-overlay');

    if (cartBtn && cartSidebar && closeCartBtn && cartOverlay) {
        cartBtn.addEventListener('click', (e) => {
            e.preventDefault(); 
            cartSidebar.classList.add('active');
            cartOverlay.classList.add('active');
        });

        closeCartBtn.addEventListener('click', () => {
            cartSidebar.classList.remove('active');
            cartOverlay.classList.remove('active');
        });

        cartOverlay.addEventListener('click', () => {
            cartSidebar.classList.remove('active');
            cartOverlay.classList.remove('active');
        });
    } else {
        console.log("Elemen keranjang tidak ditemukan di dalam header.");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    loadComponent("header-placeholder", "header.html");
    loadComponent("footer-placeholder", "footer.html");
});

// Array untuk menampung pesanan user
let cart = JSON.parse(localStorage.getItem('alfazza_cart')) || [];

function addToCart(productName, productPrice, productImage) {
    // Cek apakah produk sudah ada di keranjang
    let existingItem = cart.find(item => item.name === productName);

    if (existingItem) {
        existingItem.quantity += 1; // Jika sudah ada, tambah jumlahnya
    } else {
        // Jika belum ada, masukkan sebagai barang baru beserta gambarnya
        cart.push({
            name: productName,
            price: productPrice,
            quantity: 1,
            image: productImage 
        });
    }

    // Simpan ke localStorage agar tidak reset saat pindah HTML
    localStorage.setItem('alfazza_cart', JSON.stringify(cart));

    updateCartUI();
    
    // Alert sederhana biar user tau tombolnya berfungsi
    alert(`${productName} berhasil ditambahkan ke keranjang!`);
}

// Fungsi untuk memperbarui isi sidebar keranjang
function updateCartUI() {
    const cartCountElement = document.getElementById('cart-count');
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartTotalElement = document.querySelector('.cart-total span:nth-child(2)');
    
    if (cartCountElement) {
        let totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        cartCountElement.textContent = totalItems;
    }

    if (cartItemsContainer) {
        cartItemsContainer.innerHTML = '';
        let grandTotal = 0;

        cart.forEach((item, index) => {
            let subtotal = item.price * item.quantity;
            grandTotal += subtotal;

            cartItemsContainer.innerHTML += `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}">
                    <div class="item-detail">
                        <h4>${item.name}</h4>
                        <p>Qty: ${item.quantity}</p>
                        <span>Rp ${item.price.toLocaleString('id-ID')}</span>
                    </div>
                    <button class="remove-item" onclick="removeFromCart(${index})"><i class="fas fa-trash"></i></button>
                </div>
            `;
        });

        if (cartTotalElement) {
            cartTotalElement.textContent = `Rp ${grandTotal.toLocaleString('id-ID')}`;
        }
    }
}

// Fungsi untuk tombol hapus (ikon tong sampah)
function removeFromCart(index) {
    cart.splice(index, 1); 
    localStorage.setItem('alfazza_cart', JSON.stringify(cart)); 
    updateCartUI(); 
}
