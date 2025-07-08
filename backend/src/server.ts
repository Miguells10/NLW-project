// biome-ignore assist/source/organizeImports: <explanation>
import {fastify } from 'fastify';
import { sql } from './db/connection.ts';   
import {
    serializerCompiler,
    validatorCompiler,
    type ZodTypeProvider,
} from "fastify-type-provider-zod";
import { fastifyCors } from "@fastify/cors";
import { env } from './env.ts';
import { getRoomsRoutes } from './http/routes/get-rooms.ts';

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors,  {
     origin: 'http://localhost:5173'
})

app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

app.listen({port: env.PORT })

app.register(getRoomsRoutes)

app.get('/health', () => {
    return { status: 'ok' };
});