import fs from 'fs'
import {
  faker
} from "@faker-js/faker"

// hasil data yang faker yang di inginkan
const file = {
  nama_file: 'community_data_fake', // nama file tidak usah pake akhiran .json dan berbentuk string
  jumlah_data_faker: 40, // berbentuk number atau intergral
}

// format data file yang ingin di isi
const dataInput = () => {
  // silahkan rubah disini
  const data = {
    id: faker.string.uuid(),
    nama_komunitas: faker.company.buzzAdjective(),
    logo_komunitas: faker.image.urlLoremFlickr({
      category: 'sports'
    }),
    pesan_belum_dibaca: faker.number.int({
      min: 1,
      max: 1000
    })
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
    dataToWrite.push(dataInput())
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