import Fastify from "fastify";
import { routes } from "./routes";
import cors from '@fastify/cors'

const app = Fastify({logger: true })


const start = async () => {

    app.setErrorHandler((error,request, reply) => {
        reply.code(400).send({ message: error.message})
    })

    await app.register(cors)
    await app.register(routes);


    try{
    await app.listen({port: 3333})
    } catch(err){
        process.exit(1)
    }
}


start();