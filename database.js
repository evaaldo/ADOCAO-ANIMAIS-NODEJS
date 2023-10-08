import { sql } from "./db.js"

export class Database {

    async create(animal) {
        const { id,nome,idade } = animal

        await sql`INSERT INTO animais (id,nome,idade) VALUES (${id},${nome},${idade})`
    }

    async read() {
        const animais = await sql`SELECT * FROM animais`

        return animais
    }

    async update(idUp,animal) {
        const idUpdate = idUp
        const { id,nome,idade } = animal

        await sql`UPDATE animais SET id = ${id}, nome = ${nome}, idade = ${idade} WHERE id = ${idUpdate}`
    }

    async delete(id) {
        await sql`DELETE FROM animais WHERE id = ${id}`
    }

}