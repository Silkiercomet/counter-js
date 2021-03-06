const aum = document.querySelector(".boton-i");
const nul1 = document.querySelector(".boton-n");
const dec = document.querySelector(".boton-d");
let num = document.querySelector(".con").innerHTML;
let num2 = parseInt(num);

const tocador = (x) =>{
document.querySelector(".con").innerHTML = x
}
const aumentar = () => {
    ++num2;
     tocador(num2)
    
};
const nul2 = () =>{
    num2 = 0
    tocador(0)
};
const disminuir = () =>{
    (num2 == 0)? num2 += 0: --num2;
    tocador(num2);
};
aum.addEventListener('click',aumentar);
nul1.addEventListener('click',nul2);
dec.addEventListener('click',disminuir);