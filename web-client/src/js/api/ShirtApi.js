export class ShirtApi {

    saveShirt(shirt){
        return fetch("/shirts",
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: shirt
            }
        )
    }

    getShirts(){
        return fetch("/shirts")
            .then(response => response.json())
    }

}