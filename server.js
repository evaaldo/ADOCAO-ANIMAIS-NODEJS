// fastify é um mini framework para ajudar com questões básicas de backend, como roteamento
import { fastify } from 'fastify'
// import { DatabaseMemory } from './database-memory.js'
import { DatabasePostgres } from './database-postgres.js'

const server = fastify()

//GET: busca alguma informação
//POST: criar um registro
//PUT: alteração de algum registro
//DELETE: deleta algum registro

// const database = new DatabaseMemory()
const database = new DatabasePostgres()

// aqui é declarada uma rota, a rota raiz
server.post('/videos', async (request, response) => {
    const {title, description, duration} = request.body

    await database.create({
        title: title,
        description: description,
        duration: duration,
    })

    return response.status(201).send()
})

server.get('/videos', async (request, response) => {
    const search = request.query.search

    const videos = await database.read(search)

    return videos
})

server.put('/videos/:id', async (request, response) => {
    const videoId = request.params.id
    const { title, description, duration } = request.body

    await database.update(videoId, {
        title: title,
        description: description,
        duration: duration
    })

    return response.status(204).send()
})

server.delete('/videos/:id', async (request, response) => {
    const videoId = request.params.id

    await database.delete(videoId)

    return response.status(204).send()
})

// aqui é aberto o server na porta 3000
server.listen({
    port: 3000,
})