function hitungVolumedanLuasPermukaanBalok(panjang, lebar,tinggi) {
    volume = panjang * lebar * tinggi
    luasPermukaan = 2 * (panjang * lebar) + (panjang * tinggi) + (lebar * tinggi)

    document.write("panjang : "+panjang+"<br>")
    document.write("lebar : "+lebar+"<br>")
    document.write("tinggi: "+tinggi+"<br>")
    document.write("Volume Balok : "+volume+"<br>")
    document.write("Luas Permukaan Balok "+luasPermukaan)
}
panjang = prompt("masukkan nilai panjang :")
lebar = prompt("masukkan nilai lebar :")
tinggi = prompt("masukkan tinggi :")
hitungVolumedanLuasPermukaanBalok(panjang,lebar,tinggi)
