document
  .getElementById("persegi-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const sisi = parseFloat(document.getElementById("sisi").value);

    if (isNaN(sisi)) {
      alert("Masukkan panjang sisi yang valid");
      return;
    }

    const luas = sisi * sisi;
    document.getElementById("hasilluas").textContent =
      "Luas persegi adalah: " + luas;
  });

document
  .getElementById("persegi2-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const panjang = parseFloat(document.getElementById("panjang").value);

    if (isNaN(panjang)) {
      alert("Masukkan panjang sisi yang valid");
      return;
    }

    const keliling = 4 * panjang;
    document.getElementById("hasilkeliling").textContent =
      "Keliling persegi adalah: " + keliling;
  });

document.getElementById("persegi-form").addEventListener("reset", function () {
  document.getElementById("hasilluas").textContent = "";
});

document.getElementById("persegi2-form").addEventListener("reset", function () {
  document.getElementById("hasilkeliling").textContent = "";
});
