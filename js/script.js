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
function aktifkanKeranjang() {
    const cartBtn = document.getElementById('cart-btn'); 
    const cartSidebar = document.getElementById('cart-sidebar');
    const closeCartBtn = document.getElementById('close-cart');
    const cartOverlay = document.getElementById('cart-overlay');
    const checkoutBtn = document.querySelector('.btn-checkout');

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
        if (checkoutBtn) {
    
        checkoutBtn.addEventListener('click', () => {
            let cartData = JSON.parse(localStorage.getItem('alfazza_cart')) || [];
                // Cek dulu, jangan sampai checkout keranjang kosong
                if (cartData.length === 0) {
                    alert("Keranjang masih kosong!");
                    return;
                }
                // Pindah ke halaman checkout
                window.location.href = 'checkout.html'; 
            });
        }   
    } else {
        console.log("Elemen keranjang tidak ditemukan di dalam header.");
    }
}

function renderCheckoutSummary() {
    const orderListContainer = document.getElementById('checkout-order-list');
    const subtotalElement = document.getElementById('checkout-subtotal');
    const grandtotalElement = document.getElementById('checkout-grandtotal');

    if (!orderListContainer) return;

    let cartData = JSON.parse(localStorage.getItem('alfazza_cart')) || [];
    
    // Jika user mengakses halaman checkout tapi keranjang kosong, kembalikan ke Home
    if (cartData.length === 0) {
        alert("Keranjang belanja Anda kosong.");
        window.location.href = 'index.html';
        return;
    }

    orderListContainer.innerHTML = '';
    let grandTotal = 0;

    cartData.forEach(item => {
        let subtotal = item.price * item.quantity;
        grandTotal += subtotal;

        // Struktur HTML
        orderListContainer.innerHTML += `
            <div class="order-item" style="display: flex; justify-content: space-between; margin-bottom: 10px; font-size: 0.9rem;">
                <span>${item.quantity}x ${item.name}</span>
                <span>Rp ${subtotal.toLocaleString('id-ID')}</span>
            </div>
        `;
    });

    subtotalElement.textContent = `Rp ${grandTotal.toLocaleString('id-ID')}`;
    grandtotalElement.textContent = `Rp ${grandTotal.toLocaleString('id-ID')}`;
}

// Memproses Form dan mengirim ke WhatsApp
function prosesCheckoutWA() {
    // Ambil data dari Form
    const nama = document.getElementById('nama').value;
    const nohp = document.getElementById('nohp').value;
    const tanggalKirim = document.getElementById('tanggalKirim').value;
    const alamat = document.getElementById('alamat').value;
    const catatan = document.getElementById('catatan').value;

    // Validasi form 
    if (!nama || !nohp || !alamat) {
        alert("Mohon lengkapi Nama, Nomor HP, dan Alamat Pengiriman!");
        return;
    }

    let cartData = JSON.parse(localStorage.getItem('alfazza_cart')) || [];
    let grandTotal = 0;
    
    let pesanWA = `Halo *AL-Fazza Bakery*, saya ingin memesan:\n\n`;
    pesanWA += `*INFORMASI PEMESAN*\n`;
    pesanWA += `Nama: ${nama}\n`;
    pesanWA += `No. HP: ${nohp}\n`;
    pesanWA += `Tgl Kirim: ${tanggalKirim}\n`;
    pesanWA += `Alamat: ${alamat}\n`;
    if (catatan) pesanWA += `Catatan: ${catatan}\n`;
    
    pesanWA += `\n*RINGKASAN PESANAN*\n`;
    cartData.forEach(item => {
        let subtotal = item.price * item.quantity;
        grandTotal += subtotal;
        pesanWA += `- ${item.quantity}x ${item.name} (Rp ${subtotal.toLocaleString('id-ID')})\n`;
    });
    
    pesanWA += `\n*Total Bayar: Rp ${grandTotal.toLocaleString('id-ID')}*\n\n`;
    pesanWA += `Mohon info untuk proses pembayaran. Terima kasih.`;

    // Nomor WhatsApp admin AL-Fazza Bakery
    let nomorAdmin = "6285863101630"; 
    let urlWA = `https://wa.me/${nomorAdmin}?text=${encodeURIComponent(pesanWA)}`;

    window.open(urlWA, '_blank');

    localStorage.removeItem('alfazza_cart'); 
}

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

document.addEventListener("DOMContentLoaded", () => {
    loadComponent("header-placeholder", "header.html");
    loadComponent("footer-placeholder", "footer.html");
});