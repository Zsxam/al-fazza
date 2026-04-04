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
// Data semua produk AL-Fazza Bakery
const produkToko = [
    // --- Kategori BOLU ---
    { id: 1, kategori: 'bolu', nama: 'Cheese', tipe: 'Kue Bolu', harga: 13600, rating: 4.9, gambar: '../assets/images/bolu/1-bolukeju.png' },
    { id: 2, kategori: 'bolu', nama: 'Meses', tipe: 'Kue Bolu', harga: 11900, rating: 4.9, gambar: '../assets/images/bolu/2-bolumeses.png' },
    { id: 3, kategori: 'bolu', nama: 'Coffee Raisin', tipe: 'Bolu Puding', harga: 31700, rating: 4.9, gambar: '../assets/images/bolu/3-bolupuding.png' },
    { id: 4, kategori: 'bolu', nama: 'Coklat', tipe: 'Bolu Coklat', harga: 79500, rating: 4.9, gambar: '../assets/images/bolu/4-bolucoklat.png' },
    { id: 5, kategori: 'bolu', nama: 'Chiffon Pandan', tipe: 'Bolu Pandan', harga: 76500, rating: 4.9, gambar: '../assets/images/bolu/5-bolupandan.png' },
    { id: 6, kategori: 'bolu', nama: 'Chiffon Keju', tipe: 'Bolu', harga: 85000, rating: 4.9, gambar: '../assets/images/bolu/6-chiffonkeju.png' },
    { id: 7, kategori: 'bolu', nama: 'Bolu Lemon', tipe: 'Bolu Gulung', harga: 103000, rating: 4.9, gambar: '../assets/images/bolu/7-bolulemon.png' },
    { id: 8, kategori: 'bolu', nama: 'Bolu Mocca', tipe: 'Bolu Gulung', harga: 103000, rating: 4.9, gambar: '../assets/images/bolu/8-bolugulungmoca.png' },
    { id: 9, kategori: 'bolu', nama: 'Bolu Keju', tipe: 'Bolu Gulung', harga: 119500, rating: 4.9, gambar: '../assets/images/bolu/9-bolugulungkeju.png' },
    { id: 10, kategori: 'bolu', nama: 'Bolu Pandan', tipe: 'Bolu Gulung', harga: 85000, rating: 4.9, gambar: '../assets/images/bolu/10-bolugulungpandan.png' },
    { id: 11, kategori: 'bolu', nama: 'Raisin Muffin', tipe: 'Bolu', harga: 11900, rating: 4.9, gambar: '../assets/images/bolu/11-raisinmuffin.png' },
    { id: 12, kategori: 'bolu', nama: 'Coklat Muffin', tipe: 'Bolu', harga: 11900, rating: 4.9, gambar: '../assets/images/bolu/12-chocolatemuffin.png' },

    // --- Kategori PASTRY ---
    { id: 1, kategori: 'pastry', nama: 'Mushroom', tipe: 'Pastry', harga: 11900, rating: 4.9, gambar: '../assets/images/pastry/1-mushroom-pastry.png' },
    { id: 2, kategori: 'pastry', nama: 'Chicken Pies', tipe: 'Pastry', harga: 11900, rating: 4.9, gambar: '../assets/images/pastry/2-chicken-pie.png' },
    { id: 3, kategori: 'pastry', nama: 'Croissant Penyet', tipe: 'Pastry', harga: 11600, rating: 4.9, gambar: '../assets/images/pastry/3-croissant-penyet.png' },
    { id: 4, kategori: 'pastry', nama: 'Cromboloni Coklat', tipe: 'Pastry', harga: 21800, rating: 4.9, gambar: '../assets/images/pastry/4-cromboloni-coklat.png' },
    { id: 5, kategori: 'pastry', nama: 'Danish Coklat', tipe: 'Pastry', harga: 14100, rating: 4.9, gambar: '../assets/images/pastry/5-danish-coklat.png' },
    { id: 6, kategori: 'pastry', nama: 'Danish Keju', tipe: 'Pastry', harga: 16300, rating: 4.9, gambar: '../assets/images/pastry/6-danish-keju.png' },
    { id: 7, kategori: 'pastry', nama: 'Danish Raisin', tipe: 'Pastry', harga: 13600, rating: 4.9, gambar: '../assets/images/pastry/7-danish-raisin.png' },
    { id: 8, kategori: 'pastry', nama: 'Kue Soes', tipe: 'Pastry', harga: 10100, rating: 4.9, gambar: '../assets/images/pastry/8-kue-soes.png' },
    { id: 9, kategori: 'pastry', nama: 'Tuna Corn Puff', tipe: 'Pastry', harga: 11900, rating: 4.9, gambar: '../assets/images/pastry/9-tuna-corn-puff.png' },
    { id: 10, kategori: 'pastry', nama: 'Almond Pastry', tipe: 'Pastry', harga: 11900, rating: 4.9, gambar: '../assets/images/pastry/10-almond-pastry.png' },
    { id: 11, kategori: 'pastry', nama: 'Apple Pie', tipe: 'Pastry', harga: 16500, rating: 4.9, gambar: '../assets/images/pastry/11-apple-pie.png' },
    { id: 12, kategori: 'pastry', nama: 'Sausage Brood', tipe: 'Pastry', harga: 11900, rating: 4.9, gambar: '../assets/images/pastry/12-sausage-brood.png' },

    // --- Kategori COOKIES ---
    { id: 1, kategori: 'cookies', nama: 'Cookies Coklat', tipe: 'Cookies', harga: 76000, rating: 4.9, gambar: '../assets/images/cookies/1-cookies-coklat.png' },
    { id: 2, kategori: 'cookies', nama: 'Cookies Hati', tipe: 'Cookies', harga: 76000, rating: 4.9, gambar: '../assets/images/cookies/2-cookies-hati.png' },
    { id: 3, kategori: 'cookies', nama: 'Kaasstengels', tipe: 'Cookies', harga: 151500, rating: 4.9, gambar: '../assets/images/cookies/3-kaasstengels.png' },
    { id: 4, kategori: 'cookies', nama: 'Lidah Kucing', tipe: 'Cookies', harga: 92000, rating: 4.9, gambar: '../assets/images/cookies/4-lidah-kucing.png' },
    { id: 5, kategori: 'cookies', nama: 'Nastar', tipe: 'Cookies', harga: 95000, rating: 4.9, gambar: '../assets/images/cookies/5-nastar.png' },
    { id: 6, kategori: 'cookies', nama: 'Putri Salju', tipe: 'Cookies', harga: 95000, rating: 4.9, gambar: '../assets/images/cookies/6-putri-salju.png' },
    { id: 7, kategori: 'cookies', nama: 'Cheese Stick', tipe: 'Cookies', harga: 50500, rating: 4.9, gambar: '../assets/images/cookies/7-cheese-stick.png' },
    { id: 8, kategori: 'cookies', nama: 'Choco Cheese', tipe: 'Cookies', harga: 66500, rating: 4.9, gambar: '../assets/images/cookies/8-choco-cheese.png' },
    { id: 9, kategori: 'cookies', nama: 'Peanut Butter', tipe: 'Cookies', harga: 76500, rating: 4.9, gambar: '../assets/images/cookies/9-peanut-butter.png' },
    { id: 10, kategori: 'cookies', nama: 'Cranberry Corn', tipe: 'Cookies', harga: 72500, rating: 4.9, gambar: '../assets/images/cookies/10-cranberry-corn.png' },
    { id: 11, kategori: 'cookies', nama: 'Soes Kering', tipe: 'Cookies', harga: 36000, rating: 4.9, gambar: '../assets/images/cookies/11-soes-kering.png' },
    { id: 12, kategori: 'cookies', nama: 'Roti Bagelen Keju', tipe: 'Cookies', harga: 33200, rating: 4.9, gambar: '../assets/images/cookies/12-roti-bagelen-keju.png' },

    // --- Kategori ROTI ---
    { id: 1, kategori: 'roti', nama: 'Choco Custard', tipe: 'Roti', harga: 14600, rating: 4.9, gambar: '../assets/images/roti/1-choco-custard.png' },
    { id: 2, kategori: 'roti', nama: 'Roti Kelapa', tipe: 'Roti', harga: 11000, rating: 4.9, gambar: '../assets/images/roti/2-roti-kelapa.png' },
    { id: 3, kategori: 'roti', nama: 'Garlic Cream', tipe: 'Roti', harga: 16900, rating: 4.9, gambar: '../assets/images/roti/3-garlic-cream.png' },
    { id: 4, kategori: 'roti', nama: 'Coklat Muisjes', tipe: 'Roti', harga: 11300, rating: 4.9, gambar: '../assets/images/roti/4-coklat-muisjes.png' },
    { id: 5, kategori: 'roti', nama: 'Abon Sapi', tipe: 'Roti', harga: 15100, rating: 4.9, gambar: '../assets/images/roti/5-abon-sapi.png' },
    { id: 6, kategori: 'roti', nama: 'Abon Sapi Pedas', tipe: 'Roti', harga: 15100, rating: 4.9, gambar: '../assets/images/roti/6-abon-sapi-pedas.png' },
    { id: 7, kategori: 'roti', nama: 'Bakso Sapi', tipe: 'Roti', harga: 15400, rating: 4.9, gambar: '../assets/images/roti/7-bakso-sapi.png' },
    { id: 8, kategori: 'roti', nama: 'Cheese Raisin', tipe: 'Roti', harga: 14600, rating: 4.9, gambar: '../assets/images/roti/8-cheese-raisin.png' },
    { id: 9, kategori: 'roti', nama: 'Roti Coklat', tipe: 'Roti', harga: 11300, rating: 4.9, gambar: '../assets/images/roti/9-roti-coklat.png' },
    { id: 10, kategori: 'roti', nama: 'Smooked Beef', tipe: 'Roti', harga: 18100, rating: 4.9, gambar: '../assets/images/roti/10-smoked-beef.png' },
    { id: 11, kategori: 'roti', nama: 'Ikan Tuna', tipe: 'Roti', harga: 15100, rating: 4.9, gambar: '../assets/images/roti/11-ikan-tuna.png' },
    { id: 12, kategori: 'roti', nama: 'Roti Srikaya', tipe: 'Roti', harga: 11700, rating: 4.9, gambar: '../assets/images/roti/12-isi-srikaya.png' },

    // --- Kategori PASTRY (Contoh data lain) ---
    { id: 5, kategori: 'pastry', nama: 'Pisang Bolen', tipe: 'Pastry', harga: 15000, rating: 4.8, gambar: '../assets/images/pisangbolen 1.png' },
    { id: 6, kategori: 'pastry', nama: 'Cheese Roll', tipe: 'Pastry', harga: 12000, rating: 4.7, gambar: '../assets/images/cheeseroll 1.png' }
];

