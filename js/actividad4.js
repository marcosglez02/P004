function cargarDatos(){
    const http = new XMLHttpRequest;
    const url = "https://jsonplaceholder.typicode.com/photos";
    
    http.onreadystatechange = function(){
        // validar la respuesta
        if(this.readyState == 4 && this.status == 200){
            console.log(this.responseText);
            let res = document.getElementById('respuesta');
            res.innerHTML = "";

            // Convertir el formato JSON para hacer objetos
            const json =JSON.parse(this.responseText);

            // Mostrar los datos del json
            for(const dato of json){
                res.innerHTML += dato.albumId + " " + dato.id + " " + dato.title + " " + dato.url + " " + dato.thumbnailUrl + "<br>";
            }
        }
    
    }
    http.open('GET',url,true);
    http.send();

}
document.getElementById("btnCargar").addEventListener("click", function(){cargarDatos()});