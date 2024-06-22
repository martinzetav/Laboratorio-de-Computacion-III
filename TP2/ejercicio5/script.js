function $(e){
    return document.getElementById(e);
}

const ladoA = $("ladoA");
const ladoB = $("ladoB");
const ladoC = $("ladoC");
const resultado = $("resultado")

const area = () =>{
    if(ladoA.value > 0 && ladoB.value > 0 && ladoC.value > 0 && ladoA.value > ladoC.value){
        const baseTriangulo = ladoA.value - ladoC.value;
        const areaTriangulo = (ladoB.value * baseTriangulo) / 2;
        const areaRectangulo = ladoB.value * ladoC.value;
        const areaTotal = areaTriangulo + areaRectangulo;
        resultado.textContent = `El area del terreno es ${areaTotal}`;
    } else{
        resultado.textContent = "Valores no validos";
    }
}
