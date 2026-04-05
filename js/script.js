// ==========================================
// 1. DATA PRODUK (Disatukan & Disempurnakan)
// ==========================================
// Semua data produk kini terpusat di satu array ini
const produkToko = [
    // --- Kategori BOLU ---
    { id: 1, kategori: 'bolu', nama: 'Cheese Cake', tipe: 'Kue Bolu', harga: 13500, rating: 4.9, gambar: '../assets/images/bolu/1-bolukeju.png', deskripsi: 'Premium Cheese Long Cake dengan roti sisir premium dan cream cheese gurih.', bahan: 'Keju Cheddar, Cream Cheese, Tepung Terigu, Telur' },
    { id: 2, kategori: 'bolu', nama: 'Meses', tipe: 'Kue Bolu', harga: 11900, rating: 4.9, gambar: '../assets/images/bolu/2-bolumeses.png', deskripsi: 'Roti lembut dengan olesan krim manis dan taburan meses cokelat klasik.', bahan: 'Meses Cokelat, Krim Manis, Tepung Terigu, Mentega' },
    { id: 3, kategori: 'bolu', nama: 'Coffee Raisin', tipe: 'Bolu Puding', harga: 31700, rating: 4.9, gambar: '../assets/images/bolu/3-bolupuding.png', deskripsi: 'Bolu aroma kopi berlapis puding segar dengan kismis pilihan.', bahan: 'Ekstrak Kopi, Kismis, Agar-agar, Telur' },
    { id: 4, kategori: 'bolu', nama: 'Coklat', tipe: 'Bolu Coklat', harga: 79500, rating: 4.9, gambar: '../assets/images/bolu/4-bolucoklat.png', deskripsi: 'Bolu cokelat pekat yang sangat lembut dengan lapisan ganache cokelat premium.', bahan: 'Cokelat Bubuk, Dark Chocolate, Tepung Terigu, Mentega, Telur' },
    { id: 5, kategori: 'bolu', nama: 'Chiffon Pandan', tipe: 'Bolu Pandan', harga: 76500, rating: 4.9, gambar: '../assets/images/bolu/5-bolupandan.png', deskripsi: 'Chiffon cake super ringan dan mengembang sempurna dengan aroma pandan asli yang harum.', bahan: 'Ekstrak Pandan, Santan, Tepung Terigu, Gula Pasir, Telur' },
    { id: 6, kategori: 'bolu', nama: 'Chiffon Keju', tipe: 'Bolu', harga: 85000, rating: 4.9, gambar: '../assets/images/bolu/6-chiffonkeju.png', deskripsi: 'Kue chiffon bertekstur selembut kapas dengan taburan keju parut gurih di dalam dan luarnya.', bahan: 'Keju Cheddar, Susu Segar, Tepung Terigu, Minyak Nabati, Telur' },
    { id: 7, kategori: 'bolu', nama: 'Bolu Lemon', tipe: 'Bolu Gulung', harga: 103000, rating: 4.9, gambar: '../assets/images/bolu/7-bolulemon.png', deskripsi: 'Bolu gulung segar dengan olesan selai lemon manis asam yang menggugah selera.', bahan: 'Sari Lemon Asli, Selai Lemon, Tepung Terigu, Telur, Mentega' },
    { id: 8, kategori: 'bolu', nama: 'Bolu Mocca', tipe: 'Bolu Gulung', harga: 103000, rating: 4.9, gambar: '../assets/images/bolu/8-bolugulungmoca.png', deskripsi: 'Bolu gulung klasik dengan olesan krim moka khas dan taburan meises cokelat.', bahan: 'Pasta Moka, Krim Moka, Meses Cokelat, Tepung Terigu, Telur' },
    { id: 9, kategori: 'bolu', nama: 'Bolu Keju', tipe: 'Bolu Gulung', harga: 119500, rating: 4.9, gambar: '../assets/images/bolu/9-bolugulungkeju.png', deskripsi: 'Bolu gulung lembut yang padat dengan lapisan krim keju dan taburan keju cheddar melimpah.', bahan: 'Keju Cheddar, Krim Mentega, Tepung Terigu, Telur' },
    { id: 10, kategori: 'bolu', nama: 'Bolu Pandan', tipe: 'Bolu Gulung', harga: 85000, rating: 4.9, gambar: '../assets/images/bolu/10-bolugulungpandan.png', deskripsi: 'Bolu gulung pandan tradisional dengan isi krim vanilla yang lembut dan manis pas.', bahan: 'Ekstrak Pandan, Krim Vanilla, Tepung Terigu, Telur' },
    { id: 11, kategori: 'bolu', nama: 'Raisin Muffin', tipe: 'Bolu', harga: 11900, rating: 4.9, gambar: '../assets/images/bolu/11-raisinmuffin.png', deskripsi: 'Muffin klasik yang padat namun lembut, dipenuhi dengan potongan kismis manis di setiap gigitannya.', bahan: 'Kismis, Tepung Terigu, Mentega, Telur, Baking Powder' },
    { id: 12, kategori: 'bolu', nama: 'Coklat Muffin', tipe: 'Bolu', harga: 11900, rating: 4.9, gambar: '../assets/images/bolu/12-chocolatemuffin.png', deskripsi: 'Muffin cokelat kaya rasa dengan taburan choco chips lezat yang lumer di mulut.', bahan: 'Bubuk Kakao, Choco Chips, Tepung Terigu, Mentega, Susu' },
    
    // --- Kategori PASTRY ---
    { id: 13, kategori: 'pastry', nama: 'Mushroom', tipe: 'Pastry', harga: 11900, rating: 4.9, gambar: '../assets/images/pastry/1-mushroom-pastry.png', deskripsi: 'Pastry renyah dengan isian krim jamur gurih yang creamy dan kaya rempah.', bahan: 'Jamur Champignon, Krim Susu, Kulit Pastry, Bawang Bombay' },
    { id: 14, kategori: 'pastry', nama: 'Chicken Pies', tipe: 'Pastry', harga: 11900, rating: 4.9, gambar: '../assets/images/pastry/2-chicken-pie.png', deskripsi: 'Pai gurih dengan isian daging ayam cincang, wortel, dan kentang dalam saus creamy yang nikmat.', bahan: 'Daging Ayam Cincang, Sayuran Campur, Susu, Kulit Pie' },
    { id: 15, kategori: 'pastry', nama: 'Croissant Penyet', tipe: 'Pastry', harga: 11600, rating: 4.9, gambar: '../assets/images/pastry/3-croissant-penyet.png', deskripsi: 'Inovasi croissant viral yang dipipihkan hingga renyah maksimal, berlapis mentega gurih.', bahan: 'Adonan Croissant, Mentega Premium, Ragi, Gula' },
    { id: 16, kategori: 'pastry', nama: 'Cromboloni Coklat', tipe: 'Pastry', harga: 21800, rating: 4.9, gambar: '../assets/images/pastry/4-cromboloni-coklat.png', deskripsi: 'Paduan renyahnya croissant berbentuk roll dengan isian krim cokelat lumer yang melimpah.', bahan: 'Adonan Croissant, Krim Cokelat, Cokelat Leleh, Mentega' },
    { id: 17, kategori: 'pastry', nama: 'Danish Coklat', tipe: 'Pastry', harga: 14100, rating: 4.9, gambar: '../assets/images/pastry/5-danish-coklat.png', deskripsi: 'Kue danish berlapis mentega yang renyah dengan potongan cokelat berkualitas di tengahnya.', bahan: 'Kulit Danish, Cokelat Batang, Mentega, Telur' },
    { id: 18, kategori: 'pastry', nama: 'Danish Keju', tipe: 'Pastry', harga: 16300, rating: 4.9, gambar: '../assets/images/pastry/6-danish-keju.png', deskripsi: 'Pastry manis dan gurih dengan isian krim keju panggang di tengah lapisan danish yang renyah.', bahan: 'Kulit Danish, Cream Cheese, Keju Parut, Mentega' },
    { id: 19, kategori: 'pastry', nama: 'Danish Raisin', tipe: 'Pastry', harga: 13600, rating: 4.9, gambar: '../assets/images/pastry/7-danish-raisin.png', deskripsi: 'Danish pastry klasik yang disajikan dengan taburan kismis manis dan olesan glasir tipis.', bahan: 'Kulit Danish, Kismis, Gula Glasir, Mentega' },
    { id: 20, kategori: 'pastry', nama: 'Kue Soes', tipe: 'Pastry', harga: 10100, rating: 4.9, gambar: '../assets/images/pastry/8-kue-soes.png', deskripsi: 'Kue choux pastry bertekstur ringan dengan isian vla vanilla yang dingin, lembut, dan creamy.', bahan: 'Tepung Terigu, Mentega, Telur, Susu Segar, Vanilla' },
    { id: 21, kategori: 'pastry', nama: 'Tuna Corn Puff', tipe: 'Pastry', harga: 11900, rating: 4.9, gambar: '../assets/images/pastry/9-tuna-corn-puff.png', deskripsi: 'Puff pastry gurih dengan isian paduan ikan tuna berbumbu dan jagung manis.', bahan: 'Kulit Puff Pastry, Ikan Tuna, Jagung Manis, Bawang Bombai' },
    { id: 22, kategori: 'pastry', nama: 'Almond Pastry', tipe: 'Pastry', harga: 11900, rating: 4.9, gambar: '../assets/images/pastry/10-almond-pastry.png', deskripsi: 'Pastry renyah berlapis dengan taburan kacang almond iris dan lapisan gula karamel.', bahan: 'Kulit Pastry, Kacang Almond, Gula Karamel, Mentega' },
    { id: 23, kategori: 'pastry', nama: 'Apple Pie', tipe: 'Pastry', harga: 16500, rating: 4.9, gambar: '../assets/images/pastry/11-apple-pie.png', deskripsi: 'Pie klasik dengan isian apel segar berempah kayu manis yang manis dan sedikit asam.', bahan: 'Buah Apel, Kayu Manis, Gula Palem, Kulit Pie' },
    { id: 24, kategori: 'pastry', nama: 'Sausage Brood', tipe: 'Pastry', harga: 11900, rating: 4.9, gambar: '../assets/images/pastry/12-sausage-brood.png', deskripsi: 'Sosis sapi premium berbalut kulit pastry renyah yang dipanggang hingga keemasan.', bahan: 'Sosis Sapi Premium, Kulit Puff Pastry, Telur, Mentega' },
    { id: 49, kategori: 'pastry', nama: 'Bolen Pisang', tipe: 'Pastry', harga: 30000, rating: 4.9, gambar: '../assets/images/pisangbolen 1.png', deskripsi: 'Perpaduan pisang dan cokelat lumer atau keju gurih yang dibalut kulit pastry berlapis yang renyah di luar namun lembut di dalam.', bahan: 'Tepung Terigu, Korsvet, Susu, Pisang, Coklat/Keju Batang' },

    // --- Kategori COOKIES ---
    { id: 25, kategori: 'cookies', nama: 'Cookies Coklat', tipe: 'Cookies', harga: 76000, rating: 4.9, gambar: '../assets/images/cookies/1-cookies-coklat.png', deskripsi: 'Kue kering cokelat klasik yang renyah dengan rasa cokelat pekat yang otentik.', bahan: 'Bubuk Cokelat, Tepung Terigu, Mentega, Telur, Gula' },
    { id: 26, kategori: 'cookies', nama: 'Cookies Hati', tipe: 'Cookies', harga: 76000, rating: 4.9, gambar: '../assets/images/cookies/2-cookies-hati.png', deskripsi: 'Kue kering berbentuk hati yang manis dan cantik, cocok untuk bingkisan atau camilan.', bahan: 'Tepung Terigu, Mentega, Gula Halus, Telur, Vanilla' },
    { id: 27, kategori: 'cookies', nama: 'Kaasstengels', tipe: 'Cookies', harga: 151500, rating: 4.9, gambar: '../assets/images/cookies/3-kaasstengels.png', deskripsi: 'Kue kering gurih khas Belanda dengan paduan keju edam dan cheddar premium yang renyah.', bahan: 'Keju Edam, Keju Cheddar, Mentega, Tepung Terigu, Kuning Telur' },
    { id: 28, kategori: 'cookies', nama: 'Lidah Kucing', tipe: 'Cookies', harga: 92000, rating: 4.9, gambar: '../assets/images/cookies/4-lidah-kucing.png', deskripsi: 'Kue kering super tipis dan renyah beraroma vanilla dan mentega yang lumer di mulut.', bahan: 'Putih Telur, Mentega, Tepung Terigu, Gula Halus, Vanilla' },
    { id: 29, kategori: 'cookies', nama: 'Nastar', tipe: 'Cookies', harga: 95000, rating: 4.9, gambar: '../assets/images/cookies/5-nastar.png', deskripsi: 'Kue kering klasik isi selai nanas asli yang asam manis dengan adonan mentega lumer.', bahan: 'Selai Nanas, Mentega Premium, Tepung Terigu, Kuning Telur, Susu Bubuk' },
    { id: 30, kategori: 'cookies', nama: 'Putri Salju', tipe: 'Cookies', harga: 95000, rating: 4.9, gambar: '../assets/images/cookies/6-putri-salju.png', deskripsi: 'Kue kering berbentuk bulan sabit yang lumer, ditaburi gula halus manis seperti salju.', bahan: 'Kacang Mede, Mentega, Tepung Terigu, Gula Halus' },
    { id: 31, kategori: 'cookies', nama: 'Cheese Stick', tipe: 'Cookies', harga: 50500, rating: 4.9, gambar: '../assets/images/cookies/7-cheese-stick.png', deskripsi: 'Stik keju renyah dan gurih yang digoreng hingga keemasan, camilan favorit semua kalangan.', bahan: 'Keju Cheddar, Tepung Tapioka, Telur, Garam' },
    { id: 32, kategori: 'cookies', nama: 'Choco Cheese', tipe: 'Cookies', harga: 66500, rating: 4.9, gambar: '../assets/images/cookies/8-choco-cheese.png', deskripsi: 'Perpaduan unik antara kue kering cokelat manis dengan gurihnya keju di setiap gigitan.', bahan: 'Cokelat Bubuk, Keju Parut, Mentega, Tepung Terigu' },
    { id: 33, kategori: 'cookies', nama: 'Peanut Butter', tipe: 'Cookies', harga: 76500, rating: 4.9, gambar: '../assets/images/cookies/9-peanut-butter.png', deskripsi: 'Kue kering renyah dengan rasa dan aroma selai kacang panggang yang pekat dan gurih.', bahan: 'Selai Kacang, Kacang Cincang, Mentega, Tepung Terigu, Gula Palem' },
    { id: 34, kategori: 'cookies', nama: 'Cranberry Corn', tipe: 'Cookies', harga: 72500, rating: 4.9, gambar: '../assets/images/cookies/10-cranberry-corn.png', deskripsi: 'Kukis renyah berbahan dasar cornflakes berpadu dengan potongan buah cranberry kering yang segar.', bahan: 'Cornflakes, Cranberry Kering, Mentega, Tepung Terigu' },
    { id: 35, kategori: 'cookies', nama: 'Soes Kering', tipe: 'Cookies', harga: 36000, rating: 4.9, gambar: '../assets/images/cookies/11-soes-kering.png', deskripsi: 'Choux pastry versi kering yang digigit renyah kopong dengan rasa gurih mentega yang khas.', bahan: 'Tepung Terigu, Telur, Mentega, Garam' },
    { id: 36, kategori: 'cookies', nama: 'Roti Bagelen Keju', tipe: 'Cookies', harga: 33200, rating: 4.9, gambar: '../assets/images/cookies/12-roti-bagelen-keju.png', deskripsi: 'Roti kering renyah dengan olesan mentega manis dan taburan keju cheddar parut tebal.', bahan: 'Roti Manis Kering, Mentega, Keju Cheddar, Gula Pasir' },

    // --- Kategori ROTI ---
    { id: 37, kategori: 'roti', nama: 'Choco Custard', tipe: 'Roti', harga: 14600, rating: 4.9, gambar: '../assets/images/roti/1-choco-custard.png', deskripsi: 'Roti manis super lembut dengan isian paduan vla custard creamy dan lelehan cokelat.', bahan: 'Tepung Terigu, Krim Custard, Cokelat Leleh, Susu, Ragi' },
    { id: 38, kategori: 'roti', nama: 'Roti Kelapa', tipe: 'Roti', harga: 11000, rating: 4.9, gambar: '../assets/images/roti/2-roti-kelapa.png', deskripsi: 'Roti jadul nan empuk dengan isian unti kelapa parut manis legit yang khas.', bahan: 'Kelapa Parut, Gula Merah, Tepung Terigu, Mentega, Ragi' },
    { id: 39, kategori: 'roti', nama: 'Garlic Cream', tipe: 'Roti', harga: 16900, rating: 4.9, gambar: '../assets/images/roti/3-garlic-cream.png', deskripsi: 'Roti gurih khas Korea dengan lelehan cream cheese dan baluran saus mentega bawang putih.', bahan: 'Bawang Putih, Cream Cheese, Peterseli, Mentega, Tepung Terigu' },
    { id: 40, kategori: 'roti', nama: 'Coklat Muisjes', tipe: 'Roti', harga: 11300, rating: 4.9, gambar: '../assets/images/roti/4-coklat-muisjes.png', deskripsi: 'Roti tawar mini lembut berbalut krim mentega dan taburan meses cokelat tebal di atasnya.', bahan: 'Meses Cokelat, Krim Mentega, Tepung Terigu, Susu Segar, Ragi' },
    { id: 41, kategori: 'roti', nama: 'Abon Sapi', tipe: 'Roti', harga: 15100, rating: 4.9, gambar: '../assets/images/roti/5-abon-sapi.png', deskripsi: 'Roti gulung lembut beroleskan mayones manis gurih dengan taburan abon sapi premium melimpah.', bahan: 'Abon Sapi, Mayones, Daun Bawang, Tepung Terigu, Ragi' },
    { id: 42, kategori: 'roti', nama: 'Abon Sapi Pedas', tipe: 'Roti', harga: 15100, rating: 4.9, gambar: '../assets/images/roti/6-abon-sapi-pedas.png', deskripsi: 'Roti abon sapi dengan sensasi pedas ekstra dari olesan saus sambal pedas manis rahasia.', bahan: 'Abon Sapi Pedas, Saus Sambal, Mayones, Tepung Terigu, Ragi' },
    { id: 43, kategori: 'roti', nama: 'Bakso Sapi', tipe: 'Roti', harga: 15400, rating: 4.9, gambar: '../assets/images/roti/7-bakso-sapi.png', deskripsi: 'Roti gurih unik berisi olahan daging bakso sapi cincang yang dibumbui kecap merica.', bahan: 'Daging Sapi Cincang, Kecap Manis, Bawang Putih, Tepung Terigu, Ragi' },
    { id: 44, kategori: 'roti', nama: 'Cheese Raisin', tipe: 'Roti', harga: 14600, rating: 4.9, gambar: '../assets/images/roti/8-cheese-raisin.png', deskripsi: 'Perpaduan seimbang roti manis bertabur kismis dan potongan dadu keju di setiap gigitannya.', bahan: 'Kismis, Keju Cheddar Dadu, Tepung Terigu, Susu, Ragi' },
    { id: 45, kategori: 'roti', nama: 'Roti Coklat', tipe: 'Roti', harga: 11300, rating: 4.9, gambar: '../assets/images/roti/9-roti-coklat.png', deskripsi: 'Roti manis klasik dengan isian selai cokelat pekat yang lumer ketika digigit.', bahan: 'Selai Cokelat, Tepung Terigu, Susu, Mentega, Ragi' },
    { id: 46, kategori: 'roti', nama: 'Smooked Beef', tipe: 'Roti', harga: 18100, rating: 4.9, gambar: '../assets/images/roti/10-smoked-beef.png', deskripsi: 'Roti gurih dengan isian lembaran daging sapi asap, keju lumer, dan saus mayones.', bahan: 'Daging Sapi Asap, Keju Slice, Mayones, Tepung Terigu, Ragi' },
    { id: 47, kategori: 'roti', nama: 'Ikan Tuna', tipe: 'Roti', harga: 15100, rating: 4.9, gambar: '../assets/images/roti/11-ikan-tuna.png', deskripsi: 'Roti gurih dengan isian tumisan ikan tuna suwir pedas manis dan potongan bawang bombay.', bahan: 'Ikan Tuna Suwir, Bawang Bombay, Mayones, Tepung Terigu, Ragi' },
    { id: 48, kategori: 'roti', nama: 'Roti Srikaya', tipe: 'Roti', harga: 11700, rating: 4.9, gambar: '../assets/images/roti/12-isi-srikaya.png', deskripsi: 'Roti manis lembut dengan isian selai srikaya pandan tradisional yang wangi dan legit.', bahan: 'Selai Srikaya Pandan, Santan, Telur, Tepung Terigu, Ragi' },
];
// ==========================================
// 2. STATE & inisialisasi
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
        <div class="card">
            <div class="card-header">
                <div class="title-cat"><h3>${p.nama}</h3><span>${p.tipe}</span></div>
            </div>
            <div class="card-img-wrapper">
                <div class="rating"><i class="fa-solid fa-star"></i>${p.rating}</div>
                <img src="${p.gambar}" alt="${p.nama}">
            </div>
            <div class="card-footer">
                <p>Rp ${p.harga.toLocaleString('id-ID')}</p>
                <button class="btn-brown" onclick="window.location.href='detail.html?id=${p.id}'">Detail</button>
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
            <div class="card">
                <div class="card-header">
                    <div class="title-cat"><h3>${item.nama}</h3><span>${item.tipe}</span></div>
                </div>
                <div class="card-img-wrapper">
                    <div class="rating"><i class="fa-solid fa-star"></i> ${item.rating}</div>
                    <img src="${item.gambar}" alt="${item.nama}">
                </div>
                <div class="card-footer">
                    <p>Rp ${item.harga.toLocaleString('id-ID')}</p>
                    <button class="btn-brown" onclick="window.location.href='detail.html?id=${item.id}'">Detail</button>
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
    
    window.open(`https://wa.me/6281221315946?text=${encodeURIComponent(wa + `\n*Total: Rp ${total.toLocaleString('id-ID')}*`)}`);
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

            // ---- Hamburger Menu Logic ----
            const hamburger = document.getElementById('hamburger-btn');
            const mainNav = document.getElementById('main-nav');
            const navOverlay = document.getElementById('nav-overlay');
            const categoriesDropdown = document.getElementById('categories-dropdown');

            function openNav() {
                hamburger?.classList.add('active');
                mainNav?.classList.add('open');
                navOverlay?.classList.add('active');
                document.body.style.overflow = 'hidden';
            }

            function closeNav() {
                hamburger?.classList.remove('active');
                mainNav?.classList.remove('open');
                navOverlay?.classList.remove('active');
                document.body.style.overflow = '';
            }

            hamburger?.addEventListener('click', () => {
                mainNav?.classList.contains('open') ? closeNav() : openNav();
            });

            navOverlay?.addEventListener('click', closeNav);

            // Toggle dropdown dalam mobile nav
            categoriesDropdown?.querySelector('.dropbtn')?.addEventListener('click', (e) => {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    categoriesDropdown.classList.toggle('open');
                }
            });

            // Tutup nav saat salah satu link diklik
            mainNav?.querySelectorAll('.nav-links li:not(.dropdown) a, .dropdown-menu a').forEach(link => {
                link.addEventListener('click', closeNav);
            });
        }
    });
}

