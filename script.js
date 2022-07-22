function startTime() {
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
m = checkTime(m);
s = checkTime(s);
document.getElementById('jam').innerHTML = h+":"+m+":"+s;
var t = setTimeout(function(){startTime()},500);
}

function checkTime(i) {
if (i<10) {i = "0" + i};  
return i;
}

var modaltambah = document.getElementById("modaltambah");
var span = document.getElementsByClassName("span")[0];
var modalhapus = document.getElementById("modalHapus");
var span1 = document.getElementsByClassName("span1")[0];
var modalEdit = document.getElementById("modalEdit");
var span2 = document.getElementsByClassName("span2")[0]; 
var modalWarning = document.getElementById("modalWarning");
var span3 = document.getElementsByClassName("span3")[0];
var modalUpdate = document.getElementById("modalUpdate");
var span4 = document.getElementsByClassName("span4")[0]; 

function motambah() {
modaltambah.style.display = "block";
}
span.onclick = function() {
modaltambah.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modaltambah) {
    modaltambah.style.display = "none";
  }
}

function modelete() {
modalHapus.style.display = "block";
}
span1.onclick = function() {
modalHapus.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modalHapus) {
    modalHapus.style.display = "none";
  }
}

 function moedit() {
modalEdit.style.display = "block";
}
span2.onclick = function() {
modalEdit.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modalEdit) {
    modalEdit.style.display = "none";
  }
}

 function mowarning() {
modalWarning.style.display = "block";
}
span3.onclick = function() {
modalWarning.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modalWarning) {
    modalWarning.style.display = "none";
  }
}

function moupdate() {
modalUpdate.style.display = "block";
}
span4.onclick = function() {
modalUpdate.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modalUpdate) {
    modalUpdate.style.display = "none";
  }
}

var idval = 0;

function tambah(){
    let tabel = document.getElementById("isitabel").querySelector("tbody");
    let nim = document.getElementById("nim").value;
    let nama = document.getElementById("nama").value;
    let alamat = document.getElementById("alamat").value;

    if (nim == '' || nama =='' || alamat == ''){
        mowarning();
    }
    else{
    let colnim = '<td id="nim'+idval+'">'+nim+'</td>';
    let colnama = '<td id="nama'+idval+'">'+nama+'</td>';
    let colalamat = '<td id="alamat'+idval+'">'+alamat+'</td>';
    let btn1 = '<button type="button" class="edit" id="edit'+idval+'"onclick = "fungsiedit(this.id)"> &#9998;Ubah </button>';
    let btn2 = '<button type="button" class="delete" id="hapus'+idval+'"onclick = "hapus(this.id)"> &#128465;Hapus </button>';
    let btn = '<td>'+btn1+btn2+'</td>';

    let newRow = '<tr id="'+idval+'">'+colnim+colnama+colalamat+btn+'</tr>';
    motambah();
    tabel.innerHTML += newRow;
    idval=idval+1;
}
}

function hapus(idHapus){
    var hapusid = idHapus.substring(5);
    document.getElementById(hapusid).innerHTML= '';
    modelete();
    }

function fungsiedit(idEdit){
    var editid = idEdit.substring(4);
    moedit();
    document.getElementById("nimedit").value = document.getElementById("nim"+editid).innerHTML;
    document.getElementById("namaedit").value = document.getElementById("nama"+editid).innerHTML;
    document.getElementById("alamatedit").value = document.getElementById("alamat"+editid).innerHTML;
    document.getElementById("save").onclick =
    function save(){
        var namabaru = document.getElementById("namaedit").value;
        var alamatbaru = document.getElementById("alamatedit").value;
        document.getElementById("nama"+editid).value = namabaru;
        document.getElementById("nama"+editid).innerHTML = namabaru;
        document.getElementById("alamat"+editid).value = alamatbaru;
        document.getElementById("alamat"+editid).innerHTML = alamatbaru;
        modalEdit.style.display = "none";
        moupdate();
    }
}

function closeedit1() {
modalEdit.style.display = "none";
}


   

