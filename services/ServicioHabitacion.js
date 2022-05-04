import {modeloHabitacion} from '../models/habitacionModelo.js'

class ServicioHabitacion{

    constructor(){}

        async buscarTodos(){

            try{
               let habitaciones= await modeloHabitacion.find()
               return habitaciones
            }catch(error){
                console.log("upss"+error)
            }

        }

        async buscarPorId(id){
            try {
                let habitacion = await modeloHabitacion.findById(id)
                return habitacion
            } catch (error) {
                console.log("upss"+error)
            }
        }

        async registrar(datosPeticion){
            try {
                
                let habitacionaRegistrar=new modeloHabitacion(datosPeticion)
               return( await habitacionRegistrar.save())

            } catch (error) {
                
            }
        }

        async editar(id,datoPeticion){
            try {
                return (await modeloHabitacion.findByIdAndUpdate(id,datosPeticion))
            } catch (error) {
                console.log("upss"+error)                
            }
        }

        async eliminar(id){
            try {
                return(await modeloHabitacion.findByIdAndDelete(id))
            } catch (error) {
                console.log("upss"+error)
            }
        }


}