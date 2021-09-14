export class ShirtApi {

    getShirts() {
        return fetch(`http://localhost:8080/shirts`).then(r => r.json())
    }

    createShirt(shirt) {
        return fetch(`http://localhost:8080/shirts`, {
            method: 'POST',
            'headers': {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(shirt)
        })
    }

    deleteShirtById(id) {
        return fetch(`http://localhost:8080/shirts/${id}`, {
            method: 'DELETE'
        })
    }

}