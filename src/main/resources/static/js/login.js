$("#IniciarSesion").click((e)=>{
    
    e.preventDefault()

        IniciarSesion()
        cleanFields()
    
})


    function cleanFields(){

        $("#values-email").val("")
        $("#values-password").val("")
        
    }

    async function IniciarSesion(){



        const respuesta = await fetch("http://152.70.223.141:80/api/"+$("#values-email").val()+"/"+$("#values-password").val() , {
            method:"GET",
            headers:{
                'Content-Type':'application/json'
            }
        })

        const respuestaJson = await respuesta.json()
        if(respuestaJson.id != null){
            alert("Bienvenido"+respuestaJson.nombre)
        }else {
            alert("Usuario o contraseña incorrectos o no existe")
        }

    }