// ==========================================
// 1. DATA PRODUK (Disatukan & Disempurnakan)
// ==========================================
// Semua data produk kini terpusat di satu array ini
const produkToko = [
    // --- Kategori BOLU ---
    { id: 1, kategori: 'bolu', nama: 'Cheese Cake', tipe: 'Kue Bolu', harga: 13600, rating: 4.9, gambar: '../assets/images/bolu/1-bolukeju.png', deskripsi: 'Premium Cheese Long Cake dengan roti sisir premium dan cream cheese gurih.', bahan: 'Keju Cheddar, Cream Cheese, Tepung Terigu, Telur' },
    { id: 2, kategori: 'bolu', nama: 'Meses', tipe: 'Kue Bolu', harga: 11900, rating: 4.9, gambar: '../assets/images/bolu/2-bolumeses.png', deskripsi: 'Roti lembut dengan olesan krim manis dan taburan meses cokelat klasik.', bahan: 'Meses Cokelat, Krim Manis, Tepung Terigu, Mentega' },
    { id: 3, kategori: 'bolu', nama: 'Coffee Raisin', tipe: 'Bolu Puding', harga: 31700, rating: 4.9, gambar: '../assets/images/bolu/3-bolupuding.png', deskripsi: 'Bolu aroma kopi berlapis puding segar dengan kismis pilihan.', bahan: 'Ekstrak Kopi, Kismis, Agar-agar, Telur' },
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
    { id: 13, kategori: 'pastry', nama: 'Mushroom', tipe: 'Pastry', harga: 11900, rating: 4.9, gambar: '../assets/images/pastry/1-mushroom-pastry.png' },
    { id: 14, kategori: 'pastry', nama: 'Chicken Pies', tipe: 'Pastry', harga: 11900, rating: 4.9, gambar: '../assets/images/pastry/2-chicken-pie.png' },
    { id: 15, kategori: 'pastry', nama: 'Croissant Penyet', tipe: 'Pastry', harga: 11600, rating: 4.9, gambar: '../assets/images/pastry/3-croissant-penyet.png' },
    { id: 16, kategori: 'pastry', nama: 'Cromboloni Coklat', tipe: 'Pastry', harga: 21800, rating: 4.9, gambar: '../assets/images/pastry/4-cromboloni-coklat.png' },
    { id: 17, kategori: 'pastry', nama: 'Danish Coklat', tipe: 'Pastry', harga: 14100, rating: 4.9, gambar: '../assets/images/pastry/5-danish-coklat.png' },
    { id: 18, kategori: 'pastry', nama: 'Danish Keju', tipe: 'Pastry', harga: 16300, rating: 4.9, gambar: '../assets/images/pastry/6-danish-keju.png' },
    { id: 19, kategori: 'pastry', nama: 'Danish Raisin', tipe: 'Pastry', harga: 13600, rating: 4.9, gambar: '../assets/images/pastry/7-danish-raisin.png' },
    { id: 20, kategori: 'pastry', nama: 'Kue Soes', tipe: 'Pastry', harga: 10100, rating: 4.9, gambar: '../assets/images/pastry/8-kue-soes.png' },
    { id: 21, kategori: 'pastry', nama: 'Tuna Corn Puff', tipe: 'Pastry', harga: 11900, rating: 4.9, gambar: '../assets/images/pastry/9-tuna-corn-puff.png' },
    { id: 22, kategori: 'pastry', nama: 'Almond Pastry', tipe: 'Pastry', harga: 11900, rating: 4.9, gambar: '../assets/images/pastry/10-almond-pastry.png' },
    { id: 23, kategori: 'pastry', nama: 'Apple Pie', tipe: 'Pastry', harga: 16500, rating: 4.9, gambar: '../assets/images/pastry/11-apple-pie.png' },
    { id: 24, kategori: 'pastry', nama: 'Sausage Brood', tipe: 'Pastry', harga: 11900, rating: 4.9, gambar: '../assets/images/pastry/12-sausage-brood.png' },

    // --- Kategori COOKIES ---
    { id: 25, kategori: 'cookies', nama: 'Cookies Coklat', tipe: 'Cookies', harga: 76000, rating: 4.9, gambar: '../assets/images/cookies/1-cookies-coklat.png' },
    { id: 26, kategori: 'cookies', nama: 'Cookies Hati', tipe: 'Cookies', harga: 76000, rating: 4.9, gambar: '../assets/images/cookies/2-cookies-hati.png' },
    { id: 27, kategori: 'cookies', nama: 'Kaasstengels', tipe: 'Cookies', harga: 151500, rating: 4.9, gambar: '../assets/images/cookies/3-kaasstengels.png' },
    { id: 28, kategori: 'cookies', nama: 'Lidah Kucing', tipe: 'Cookies', harga: 92000, rating: 4.9, gambar: '../assets/images/cookies/4-lidah-kucing.png' },
    { id: 29, kategori: 'cookies', nama: 'Nastar', tipe: 'Cookies', harga: 95000, rating: 4.9, gambar: '../assets/images/cookies/5-nastar.png' },
    { id: 30, kategori: 'cookies', nama: 'Putri Salju', tipe: 'Cookies', harga: 95000, rating: 4.9, gambar: '../assets/images/cookies/6-putri-salju.png' },
    { id: 31, kategori: 'cookies', nama: 'Cheese Stick', tipe: 'Cookies', harga: 50500, rating: 4.9, gambar: '../assets/images/cookies/7-cheese-stick.png' },
    { id: 32, kategori: 'cookies', nama: 'Choco Cheese', tipe: 'Cookies', harga: 66500, rating: 4.9, gambar: '../assets/images/cookies/8-choco-cheese.png' },
    { id: 33, kategori: 'cookies', nama: 'Peanut Butter', tipe: 'Cookies', harga: 76500, rating: 4.9, gambar: '../assets/images/cookies/9-peanut-butter.png' },
    { id: 34, kategori: 'cookies', nama: 'Cranberry Corn', tipe: 'Cookies', harga: 72500, rating: 4.9, gambar: '../assets/images/cookies/10-cranberry-corn.png' },
    { id: 35, kategori: 'cookies', nama: 'Soes Kering', tipe: 'Cookies', harga: 36000, rating: 4.9, gambar: '../assets/images/cookies/11-soes-kering.png' },
    { id: 36, kategori: 'cookies', nama: 'Roti Bagelen Keju', tipe: 'Cookies', harga: 33200, rating: 4.9, gambar: '../assets/images/cookies/12-roti-bagelen-keju.png' },

    // --- Kategori ROTI ---
    { id: 37, kategori: 'roti', nama: 'Choco Custard', tipe: 'Roti', harga: 14600, rating: 4.9, gambar: '../assets/images/roti/1-choco-custard.png' },
    { id: 38, kategori: 'roti', nama: 'Roti Kelapa', tipe: 'Roti', harga: 11000, rating: 4.9, gambar: '../assets/images/roti/2-roti-kelapa.png' },
    { id: 39, kategori: 'roti', nama: 'Garlic Cream', tipe: 'Roti', harga: 16900, rating: 4.9, gambar: '../assets/images/roti/3-garlic-cream.png' },
    { id: 40, kategori: 'roti', nama: 'Coklat Muisjes', tipe: 'Roti', harga: 11300, rating: 4.9, gambar: '../assets/images/roti/4-coklat-muisjes.png' },
    { id: 41, kategori: 'roti', nama: 'Abon Sapi', tipe: 'Roti', harga: 15100, rating: 4.9, gambar: '../assets/images/roti/5-abon-sapi.png' },
    { id: 42, kategori: 'roti', nama: 'Abon Sapi Pedas', tipe: 'Roti', harga: 15100, rating: 4.9, gambar: '../assets/images/roti/6-abon-sapi-pedas.png' },
    { id: 43, kategori: 'roti', nama: 'Bakso Sapi', tipe: 'Roti', harga: 15400, rating: 4.9, gambar: '../assets/images/roti/7-bakso-sapi.png' },
    { id: 44, kategori: 'roti', nama: 'Cheese Raisin', tipe: 'Roti', harga: 14600, rating: 4.9, gambar: '../assets/images/roti/8-cheese-raisin.png' },
    { id: 45, kategori: 'roti', nama: 'Roti Coklat', tipe: 'Roti', harga: 11300, rating: 4.9, gambar: '../assets/images/roti/9-roti-coklat.png' },
    { id: 46, kategori: 'roti', nama: 'Smooked Beef', tipe: 'Roti', harga: 18100, rating: 4.9, gambar: '../assets/images/roti/10-smoked-beef.png' },
    { id: 47, kategori: 'roti', nama: 'Ikan Tuna', tipe: 'Roti', harga: 15100, rating: 4.9, gambar: '../assets/images/roti/11-ikan-tuna.png' },
    { id: 48, kategori: 'roti', nama: 'Roti Srikaya', tipe: 'Roti', harga: 11700, rating: 4.9, gambar: '../assets/images/roti/12-isi-srikaya.png' },
];

