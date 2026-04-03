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

// ==========================================
// 1. DATA PRODUK
// ==========================================
const daftarProduk = {
    "cheese": {
        nama: "Cheese",
        kategori: "Kue Bolu",
        harga: "Rp 13.500",
        gambar: "../assets/images/cheese1 1.png", 
        deskripsi: "Premium Cheese Long Cake. Nikmati kelembutan roti sisir premium yang dipadukan dengan cream cheese gurih dan taburan keju cheddar parut yang melimpah.",
        bahan: "Keju Cheddar Premium, Cream Cheese, Tepung Terigu, Telur, Mentega"
    },
    "meses": {
        nama: "Meses",
        kategori: "Kue Bolu",
        harga: "Rp 11.900",
        gambar: "../assets/images/coklat 1.png", 
        deskripsi: "Roti lembut dengan olesan krim manis dan taburan meses cokelat klasik yang melimpah. Sangat cocok untuk teman minum teh di sore hari.",
        bahan: "Meses Cokelat, Krim Manis, Tepung Terigu, Mentega, Ragi"
    },
    "coffee_raisin": {
        nama: "Coffee Raisin",
        kategori: "Bolu Puding",
        harga: "Rp 31.700",
        gambar: "../assets/images/kuepuding 1.png", 
        deskripsi: "Perpaduan unik dan lezat antara bolu lembut aroma kopi dan lapisan puding segar, dilengkapi dengan kismis pilihan di dalamnya.",
        bahan: "Ekstrak Kopi Pilihan, Kismis, Agar-agar Puding, Telur, Gula"
    },
    "roti_coklat": {
        nama: "Roti Coklat",
        kategori: "Roti",
        harga: "Rp 11.000",
        gambar: "../assets/images/roticoklat 1.png", 
        deskripsi: "Roti manis dengan tekstur yang sangat empuk dan isian cokelat lumer yang meleleh di mulut pada gigitan pertama.",
        bahan: "Cokelat Premium Lumer, Tepung Terigu Protein Tinggi, Susu Segar, Mentega"
    },
    "coklat": {
        nama: "Coklat",
        kategori: "Bolu Coklat",
        harga: "Rp 79.500",
        gambar: "../assets/images/cakecoklat 1.png", 
        deskripsi: "Bolu cokelat utuh dengan tekstur padat namun lembut. Memiliki cita rasa cokelat pekat yang premium, cocok untuk acara keluarga.",
        bahan: "Cokelat Blok Premium, Cokelat Bubuk, Telur, Mentega Wisman, Gula Pasir"
    },
    "chiffon_pandan": {
        nama: "Chiffon Pandan",
        kategori: "Bolu Pandan",
        harga: "Rp 76.500",
        gambar: "../assets/images/kuepandan 1.png", 
        deskripsi: "Kue Chiffon rasa pandan asli yang sangat ringan, mengembang sempurna, dan harum daun pandan segar. Bebas bahan pengawet.",
        bahan: "Sari Daun Pandan Asli, Santan Kelapa, Telur, Tepung Terigu, Minyak Nabati"
    }
};

// ==========================================
// 2. LOGIKA DETAIL PRODUK & REKOMENDASI
// ==========================================
document.addEventListener("DOMContentLoaded", function() {
    
    // Fungsi untuk halaman Detail
    const params = new URLSearchParams(window.location.search);
    const idProduk = params.get('id');
    const titleElem = document.getElementById('product-title');

    // Cek apakah kita ada di halaman detail.html dan produk ditemukan
    if (titleElem && idProduk && daftarProduk[idProduk]) {
        
        const data = daftarProduk[idProduk]; 

        // 1. Masukkan data utama ke HTML
        titleElem.innerText = data.nama;
        
        const priceElem = document.getElementById('product-price');
        if(priceElem) priceElem.innerText = data.harga;
        
        const taglineElem = document.getElementById('product-tagline');
        if(taglineElem) taglineElem.innerText = `${data.nama} - ${data.kategori}`;
        
        const descElem = document.getElementById('product-description');
        if(descElem) descElem.innerText = data.deskripsi;
        
        const imgElem = document.getElementById('product-img');
        if(imgElem) imgElem.src = data.gambar;

        // Memasukkan bahan utama sesuai HTML barumu
        const bahanElem = document.getElementById('bahan');
        if(bahanElem) bahanElem.innerText = data.bahan;

        // 2. Logika "Mungkin Anda Suka" (Sesuai Desain Baru)
        const gridRek = document.getElementById('recommendation-grid');
        if (gridRek) {
            let htmlRek = "";
            // Ambil 4 produk lain selain yang sedang dilihat
            const produkLain = Object.keys(daftarProduk).filter(k => k !== idProduk).slice(0, 4);
            
            produkLain.forEach(k => {
                const item = daftarProduk[k];
                htmlRek += `
                    <div class="card-rek">
                        <div class="card-rek-header">
                            <div class="title-cat">
                                <h3>${item.nama}</h3>
                                <span>${item.kategori}</span>
                            </div>
                        </div>
                        
                        <div class="card-rek-img-wrapper">
                            <div class="rek-rating">
                                <i class="fa-solid fa-star"></i> 4.9
                            </div>
                            <img src="${item.gambar}" alt="${item.nama}">
                        </div>
                        
                        <div class="card-rek-footer">
                            <p class="rek-price">${item.harga}</p>
                            <button class="btn-detail-rek" onclick="window.location.href='detail.html?id=${k}'">Detail</button>
                        </div>
                    </div>
                `;
            });
            gridRek.innerHTML = htmlRek;
        }
    } else if (titleElem && !idProduk) {
        // Jika buka detail.html langsung tanpa klik dari katalog
        titleElem.innerText = "Produk tidak ditemukan!";
    }
});

// ==========================================
// 3. FUNGSI KERANJANG & QUANTITY
// ==========================================
function changeQty(amount) {
    const qtyInput = document.getElementById('qty');
    if(qtyInput) {
        let current = parseInt(qtyInput.value);
        if (current + amount >= 1) qtyInput.value = current + amount;
    }
}

function addWithQty() {
    const qtyInput = document.getElementById('qty');
    const titleElem = document.getElementById('product-title');
    
    if(qtyInput && titleElem) {
        const qty = parseInt(qtyInput.value);
        const nama = titleElem.innerText;
        alert(`Berhasil menambahkan ${qty} buah ${nama} ke keranjang!`);
    }
}

// Fungsi Beli dari index.html
function addToCart(namaProduk, harga, gambar) {
    alert(`Berhasil menambahkan ${namaProduk} ke keranjang!`);
}