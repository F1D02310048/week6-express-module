const express = require('express');
const app = express();
const PORT = 3000;

// import modul math
const math = require('./utils/math');

// import router profile
const profileRouter = require('./routes/profile');

// route utama
app.get('/', (req, res) => {
  res.send(`
    <h1>Selamat Datang</h1>
    <p>Nama: <b>Fadila Rahmania</b></p>
    <p>NIM: <b>F1D02310048</b></p>
  `);
});

// route hitung penjumlahan
app.get('/hitung', (req, res) => {
  const a = 15;
  const b = 13;
  const hasil = math.tambah(a, b);

  res.send(`
    <h2>Hasil Penjumlahan</h2>
    <p>${a} + ${b} = <b>${hasil}</b></p>
  `);
});

// tambahan route 
app.get('/about', (req, res) => {
  res.send("<h3>Ini adalah server Express untuk latihan modul Node.js </h3>");
});

// gunakan route profile
app.use('/profile', profileRouter);

// jalankan server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});