// ==========================================
// 2. STATE &inisialisasi
// ==========================================
let cart = JSON.parse(localStorage.getItem('alfazza_cart')) || [];

document.addEventListener("DOMContentLoaded", () => {
    loadComponent("header-placeholder", "header.html");
    loadComponent("footer-placeholder", "footer.html");
    renderKategoriProduk();
    renderDetailProduk();
    if(window.location.pathname.includes('checkout.html')) renderCheckoutSummary();
});

// ==========================================
// 3. FUNGSI KERANJANG (CART) UTAMA
// ==========================================
function saveCart() {
    localStorage.setItem('alfazza_cart', JSON.stringify(cart));
    updateCartUI();
}

// Fungsi serbaguna untuk tambah barang (dari katalog atau detail)
function addToCart(nama, harga, gambar, qty = 1) {
    let item = cart.find(i => i.name === nama);
    if (item) item.quantity += qty;
    else cart.push({ name: nama, price: harga, quantity: qty, image: gambar });
    
    saveCart();
    alert(`${qty} ${nama} berhasil ditambahkan!`);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
}

function updateCartUI() {
    const elCount = document.getElementById('cart-count');
    const elItems = document.querySelector('.cart-items');
    const elTotal = document.querySelector('.cart-total span:nth-child(2)');
    
    if (elCount) elCount.textContent = cart.reduce((tot, item) => tot + item.quantity, 0);

    if (elItems) {
        let grandTotal = 0;
        elItems.innerHTML = cart.map((item, index) => {
            let sub = item.price * item.quantity;
            grandTotal += sub;
            return `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}">
                    <div class="item-detail">
                        <h4>${item.name}</h4><p>Qty: ${item.quantity}</p>
                        <span>Rp ${item.price.toLocaleString('id-ID')}</span>
                    </div>
                    <button class="remove-item" onclick="removeFromCart(${index})"><i class="fas fa-trash"></i></button>
                </div>`;
        }).join('');
        if (elTotal) elTotal.textContent = `Rp ${grandTotal.toLocaleString('id-ID')}`;
    }
}

