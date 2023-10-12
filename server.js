import express from 'express'
import { Database } from './database.js'

const server = express()
const database = new Database()
server.use(express.json())

// CREATE
server.post('/animais', async (req,res) => {
    const { id,nome,idade } = req.body

    await database.create({
        id,
        nome,
        idade
    })

    return res.send()
})

// READ
server.get('/animais', async (req,res) => {
    const animais = await database.read()

    return res.json(animais)
})

// UPDATE
server.put('/animais/:id', async (req,res) => {
    const { id,nome,idade } = req.body
    const idUpdate = req.params.id

    await database.update(idUpdate,{
        id,
        nome,
        idade
    })

    return res.send()
})

// DELETE
server.delete('/animais/:id', async (req,res) => {
    const idDelete = req.params.id

    await database.delete(idDelete)

    return res.send()
})

// Inicia o server
server.listen({
    port: process.env.port ?? 3000
})