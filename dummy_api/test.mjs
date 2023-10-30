const data = [{
    "chat_id": "18fe4771-2d04-4629-a29d-b2d48593a0b0",
    "avatar_img": "https://avatars.githubusercontent.com/u/95208720",
    "isYour": false,
    "name": "B Wahyu Isni",
    "time": "rabu/02-April-2023",
    "balasan_id": "",
    "imaga_pesan": "",
    "pesan": "Benevolentia cumque adopto appono ademptio. Aut ascisco crudelis cognomen cogito statim error. Terror quis ars subvenio defungo calamitas ancilla assentator delectatio circumvenio."
  },
  {
    "chat_id": "3e5b603b-33a5-4bca-8bf7-74b4fba3e5e4",
    "avatar_img": "https://avatars.githubusercontent.com/u/95208720",
    "isYour": false,
    "name": "B Wahyu Isni",
    "time": "senin/00-April-2023",
    "balasan_id": "",
    "imaga_pesan": "https://loremflickr.com/640/480/cats?lock=805885045637120",
    "pesan": "Volubilis occaecati tandem adnuo ars defleo coerceo aeternus testimonium. Contego cedo velut. Suscipit tyrannus fuga tepidus summopere."
  },
  // Tambahkan data lainnya di sini
];

const chatIdYangDicari = "18fe4771-2d04-4629-a29d-b2d48593a0b0"; // Ganti dengan chat_id yang Anda inginkan

const dataDitemukan = data.find(item => item.chat_id === chatIdYangDicari);

if (dataDitemukan) {
  console.log("Data ditemukan:");
  console.log(dataDitemukan);
} else {
  console.log("Data tidak ditemukan");
}