// ==========================================
// 4. FUNGSI RENDER HALAMAN (Kategori & Detail)
// ==========================================
function renderKategoriProduk() {
    const grid = document.getElementById('kategori-grid');
    if (!grid) return;

    const filterJenis = new URLSearchParams(window.location.search).get('jenis');
    let produk = filterJenis ? produkToko.filter(i => i.kategori === filterJenis) : produkToko;
    
    const judul = document.getElementById('judul-kategori');
    if (judul && filterJenis) judul.textContent = `Aneka ${filterJenis.charAt(0).toUpperCase() + filterJenis.slice(1)}`;

    grid.innerHTML = produk.map(p => `
        <div class="kategori-card product-card-new">
            <div class="card-header-new">
                <div class="title-area"><h4>${p.nama}</h4><span>${p.tipe}</span></div>
            </div>
            <div class="rating-badge">⭐ ${p.rating}</div>
            <img src="${p.gambar}" alt="${p.nama}" class="product-img">
            <div class="card-footer-new">
                <p class="price">Rp ${p.harga.toLocaleString('id-ID')}</p>
                <button class="btn-detail" onclick="window.location.href='detail.html?id=${p.id}'">Detail</button>
            </div>
        </div>`).join('');
}

function renderDetailProduk() {
    const idParam = parseInt(new URLSearchParams(window.location.search).get('id'));
    const titleElem = document.getElementById('product-title');
    if (!titleElem) return;

    const data = produkToko.find(p => p.id === idParam);
    if (!data) {
        titleElem.innerText = "Produk tidak ditemukan!";
        return;
    }

    // Set Data Detail
    titleElem.innerText = data.nama;
    document.getElementById('product-price').innerText = `Rp ${data.harga.toLocaleString('id-ID')}`;
    document.getElementById('product-tagline').innerText = `${data.nama} - ${data.tipe}`;
    document.getElementById('product-description').innerText = data.deskripsi || "Deskripsi belum tersedia.";
    document.getElementById('product-img').src = data.gambar;
    if(document.getElementById('bahan')) document.getElementById('bahan').innerText = data.bahan || "-";

    // Ganti tombol Add to Cart di halaman detail untuk memakai fungsi addToCart dengan parameter lengkap
    const btnAddQty = document.querySelector('.btn-primary-cart');
    if(btnAddQty) {
        btnAddQty.onclick = () => {
            const qty = parseInt(document.getElementById('qty').value) || 1;
            addToCart(data.nama, data.harga, data.gambar, qty);
        };
    }

    // Render 4 Rekomendasi
    const gridRek = document.getElementById('recommendation-grid');
    if (gridRek) {
        gridRek.innerHTML = produkToko.filter(p => p.id !== data.id).slice(0, 4).map(item => `
            <div class="card-rek">
                <div class="card-rek-header">
                    <div class="title-cat"><h3>${item.nama}</h3><span>${item.tipe}</span></div>
                </div>
                <div class="card-rek-img-wrapper">
                    <div class="rek-rating"><i class="fa-solid fa-star"></i> ${item.rating}</div>
                    <img src="${item.gambar}" alt="${item.nama}">
                </div>
                <div class="card-rek-footer">
                    <p class="rek-price">Rp ${item.harga.toLocaleString('id-ID')}</p>
                    <button class="btn-detail-rek" onclick="window.location.href='detail.html?id=${item.id}'">Detail</button>
                </div>
            </div>`).join('');
    }
}

