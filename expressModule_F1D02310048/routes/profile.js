const express = require('express');
const router = express.Router();

const profiles = [
  { id: 1, nim: 'F1D02310048', nama: 'Fadila Rahmania', jurusan: 'Teknik Informatika' },
  { id: 2, nim: 'F1D02310067', nama: 'Fitri Nufa Dastana', jurusan: 'Kedokteran' },
  { id: 3, nim: 'F1D02310098', nama: 'Yusri Abdi', jurusan: 'Teknik Nuklir' },
  { id: 4, nim: 'F1D02310123', nama: 'Ghilvana Tania', jurusan: 'Sistem Informasi' },
  { id: 5, nim: 'F1D02310145', nama: 'Izzat Naziefa', jurusan: 'Teknik Mesin' },
  { id: 6, nim: 'F1D02310098', nama: 'Wahyu Abroor', jurusan: 'Teknik Nuklir' },
  { id: 7, nim: 'F1D02310167', nama: 'Pandu Alam', jurusan: 'Proyek Perangkat Lunak' }
];

// GET semua profile
router.get('/', (req, res) => {
  res.send(`
    <h2>Daftar Profile Mahasiswa</h2>
    <ul>
      ${profiles.map(p => `<li>${p.nama} - ${p.nim} (${p.jurusan})</li>`).join('')}
    </ul>
  `);
});

// GET profile berdasarkan Id
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const profile = profiles.find(p => p.id === id);

  if (profile) {
    res.send(`
      <h3>Detail Profile</h3>
      <p><b>Nama:</b> ${profile.nama}</p>
      <p><b>NIM:</b> ${profile.nim}</p>
      <p><b>Jurusan:</b> ${profile.jurusan}</p>
    `);
  } else {
    res.status(404).send("<h3>Profile tidak dapat ditemukan</h3>");
  }
});

module.exports = router;
