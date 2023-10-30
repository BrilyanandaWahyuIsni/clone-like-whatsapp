import fs from 'fs'
import {
  faker
} from "@faker-js/faker"

const avatar = faker.image.avatar()

// hasil data yang faker yang di inginkan
const file = {
  nama_file: 'chat_data_fake', // nama file tidak usah pake akhiran .json dan berbentuk string
  jumlah_data_faker: 30, // berbentuk number atau intergral
}

// format data file yang ingin di isi
const dataInput = (yourAdmin, yesImage) => {
  // silahkan rubah disini
  const data = {
    chat_id: faker.string.uuid(),
    avatar_img: yourAdmin ? "" : avatar,
    isYour: yourAdmin,
    name: yourAdmin ? "admin" : "B Wahyu Isni",
    time: "",
    balasan_id: "",
    imaga_pesan: yesImage ? faker.image.urlLoremFlickr({
      category: 'cats'
    }) : '',
    pesan: faker.lorem.paragraph(),

  }
  // batas akhir yang dirubah

  return data
};


function Start() {
  // Data yang akan disimpan dalam file JSON
  const dataToWrite = []

  Array.from({
    length: file.jumlah_data_faker
  }, (_, index) => {
    const randomAdmin = Math.floor(Math.random() * 10) % 2 === 0 ? false : true
    const randomImage = Math.floor(Math.random() * 10) % 2 === 0 ? false : true
    dataToWrite.push(dataInput(randomAdmin, randomImage))
  })

  KonversiDataToJson(dataToWrite)
}


// fungsi untuk mengkonversi data ke json dile
function KonversiDataToJson(dataToWrite) {
  // Mengkonversi objek data menjadi JSON
  const jsonData = JSON.stringify(dataToWrite, null, 2);

  // Menyimpan data ke dalam file JSON
  fs.writeFile("dummy_api/json/" + file.nama_file + ".json", jsonData, 'utf8', (err) => {
    if (err) {
      console.error('Gagal menyimpan file JSON:', err);
    } else {
      console.log('File JSON berhasil dibuat!');
    }
  });
}

if (
  import.meta.url ===
  import.meta.url) {
  Start()
}