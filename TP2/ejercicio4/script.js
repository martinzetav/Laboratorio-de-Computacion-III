function $(e){
    return document.getElementById(e);
}

const estatura = $("estatura");
const peso = $("peso");
// const btnCalular = $("btnCalcular");

// function indiceMasaCorporal(){
//     const resultado = peso.value/(estatura.value **2);
//     alert(`El IMC es de ${resultado}`);
// }

let imc = () =>{
    const resultado = peso.value/(estatura.value ** 2);
    alert(`El IMC es de ${resultado}`);
    estatura.value = "";
}

// btnCalular.addEventListener("click", ()=>{
//     const resultado = peso.value/(estatura.value ** 2);
//     alert(`El IMC es de ${resultado}`);
//     // estatura.value = "";
// })



