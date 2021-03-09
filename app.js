function ej_var(){
    alert("Cuéntame algo de ti");
    let nombre=prompt("¿Cómo te llamas?");
    let pelo= prompt("¿De qué color tienes el pelo?");
    let años=prompt("¿Cuál es tu edad?");
    alert("Te llamas "+nombre+", tienes el pelo de color "+pelo+" y tienes "+años+" años");
    alert("Encantado de conocerte");
}

function calc_simpl(){
    alert("Vamos a multiplicar dos números");
    let num1= parseInt(prompt("Dime un número"));
    let num2=parseInt(prompt("Dime el segundo número"));
    alert("La solución de multiplicar los dos números introducidos es: " +(num1*num2));
}

function ra_cua(){
    alert("Dime un número y haré su raíz cuadrada");
    let número=parseInt(prompt("Dame le número"));
    let resultado=Math.sqrt(número);
    alert("La raíz cuadrada del número dado es: "+resultado);
}

function ar_circ(){
    alert("Calculemos los elementos de una circunferecia");
    let radius =parseInt(prompt("Dame el radio del círculo"));
    let area= (radius**2)*3.14;
    let perim=2*radius*3.14;
    alert("El área del círculo dado el radio "+radius+" es: "+ area+" y su peímetro es: "+perim);
}


function IVA(){
    alert("Calculemos el IVA de un producto");
    let precio=parseInt(prompt("Dime el precio del producto sin IVA"));
    let precio_con_iva= precio+(precio*0.21);
    alert("El precio con IVA del producto introducido es: " + precio_con_iva);
}

function numal(){
    let nuaml=Math.random()*3;
    alert("Un número aleotorio entre 0 y 3 es: " + nuaml);
}

function edad(){
    let edad=parseInt(prompt("¿Qué edad tienes?"));
    if (edad<18){
        alert("Lo siento, eres menor de edad");
    }
    else{
        alert("WOW, eres mayor de edad");
    }
}

function comp_num(){
    alert("Vamos a comparar dos números");
    let nume1=parseInt(prompt("Dame el primer número"));
    let nume2=parseInt(prompt("Dame el segundo número"));
    if((nume1==0)&&(nume2 == 0)){
        alert("Those numbers are the same");
    }
    if(nume1==nume2){
        alert("Those numbers are the same");
    }
    else{
    if (nume1<nume2){
        alert(nume2+" is bigger than "+ nume1);
    }
    else{
        alert(nume1+" is bigger than "+ nume2);
    }
}
}

function racuacon(){
    let number =parseInt(prompt("Dime un número y calcularemos su ráiz cuadrada"))
    if (number<0){
        alert("No existe la raíz cuadrada de un número negativo");
    }
    else{
        let soluc=Math.sqrt(number);
        alert("La raíz cuadrada del número es: " +soluc );
    }
}


function tombol(){
    alert("Escoge un número entre el 0 y el 3");
    let intnum=parseInt(prompt("Introduce el número"));
    if(intnum==0){
        alert("Te ha tocado dar un diez colectivo(ehehehe)");
    }
    if(intnum==1){
        alert("Te ha tocado NADA");
    }
    if(intnum==2){
        alert("Te ha tocado un batidora imaginaria");
    }
    if(intnum==3){
        alert("Te ha tocado un vale para un paseo");
    }
}


