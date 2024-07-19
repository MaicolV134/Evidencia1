const reproductorMusica = {
    estado: "apagado",

    play: function(cancion)  {
        if(this.estado === "apagado"){
            console.log(`Reproduciendo cancion ${cancion}...`)
            //cambiar el estado
            this.estado = "play"
        }else{
        console.log(`...cancion en reproduccion: stop para terminar`)
        }
    },
    stop: function(){
        if(this.estado === "apagado"){
            console.log(`Reproductor ya esta apagado`)
            
        }else{
            console.log(`Apagando reproductor...`)
            this.estado = "Apagado"
        }
    },
}

reproductorMusica.play("Himno Nacional");
//reproductorMusica.stop();
//reproductorMusica.stop();
