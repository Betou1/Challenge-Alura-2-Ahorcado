var palabras = Array("ALURA","ORACLE","ONE","JAVASCRIPT","CSS","HTML");
        var palabraOc = "";
        var palabraAdi = "";
        var vidas = 4;
        document.getElementById("boton").addEventListener("click", comprobar);

        iniciar();

        function iniciar(){
            palabraOc = palabras[Math.floor(Math.random()*palabras.length)];
            for (var i=0; i<palabraOc.length;i++){
                palabraAdi = palabraAdi + "_ ";
            }
            document.getElementById("frase").innerHTML = palabraAdi;
        }

        function comprobar(){
            var letra = document.getElementById("letra").value.toUpperCase();
            palabraOc = palabraOc.toUpperCase();
            var nuevo = "";
            for (var i = 0; i < palabraOc.length; i++){
                if(letra == palabraOc[i]){
                    nuevo = nuevo + letra + " ";
                } else{
                    nuevo = nuevo + palabraAdi[i*2] + " ";
                }
            }
            if(nuevo == palabraAdi){
                vidas--;
                document.getElementById("vida").innerHTML="El número de vidas que quedan son: " + vidas; 
            }

            palabraAdi = nuevo;
            document.getElementById("frase").innerHTML=palabraAdi;
            if(vidas==0){
                alert("Perdiste");
            }
            if(palabraAdi.search("_") == -1){
                alert("Ganaste");
            }

            document.getElementById("letra").value="";
            document.getElementById("letra").focus();

            dibujar();
        }

        function dibujar(){
            var canvas = document.getElementById('lienzo');
             if (canvas.getContext) {
                var ctx = canvas.getContext('2d');
                //dibuja la base de la horca.
                ctx.beginPath();
                ctx.moveTo(30,200);
                ctx.lineTo(30,10);
                ctx.lineTo(150,10);
                ctx.lineTo(150,20);
                ctx.stroke();
  
                if(vidas <= 3) {//Dibuja la cabeza.
                ctx.beginPath();
                ctx.arc(150, 40, 20, 0, Math.PI * 2);
                ctx.stroke();
                }

                if(vidas <= 2) {//Dibuja el cuerpo.
                ctx.beginPath();
                ctx.moveTo(150,60);
                ctx.lineTo(150,100);
                ctx.stroke();
                }

                if(vidas <= 2){//Dibuja los brazos.
                ctx.beginPath();
                ctx.moveTo(150,60);
                ctx.lineTo(130,100);
                ctx.stroke();

                ctx.beginPath();
                ctx.moveTo(150,60);
                ctx.lineTo(170,100);
                ctx.stroke();
                }

                if(vidas == 0){//Dibuja las piernas.
                ctx.beginPath();
                ctx.moveTo(150,100);
                ctx.lineTo(170,130);
                ctx.stroke();

                ctx.beginPath();
                ctx.moveTo(150,100);
                ctx.lineTo(130,130);
                ctx.stroke();
                }
                
            }
        }