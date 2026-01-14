const crt = document.getElementById("crt");
const frm = document.getElementById("frm");

document.getElementById("show").addEventListener("click", function (){

  crt.style.display="none";
  frm.style.display = "block";
});
document.getElementById("show2").addEventListener("click", function () {
  frm.style.display = "none";
  crt.style.display = "block"
});