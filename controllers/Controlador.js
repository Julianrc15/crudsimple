export class Controlador{


    constructor(){}

    buscarTodos(request,response){
        try{

            response.status(200).json({
                mensaje:"Exito en la bsuqueda",
                data:[{nombre:"Juan",edad:32},{nombre:"Maria",edad:50}],
                estado:true
            })
    
        }catch(error){
    
            response.status(400).json({
                mensaje:"upss",
                data:[],
                estado:false
            })
    
        }
    }

    buscarPorId(request,response){
        let id=request.params.id //CAPTURO EL ID QUE LLEGA POR LA URL
        console.log("El id solicitado es: "+id)
        try{

            response.status(200).json({
                mensaje:"Exito en la busqueda por id: "+id,
                data:[{nombre:"Juan",edad:32}],
                estado:true
            })
    
        }catch(error){
    
            response.status(400).json({
                mensaje:"upss",
                data:[],
                estado:false
            })
    
        }
    }

    insertar(request,response){
        let datosPeticion=request.body
        console.log(datosPeticion)
        try{

            response.status(200).json({
                mensaje:"Exito registrando datos",
                data:datosPeticion,
                estado:true
            })
    
        }catch(error){
    
            response.status(400).json({
                mensaje:"upss",
                data:[],
                estado:false
            })
    
        }
    }

    editar(request,response){
        let id
        let datosPeticion
        try{

            response.status(200).json({
                mensaje:"Exito editando datos",
                data:null,
                estado:true
            })
    
        }catch(error){
    
            response.status(400).json({
                mensaje:"upss",
                data:[],
                estado:false
            })
    
        }
    }

    eliminar(request,response){
        try{

            response.status(200).json({
                mensaje:"Exito eliminando datos",
                data:null,
                estado:true
            })
    
        }catch(error){
    
            response.status(400).json({
                mensaje:"upss",
                data:[],
                estado:false
            })
    
        }
    }

}