import fastify from "fastify";

const server = fastify({logger: true});

const teams = [
    {
        id: 1,
        name: "McLarem",
        base: "Woking, United Kingdom"
    },
    {
        id: 2,
        name: "Mercedes",
        base: "Brackley, United Kingdom"
    },
    {
        id: 3,
        name: "Red Bull Racing",
        base: "Milton Keynes, United Kingdom"
    }
];

const pilots = [
    {
        id: 1,
        name: "Hamilton",
        base: "Mercedes"
    },
    {
        id: 2,
        name: "Verstappen",
        base: "Red Bull Racing"
    },
    {
        id: 3,
        name: "Felipe Massa",
        base: "Ferrari"
    }
];

server.get("/teams", async(req, res)=>{
    res.type("application/json").code(200)

    return { teams };
});

server.get("/pilots", async(req, res)=>{
    res.type("application/json").code(200)

    return { pilots };
});

server.listen({port: 3333}, ()=>{
    console.log("Server init");
});