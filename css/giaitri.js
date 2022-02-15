var index = 1;
changeImage = function() {
    var imgs= ["../img/giaitri_img/img6-fb.png","../img/giaitri_img/img7.fb1.png","../img/giaitri_img/img8.fb1.png",""];
    document.getElementById('div3-img').src= imgs[index];
    index++;

    if(index==3) {
        index=0;
    }
}

setInterval(changeImage,4000);