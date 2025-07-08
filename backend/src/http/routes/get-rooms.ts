import type { FastifyPluginCallbackZod } from "fastify-type-provider-zod";
import { schema } from "../../db/schema/index.ts";
import { db } from "../../db/connection.ts";
import { rooms } from "../../db/schema/rooms.ts";


export const getRoomsRoutes: FastifyPluginCallbackZod = (app) => {
    app.get('/rooms', async () => {
     const results = await db
     .select({
        id: schema.rooms.id,
        name: schema.rooms.name,
     })
     .from(schema.rooms)
     .orderBy(schema.rooms.createdAt)

     return results;
    } )

}