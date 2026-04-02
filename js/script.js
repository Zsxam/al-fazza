// Array untuk menampung pesanan user
let cart = [];

// Fungsi untuk menambah barang ke keranjang
function addToCart(productName, productPrice) {
    // Cek apakah produk sudah ada di keranjang
    let existingItem = cart.find(item => item.name === productName);

    if (existingItem) {
        existingItem.quantity += 1; // Jika sudah ada, tambah jumlahnya
    } else {
        // Jika belum ada, masukkan sebagai barang baru
        cart.push({
            name: productName,
            price: productPrice,
            quantity: 1
        });
    }

    updateCartUI();
    
    // Opsional: Kasih alert sederhana biar user tau tombolnya berfungsi
    alert(`${productName} berhasil ditambahkan ke keranjang!`);
}

// Fungsi untuk memperbarui angka di ikon keranjang navbar
function updateCartUI() {
    const cartCountElement = document.getElementById('cart-count');
    
    // Hitung total kuantitas dari semua barang di keranjang
    let totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    
    // Update angka di HTML
    cartCountElement.textContent = totalItems;
}