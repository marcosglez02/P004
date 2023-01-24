function cargarDatos(){
    const http = new XMLHttpRequest;
    const url = "https://jsonplaceholder.typicode.com/photos";
    
    http.onreadystatechange = function(){
        // validar la respuesta
        if(this.readyState == 4 && this.status == 200){
            console.log(this.responseText);
            let res = document.getElementById('respuesta');
            res.innerHTML = `<thead><tr>
            <th scope="col" width="10%" class="text-center">AlbumId</th>
            <th scope="col" width="10%" class="text-center">id</th>
            <th scope="col" width="40%" class="text-center">titulo</th>
            <th scope="col" width="40%" class="text-center">imagen</th>
            </tr></thead><tbody></tbody`;

            // Convertir el formato JSON para hacer objetos
            const json =JSON.parse(this.responseText);

            // Mostrar los datos del json
            for(const dato of json){
                res.innerHTML += `<tr">
                <th class="text-center" scope="row">${dato.albumId}</th>
                <td class="text-center">${dato.id}</td>
                <td class="text-center">${dato.title}</td>
                <td class="text-center"><a href="${dato.url}"><img src="${dato.thumbnailUrl}" alt=""></a></td>
            </tr>`
            if(dato.id == 30){
                break;
            }
            }
        }
    
    }
    http.open('GET',url,true);
    http.send();

}
function limpiar(){
    let limpiar = document.getElementById('respuesta');
    limpiar.innerHTML="";
}
document.getElementById("btnCargar").addEventListener("click", function(){cargarDatos()});
document.getElementById("btnLimpiar").addEventListener("click", function(){limpiar()})