function cuest(){
    alert("Respóndeme a 10 preguntas cortas");
    let marc=0;
    let preg1=parseInt(prompt("Cuánto es 4x4"));
    if (preg1=="16"){
        marc +=1;
        alert("Respuesta correcta. Puntuación: "+marc);
    }
    else{
        marc-=1;
        alert("Respuesta incorrecta, es 16. Puntuación: "+marc);
    }
    let preg2=parseInt(prompt("Cuánto es 2x1"));
    if (preg2=="2"){
        marc +=1;
        alert("Respuesta correcta. Puntuación: "+marc);
    }
    else{
        marc-=1;
        alert("Respuesta incorrecta, es 2. Puntuación: "+marc);
    }
    let preg3=parseInt(prompt("Cuánto es 4x3"));
    if (preg3=="12"){
        marc +=1;
        alert("Respuesta correcta. Puntuación: "+marc);
    }
    else{
        marc-=1;
        alert("Respuesta incorrecta, es 12. Puntuación: "+marc);
    }
    let preg4=parseInt(prompt("Cuánto es 5x5"));
    if (preg4=="25"){
        marc +=1;
        alert("Respuesta correcta. Puntuación: "+marc);
    }
    else{
        marc-=1;
        alert("Respuesta incorrecta, es 25. Puntuación: "+marc);
    }
    let preg5=parseInt(prompt("Cuánto es 4+9"));
    if (preg5=="13"){
        marc +=1;
        alert("Respuesta correcta. Puntuación: "+marc);
    }
    else{
        marc-=1;
        alert("Respuesta incorrecta, es 13. Puntuación: "+marc);
    }
    let preg6=parseInt(prompt("Cuánto es 12*12"));
    if (preg6=="144"){
        marc +=1;
        alert("Respuesta correcta. Puntuación: "+marc);
    }
    else{
        marc-=1;
        alert("Respuesta incorrecta, es 144. Puntuación: "+marc);
    }
    let preg7=parseInt(prompt("Cuánto es 5+28"));
    if (preg7=="33"){
        marc +=1;
        alert("Respuesta correcta. Puntuación: "+marc);
    }
    else{
        marc-=1;
        alert("Respuesta incorrecta, es 33. Puntuación: "+marc);
    }
    let preg8=parseInt(prompt("Cuánto es 9x9x3"));
    if (preg8=="243"){
        marc +=1;
        alert("Respuesta correcta. Puntuación: "+marc);
    }
    else{
        marc-=1;
        alert("Respuesta incorrecta, es 243. Puntuación: "+marc);
    }
    let preg9=parseInt(prompt("Cuánto es 7x4"));
    if (preg9=="28"){
        marc +=1;
        alert("Respuesta correcta. Puntuación: "+marc);
    }
    else{
        marc-=1;
        alert("Respuesta incorrecta, es 28. Puntuación: "+marc);
    }
    let preg10=parseInt(prompt("Cuánto es 2+4*6"));
    if (preg10=="26"){
        marc +=1;
        alert("Respuesta correcta.Puntuación: "+marc);
    }
    else{
        marc-=1;
        alert("Respuesta incorrecta, es 26. Puntuación: "+marc);
    }
    alert("Tu puntuación total es de: " + marc);
    alert(`${`El resumen de respuestas: \n Respuestas/soluciones\n 1. ` + preg1}/16 
 2. ${preg2}/2 
 3. ${preg3}/12 
 4. ${preg4}/25 
 5. ${preg5}/13 
 6. ${preg6}/144 
 7. ${preg7}/33 
 8. ${preg8}/243 
 9. ${preg9}/28 
 10. ${preg10}/26 `)
}


function gyess(){
    alert("Adivina un número entre el 0 y el 5, tienes 4 intentos");
    let numba=Math.round(Math.random()*5);
    let gyessnum=0;
    while (gyessnum<=3){
        let gyess=parseInt(prompt("¿Cuál es el número?"));
        if(numba == gyess){
            alert("Acertaste");
            gyessnum=5;
        }
        else{
            alert("Prueba otra vez");
            gyessnum+=1
            ;
        }
    }
    alert("Se te han acabado los intentos el número era: "+numba)
}

    setTimeout("aviso1()",20000);
    function aviso1(){
        alert("han pasado 20 segundos");
    }


function cuestionario2(){
    alert("Respóndeme a cinco preguntas");
    //var timeval=0;
    let a =Date.now();
    let marc=0;
    let preg1=parseInt(prompt("Cuánto es 4x4"));
    if (preg1=="16"){
        marc +=1;
        alert("Respuesta correcta. Puntuación: "+marc);
    }
    else{
        marc-=1;
        alert("Respuesta incorrecta, es 16. Puntuación: "+marc);
    }
    let preg2=parseInt(prompt("Cuánto es 2x1"));
    if (preg2=="2"){
        marc +=1;
        alert("Respuesta correcta. Puntuación: "+marc);
    }
    else{
        marc-=1;
        alert("Respuesta incorrecta, es 2. Puntuación: "+marc);
    }
    let preg3=parseInt(prompt("Cuánto es 4x3"));
    if (preg3=="12"){
        marc +=1;
        alert("Respuesta correcta. Puntuación: "+marc);
    }
    else{
        marc-=1;
        alert("Respuesta incorrecta, es 12. Puntuación: "+marc);
    }
    let preg4=parseInt(prompt("Cuánto es 5x5"));
    if (preg4=="25"){
        marc +=1;
        alert("Respuesta correcta. Puntuación: "+marc);
    }
    else{
        marc-=1;
        alert("Respuesta incorrecta, es 25. Puntuación: "+marc);
    }
    let preg5=parseInt(prompt("Cuánto es 4+9"));
    if (preg5=="13"){
        marc +=1;
        alert("Respuesta correcta. Puntuación: "+marc);
    }
    else{
        marc-=1;
        alert("Respuesta incorrecta, es 13. Puntuación: "+marc);
    }
    var b= Date.now()
    alert(`${`El resumen de respuestas: \n Respuestas/soluciones\n 1. ` + preg1}/16 
    2. ${preg2}/2 
    3. ${preg3}/12 
    4. ${preg4}/25 
    5. ${preg5}/13`)

    function timeToStr(time)
{
    extraZero = ''
    if(time%60 < 10) extraZero = '0'
    return (Math.floor(time/60)) + ':' + extraZero + (time%60)
}

    alert("Tu puntuación total es de: " + marc);
    
   let passs=Math.round((b-a)/1000);
    alert("Has tardado " +timeToStr(passs));
}


function takeme(){
    if (confirm ("¿Quieres saber qué es la depresión?"))
{window.open("https://www.psychiatry.org/patients-families/depression/what-is-depression")}
else
{alert("Esta bien nos quedamos aqui")}

}