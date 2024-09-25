// script.js

document.getElementById('pengaduanForm').addEventListener('submit', function(event) {
    let nama = document.getElementById('nama').value;
    let email = document.getElementById('email').value;
    let nomorHp = document.getElementById('nomor_hp').value;
    let isiPengaduan = document.getElementById('isi_pengaduan').value;
    
    // Validasi Nama
    if (nama === '') {
        alert('Nama harus diisi!');
        event.preventDefault();
        return;
    }
    
    // Validasi Email
    if (email === '') {
        alert('Email harus diisi!');
        event.preventDefault();
        return;
    }
    
    // Validasi Nomor HP
    if (nomorHp === '' || isNaN(nomorHp)) {
        alert('Nomor HP harus diisi dengan angka!');
        event.preventDefault();
        return;
    }
    
    // Validasi Isi Pengaduan
    if (isiPengaduan === '') {
        alert('Isi Pengaduan harus diisi!');
        event.preventDefault();
        return;
    }
    
    alert('Form berhasil disubmit!');
});