// Fungsi tombol +/- di halaman detail
function changeQty(amount) {
    const qtyInput = document.getElementById('qty');
    if(qtyInput && parseInt(qtyInput.value) + amount >= 1) {
        qtyInput.value = parseInt(qtyInput.value) + amount;
    }
}

// ==========================================
// 5. CHECKOUT & UTILITY
// ==========================================
function renderCheckoutSummary() {
    const list = document.getElementById('checkout-order-list');
    if (!list) return;

    if (cart.length === 0) {
        alert("Keranjang kosong!");
        window.location.href = 'index.html';
        return;
    }

    let grandTotal = 0;
    list.innerHTML = cart.map(item => {
        let sub = item.price * item.quantity;
        grandTotal += sub;
        return `<div class="order-item" style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                    <span>${item.quantity}x ${item.name}</span><span>Rp ${sub.toLocaleString('id-ID')}</span>
                </div>`;
    }).join('');

    document.getElementById('checkout-subtotal').textContent = `Rp ${grandTotal.toLocaleString('id-ID')}`;
    document.getElementById('checkout-grandtotal').textContent = `Rp ${grandTotal.toLocaleString('id-ID')}`;
}

function prosesCheckoutWA() {
    const form = ['nama', 'nohp', 'alamat'].map(id => document.getElementById(id).value);
    if (form.includes('')) return alert("Lengkapi Nama, No HP, dan Alamat!");

    let wa = `Halo *AL-Fazza Bakery*, saya pesan:\n\n*PEMESAN*\nNama: ${form[0]}\nHP: ${form[1]}\nAlamat: ${form[2]}\n\n*PESANAN*\n`;
    let total = 0;
    
    cart.forEach(i => {
        let sub = i.price * i.quantity; total += sub;
        wa += `- ${i.quantity}x ${i.name} (Rp ${sub.toLocaleString('id-ID')})\n`;
    });
    
    window.open(`https://wa.me/6285183203378?text=${encodeURIComponent(wa + `\n*Total: Rp ${total.toLocaleString('id-ID')}*`)}`);
}

// Fungsi Fetch Component
function loadComponent(id, file) {
    fetch(file).then(res => res.text()).then(html => {
        document.getElementById(id).innerHTML = html;
        if (id === "header-placeholder") {
            // Pasang event listener keranjang setelah header dimuat
            document.getElementById('cart-btn')?.addEventListener('click', () => {
                document.getElementById('cart-sidebar').classList.add('active');
                document.getElementById('cart-overlay').classList.add('active');
            });
            document.querySelectorAll('#close-cart, #cart-overlay').forEach(el => 
                el.addEventListener('click', () => {
                    document.getElementById('cart-sidebar').classList.remove('active');
                    document.getElementById('cart-overlay').classList.remove('active');
                })
            );
            document.querySelector('.btn-checkout')?.addEventListener('click', () => {
                if(cart.length === 0) return alert("Keranjang kosong!");
                window.location.href = 'checkout.html';
            });
            updateCartUI(); // Update UI keranjang yang ada di header
        }
    });
}