function $(e){
    return document.getElementById(e);
}

const base = $("base");
const altura = $("altura");

const perimetro = () =>{
    const resultadoPerimetro = (base.value * 2) + (altura.value * 2);
    alert("El perimetro del rectangulo es " + resultadoPerimetro);
}

const superficie = ()=>{
    const resultadoSuperficie = base.value * altura.value;
    alert("La superficie del rectangulo es " + resultadoSuperficie);
}