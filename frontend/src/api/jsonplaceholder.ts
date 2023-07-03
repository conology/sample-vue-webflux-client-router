export interface User {
    "id": number
    "name": string
    "username": string
    "email": string
    "phone": string
    "website": string
    "company": {
        "name": string
        "catchPhrase": string
        "bs": string
    }
}

export async function getUsers(): Promise<User[]> {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    return await response.json();
}