function renderKategoriProduk() {
    const gridContainer = document.getElementById('kategori-grid');
    if (!gridContainer) return; // Hentikan jika bukan di halaman kategori

    // 1. Ambil kata kunci kategori dari URL (misal: ?jenis=bolu)
    const urlParams = new URLSearchParams(window.location.search);
    const filterJenis = urlParams.get('jenis'); // Akan menghasilkan 'bolu' atau 'pastry'

    // 2. Filter array produkToko berdasarkan jenisnya
    let produkDifilter = produkToko; // Default tampilkan semua
    
    if (filterJenis) {
        produkDifilter = produkToko.filter(item => item.kategori === filterJenis);
        
        // Opsional: Ubah judul halaman sesuai kategori
        const judul = document.getElementById('judul-kategori');
        if(judul) {
            // Mengubah 'bolu' menjadi 'Aneka Bolu'
            judul.textContent = `Aneka ${filterJenis.charAt(0).toUpperCase() + filterJenis.slice(1)}`; 
        }
    }

    // 3. Kosongkan grid dan mulai cetak HTML-nya
    gridContainer.innerHTML = '';

    produkDifilter.forEach(produk => {
        gridContainer.innerHTML += `
            <div class="kategori-card product-card-new">
                <div class="card-header-new">
                    <div class="title-area">
                        <h4>${produk.nama}</h4>
                        <span>${produk.tipe}</span>
                    </div>
                </div>
                <div class="rating-badge">⭐ ${produk.rating}</div>
                <img src="${produk.gambar}" alt="${produk.nama}" class="product-img">
                <div class="card-footer-new">
                    <p class="price">Rp ${produk.harga.toLocaleString('id-ID')}</p>
                    <button class="btn-detail" onclick="addToCart('${produk.nama}', ${produk.harga}, '${produk.gambar}')">Detail</button>
                </div>
            </div>
        `;
    });
}