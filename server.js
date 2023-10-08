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
    const idUpdate = req.params.id
    const { id,nome,idade } = req.body

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

// Inicializa server
server.listen(3000, () => {
    console.log("Server aberto")
})