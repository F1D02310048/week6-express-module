# Assignment: Express.js & Modul Node.js

## Identitas
- **Nama:** Fadila Rahmania
- **NIM:** F1D02310048

---
## Deskripsi Tugas
Program ini merupakan aplikasi sederhana berbasis Node.js dengan framework Express.js. Aplikasi ini berjalan di server lokal dan menyediakan beberapa endpoint untuk menampilkan identitas (nama & NIM), melakukan operasi matematika dasar, serta mengelola data profil dengan konsep route modular. 
---

## Langkah Pengerjaan
1. **Membuat folder project**  
   Folder project diberi nama: `expressModule_F1D02310048`

2. **Inisialisasi Node.js Project**  
   Jalankan perintah berikut di terminal:  
   ```bash
   npm init -y
3. **Intall Express.js**
   Installnya dengan perintah berikut di terminal:
   ```bash
   npm intall express
  4. **Melengkapi Struktur Folder**
     
     <img width="256" height="311" alt="gambar" src="https://github.com/user-attachments/assets/2b2e7818-14a7-48a9-bc53-b12a3861324d" />

     keterangan file:
     - index.js → berisi konfigurasi utama server.
     - utils/math.js → modul lokal dengan fungsi tambah(a, b) dan kali(a, b).
     - routes/profile.js → mengatur endpoint terkait data profil.
     - node_modules, package.json, package-lock.json → otomatis dibuat saat install dependency.
## Hasil
### 1. GET/
Menampilkan Nama dan NIM dapat diakses melalui URL:
👉 http://localhost:3000/
<img width="501" height="301" alt="gambar" src="https://github.com/user-attachments/assets/b3cf10c1-e616-489d-9aca-5b6e1eeb1fe6" />

### 2. GET/hitung
Menampilkan hasil perhitungan sederhana dapat diakses melalui URL:
👉 http://localhost:3000/hitung

<img width="443" height="243" alt="gambar" src="https://github.com/user-attachments/assets/04b9eccb-37be-48dd-bc43-f6d427ab5231" />

### 3. GET/profile
Menampilkan JSON array profile dapat diakses melalui URL:
👉 http://localhost:3000/profile

<img width="715" height="407" alt="gambar" src="https://github.com/user-attachments/assets/257207f7-7874-4f39-985a-ea163dc24d79" />

### 4. GET/profile/1
Menampilkan data profile berdasarkan id dapat diakses melalui URL:
👉 http://localhost:3000/profile/1

<img width="472" height="290" alt="gambar" src="https://github.com/user-attachments/assets/1e11510b-f271-4824-8937-2ea484d15a54" />


