let imgAll = ['01.jpg','02.jpg','03.jpg','04.jpg','05.jpg'] 

let conBtn = document.querySelector('.container-btns'); 

let div1 = document.createElement('div');

let div2 = document.createElement('div');

div1.className= ' btn top';

div2.className= ' btn down';

conBtn.append(div1,div2);

let btnTop = div1;

let btnDo = div2;

btnTop.innerHTML= `<i class="fa-solid fa-chevron-up"></i>`;

btnDo.innerHTML= `<i class="fa-solid fa-chevron-down">`;

// ------------ creati bottoni 


let conImg = document.querySelector('.img-all');

for(let i = 0; i < imgAll.length; i++){

  conImg.innerHTML += `<img class="pic dnone " src="img/${imgAll[i]}" alt="">`
};

// create imgs

btnTop.classList.add('dnone');

let pic = document.getElementsByClassName('pic');



let contatore = 0;

pic[0].classList.remove('dnone');

btnDo.addEventListener('click',function(){  

pic[contatore].classList.add('dnone');

contatore += 1;

pic[contatore].classList.remove('dnone');

btnTop.classList.remove('dnone');

if(contatore === imgAll.length -1){
  btnDo.classList.add('dnone');
};

});


btnTop.addEventListener('click',function(){

  
pic[contatore].classList.add('dnone');

contatore -= 1;

pic[contatore].classList.remove('dnone');

btnDo.classList.remove('dnone');

if(contatore ===  0){
  btnTop.classList.add('dnone');
}
  
});

