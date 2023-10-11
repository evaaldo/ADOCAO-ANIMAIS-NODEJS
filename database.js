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

    async update(idUpdate,animal) {
        const idUp = idUpdate
        const { id,nome,idade } = animal

        await sql`UPDATE animais SET id = ${id}, nome = ${nome}, idade = ${idade} WHERE id = ${idUp}`
    }

    async delete(idDelete) {
        await sql`DELETE FROM animais WHERE id = ${idDelete}`
    }

}