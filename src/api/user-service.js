export default {
    async getUsers() {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        return await res.json()
    }
}