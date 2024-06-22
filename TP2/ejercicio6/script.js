function $(e){
    return document.getElementById(e);
}

const nombre = $("nombre");
const apellido = $("apellido");
const edad = $("edad");
const altura = $("altura");
const correo = $("correo");
const validar1 = $("validar1");
const validar2 = $("validar2");
const validar3 = $("validar3");
const validar4 = $("validar4");

const validar = () =>{
    const nombreV = nombre.value;
    const apellidoV = apellido.value;
    if(nombreV !== "" && apellidoV !== "" && nombreV.length < 50 && apellidoV.length < 50){
        validar1.style.color = "green";
        validar1.textContent = "El nombre y apellido no pueden estar vacíos y deben ser de un máximo de 50 caracteres.";
    } else{
        validar1.style.color = "red";
        validar1.textContent = "El nombre y apellido no pueden estar vacíos y deben ser de un máximo de 50 caracteres.";
    }
    const edadV = edad.value;
    if(edadV > 18){
        validar2.style.color = "green";
        validar2.textContent = "La edad no debe ser negativa pero también validar que no sea menor de edad.";
    }else{
        validar2.style.color = "red";
        validar2.textContent = "La edad no debe ser negativa pero también validar que no sea menor de edad.";        
    }
    const alturaV = altura.value;
    if(alturaV > 0 && alturaV < 230){
        validar3.style.color = "green";
        validar3.textContent = "La altura no puede ser negativa y no puede ser mayor a 230 (cm).";
    }else{
        validar3.style.color = "red";
        validar3.textContent = "La altura no puede ser negativa y no puede ser mayor a 230 (cm).";
    }
    const correoV = correo.value;
    if(correoV.length > 0 && correoV.includes("@")){
        validar4.style.color = "green";
        validar4.textContent = "El correo electrónico no puede estar vacío y debe incluir el ‘@’.";
    }else{
        validar4.style.color = "red";
        validar4.textContent = "El correo electrónico no puede estar vacío y debe incluir el ‘@’.";
    }
} 

// const validar = () =>{
//     let f = false;
//     const nombreV = nombre.value;
//     const apellidoV = apellido.value;
//     if(nombreV !== "" && apellidoV !== "" && nombreV.length < 50 && apellidoV.length < 50)f = true;
//     const edadV = edad.value;
//     if(edadV > 18) f = true;
//     const alturaV = altura.value;
//     if(alturaV > 0 && alturaV < 230) f = true;
//     const correoV = correo.value;
//     if(correoV.length > 0 && correoV.includes("@"))f = true;
//     const mensaje = `•El nombre y apellido no pueden estar vacíos y deben ser de un máximo de 50 caracteres.
//     • La edad no debe ser negativa pero también validar que no sea menor de edad.
//     • La altura no puede ser negativa y no puede ser mayor a 230 (cm).
//     • El correo electrónico no puede estar vacío y debe incluir el ‘@’.`;
//     validar1.textContent = mensaje;
//     if(f) validar1.style.color = "green";
//     else  validar1.style.color = "red";

// } 