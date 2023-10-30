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
const dataInput = (yourAdmin, yesImage, index) => {
  // silahkan rubah disini
  let nnda = 0
  let hari = "senin"
  if (index > 7 && index <= 13) {
    nnda = 1
    hari = "selasa"
  } else if (index > 13 && index <= 20) {
    nnda = 2
    hari = "rabu"
  } else if (index > 20 && index <= 24) {
    nnda = 3
    hari = "kamis"
  } else if (index > 24) {
    nnda = 4
    hari = "jum'at"
  }


  const data = {
    chat_id: faker.string.uuid(),
    avatar_img: yourAdmin ? "" : avatar,
    isYour: yourAdmin,
    name: yourAdmin ? "admin" : "B Wahyu Isni",
    time: `${hari}/0${nnda}-April-2023`,
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
    dataToWrite.push(dataInput(randomAdmin, randomImage, index))
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