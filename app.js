const express = require("express"); // import module express
const app = express(); // membuat sebuah aplikasi express
const router = express.Router(); // membuat objek router baru
const port = 3000; // deklarasi port

// Mendefinisikan rute untuk halaman utama
router.get("/", (req, res) => {
  res.sendFile("./home.html", { root: __dirname });
});
// Mendefinisikan rute untuk halaman about
router.get("/about", (req, res) => {
  res.sendFile("./about.html", { root: __dirname });
});

// Mendefinisikan rute untuk halaman contact
router.get("/contact", (req, res) => {
  res.sendFile("./contact.html", { root: __dirname });
});

// Menggunakan router untuk menangani permintaan HTTP
app.use(router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
