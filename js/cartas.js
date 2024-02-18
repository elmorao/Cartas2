function mainkra(i){
    function carta(querido,nombre,ciudad,sillas,bool,restante1,restante2,restante3){
    
        document.write("<p class ='letra'>",querido,"",nombre," en este momento ",bool," hay vuelos para su destino a ",ciudad,
        " si conoce a un familiar o amigo digale que tenemos ",sillas," sillas disponibles. ambien si lo desea hay vuelos en promocion para ",restante1,", ",restante2," y ",restante3,".</p>");
    }
    
    var nombre=["Juana","Julian","Alfonso"];
    var ciudad=["medellin","cartagena","pereira","santamarta"];
    var restantes0=["cartagena","pereira","santamarta"];
    var restantes1=["medellin","pereira","santamarta"];
    var restantes2=["medellin","cartagena","santamarta"];
    
    
    
    if (i==0)
    {
        carta("Querida ",nombre[i],ciudad[i],i,"si",restantes0[0],restantes0[1],restantes0[2])
    }
    else if (i==1){
        carta("Querido ",nombre[i],ciudad[i],i,"si",restantes1[0],restantes1[1],restantes1[2])
    }
    else if (i==2)
    {
        carta("Querido ",nombre[i],ciudad[i],i,"si",restantes2[0],restantes2[1],restantes2[2])
    }  
}