let button = document.getElementById("button");

button.addEventListener("click", (event) => {
  let url = document.getElementById("url").value;
  let qrcode =
    "https://chart.googleapis.com/chart?cht=qr&chl=" +
    encodeURIComponent(url) +
    "&chs=200x200&choe=UTF-8&chld=L|0";
  document.getElementById("qrcode").src = qrcode;
});
