export class camisetaApi {

    // hace una llamada al backend y convierte el resultado en un JSON
    getExperiences() {
        return fetch("/catalogo")
            .then(response => response.json())
    }
}