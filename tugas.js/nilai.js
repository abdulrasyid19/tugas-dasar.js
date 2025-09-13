// // TUGAS NO 3

const { useDeferredValue } = require("react");

// Program Menghitung Nilai Akhir dan Menentukan Grade (Switch-Case) (IMPLEMENTASI JAVASCRIPT)

// Input nilai (bisa diganti sesuai kebutuhan)
let tugas = 85;
let uts = 75;
let uas = 90;

// Hitung nilai akhir
let nilaiAkhir = (0.3 * tugas) + (0.3 * uts) + (0.4 * uas);

// Tentukan grade menggunakan switch-case
let grade;

switch (true) {
    case (nilaiAkhir >= 85):
        grade = "A";
        break;
    case (nilaiAkhir >= 70):
        grade = "B";
        break;
    case (nilaiAkhir >= 55):
        grade = "C";
        break;
    case (nilaiAkhir >= 40):
        grade = "D";
        break;
    default:
        grade = "E";
}

// Tampilkan hasil
console.log("Nilai Tugas:", tugas);
console.log("Nilai UTS:", uts);
console.log("Nilai UAS:", uas);
console.log("Nilai Akhir:", nilaiAkhir);
console.log("Grade:", grade);



TUGAS NO 4

// LOOPING
let mahasiswa = [
    {nama:"andi", tugas:70, uts:80, uas:90},
    {nama:"joko", tugas:70, uts:77, uas:88},
    {nama:"citra", tugas:60, uts:70, uas:80},
    {nama:"dika", tugas:55, uts:60, uas:70},
    {nama:"dini", tugas:50, uts:55, uas:60},
];

function hitungGrade(nilaiakhir) {
    if(nilaiakhir >= 85) {
       return "A";
    }else if(nilaiakhir >= 80) {
       return "B";
    }else if(nilaiakhir >= 70) {
       return "C"; 
    }else if(nilaiakhir >= 60) {
       return "D"; 
    }else {
       return "E"; 
    }
}

for (let m of mahasiswa) {
    let nilaiakhir = (0.3 * m.tugas) + (0.3 * m.uts) + (0.4 * m.uas);
    let grade = hitungGrade(nilaiakhir);
    console.log(`${m.nama}: nilaiakhir = ${nilaiakhir}: grade = ${grade}`);
}



//TUGAS NO 5

let mahasiswa = [
    {nama:"rani", tugas:70, uts:80, uas:90},
    {nama:"jeje", tugas:70, uts:77, uas:85},
    {nama:"eka", tugas:60, uts:70, uas:80},
    {nama:"riki", tugas:55, uts:65, uas:70},
    {nama:"sintia", tugas:45, uts:60, uas:65},
];


//fungsi menghitung nilai akhir
function hitungNilaiAkhir(tugas, uts, uas) {
    return (0.3 * tugas) + (0.3 * uts) + (0.4 * uas);
}


//fungsi menghitung nilai grade

function tentukanGrade(nilaiakhir) {
    if (nilaiakhir >= 85) {
      return "A";  
    } else if (nilaiakhir >= 80) {
      return "B";
    } else if (nilaiakhir >= 75) {
      return "C";  
    } else if (nilaiakhir >= 70) {
      return "D";  
    } else {
      return "E"  
    }
}


for (let m of mahasiswa) {
    let nilaiakhir=hitungNilaiAkhir(m.tugas, m.uts, m.uas);
    let grade=tentukanGrade(nilaiakhir);
    console.log(`${m.nama} nilaiakhir = ${nilaiakhir} grade = ${grade}`);
}