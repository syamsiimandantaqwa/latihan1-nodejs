const fs = require("fs")
const {biodata} = require("./modulebiodata")

const {nama, ttl, tglLahir, alamat} = biodata();

const output = 
`Nama : ${nama}
Tempat Lahir : ${ttl}
Tanggal Lahir : ${tglLahir}
Alamat : ${alamat}
`

fs.writeFileSync("biodataku.txt", output, "utf-8")
console.log("silahkan cek file biodataku.txt atau bisa lihat console di bawah ini : ")

const biodataku = fs.readFileSync("biodataku.txt", "utf-8")
console.log(biodataku)