// ==========================================
// 6. FUNGSI CUSTOM ORDER CAKE
// ==========================================

// Fungsi untuk memunculkan/menyembunyikan field alamat pengiriman
function toggleAlamatCustom() {
    const metode = document.getElementById('co_metode').value;
    const alamatGroup = document.getElementById('co_alamat_group');
    if (metode === 'Dikirim') {
        alamatGroup.style.display = 'block';
    } else {
        alamatGroup.style.display = 'none';
    }
}

// Fungsi Checkout Custom Order via WA
function prosesCustomOrderWA() {
    // Ambil data pemesan
    const nama = document.getElementById('co_nama').value;
    const nohp = document.getElementById('co_nohp').value;
    
    // Ambil spesifikasi
    const ukuran = document.getElementById('co_ukuran').value;
    const bentuk = document.getElementById('co_bentuk').value;
    const rasa = document.getElementById('co_rasa').value;
    const isian = document.getElementById('co_isian').value;
    
    // Ambil desain
    const tema = document.getElementById('co_tema').value;
    const tulisan = document.getElementById('co_tulisan').value || "-";
    
    // Ambil pengiriman & catatan
    const tanggal = document.getElementById('co_tanggal').value;
    const metode = document.getElementById('co_metode').value;
    const alamat = document.getElementById('co_alamat').value || "-";
    const catatan = document.getElementById('co_catatan').value || "-";

    // Validasi input wajib
    if (!nama || !nohp || !tema || !tanggal) {
        return alert("Mohon lengkapi Nama, No HP, Tema/Warna, dan Tanggal Diperlukan!");
    }
    if (metode === "Dikirim" && !alamat) {
        return alert("Mohon isi alamat pengiriman!");
    }

    // Format Pesan WA
    let wa = `Halo *AL-Fazza Bakery*, saya ingin melakukan *Custom Order Cake*.\n\n`;
    wa += `👤 *DATA PEMESAN*\n- Nama: ${nama}\n- HP: ${nohp}\n\n`;
    wa += `🎂 *SPESIFIKASI KUE*\n- Ukuran: ${ukuran}\n- Bentuk: ${bentuk}\n- Base Cake: ${rasa}\n- Isian: ${isian}\n\n`;
    wa += `🎨 *DETAIL DESAIN*\n- Tema/Warna: ${tema}\n- Tulisan di Kue: ${tulisan}\n\n`;
    wa += `🚚 *PENGIRIMAN*\n- Tanggal: ${tanggal}\n- Metode: ${metode}\n`;
    
    if (metode === "Dikirim") {
        wa += `- Alamat: ${alamat}\n`;
    }
    
    wa += `\n📝 *Catatan Tambahan:* ${catatan}\n\n`;
    wa += `_(Saya akan mengirimkan gambar referensi desainnya setelah pesan ini)_`;

    // Ubah nomor WA di bawah ini dengan nomor admin Al-Fazza yang sama seperti di prosesCheckoutWA
    window.open(`https://wa.me/6281221315946?text=${encodeURIComponent(wa)}`);
}