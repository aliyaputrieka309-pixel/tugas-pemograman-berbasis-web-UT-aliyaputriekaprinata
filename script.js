// Login
const form = document.getElementById('loginForm');
if(form){
  form.addEventListener('submit', function(e){
    e.preventDefault();
    let email = document.getElementById('email').value;
    let pass = document.getElementById('password').value;
    if(email === userValid.email && pass === userValid.password){
      alert('Login berhasil!');
      window.location.href = 'dashboard.html';
    } else {
      alert('email/password yang anda masukkan salah');
    }
  });
}
function openModal(id){document.getElementById(id).style.display='block';}
function closeModal(id){document.getElementById(id).style.display='none';}

// Greeting
function getGreeting(){
  let jam = new Date().getHours();
  if(jam < 11) return "Selamat Pagi, UT Daerah!";
  if(jam < 15) return "Selamat Siang, UT Daerah!";
  if(jam < 18) return "Selamat Sore, UT Daerah!";
  return "Selamat Malam, UT Daerah!";
}

// Tracking
function cariDO(){
  let no = document.getElementById('noDO').value;
  let hasil = document.getElementById('hasilTracking');
  let data = dataTracking[no];
  if(data){
    hasil.innerHTML = `
      <p><b>Nama:</b> ${data.nama}</p>
      <p><b>Status:</b> <span style="color:green; font-weight:bold;">${data.status}</span></p>
      <div style="background:#ddd; border-radius:10px;"><div style="width:70%; background:#00509d; color:white; text-align:center; padding:5px; border-radius:10px;">70% - Dikirim</div></div>
      <p>Ekspedisi: ${data.ekspedisi}, Tgl: ${data.tgl}, Jenis: ${data.jenis}, Total: ${data.total}</p>
    `;
  } else {
    hasil.innerHTML = `<p style="color:red;">DO tidak ditemukan. Coba DO12345 atau DO67890</p>`;
  }
}

// Stok
let tbody = document.querySelector('#tabelStok tbody');
if(tbody){
  function loadStok(){
    tbody.innerHTML = "";
    dataBahanAjar.forEach(item=>{
      tbody.innerHTML += `<tr><td>${item.kode}</td><td>${item.judul}</td><td>${item.stok}</td><td>${item.gudang}</td></tr>`;
    });
  }
  loadStok();
}
function tambahStok(){
  let kode = document.getElementById('kode').value;
  let judul = document.getElementById('judul').value;
  let stok = document.getElementById('stok').value;
  let gudang = document.getElementById('gudang').value;
  if(!kode || !judul) {alert('Kode dan Judul wajib diisi!'); return;}
  dataBahanAjar.push({kode, judul, stok, gudang});
  document.querySelector('#tabelStok tbody').innerHTML += `<tr><td>${kode}</td><td>${judul}</td><td>${stok}</td><td>${gudang}</td></tr>`;
  alert('Stok baru berhasil ditambahkan via DOM!');
}