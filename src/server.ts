import fastify from "fastify";
import cors from "@fastify/cors"

const server = fastify({logger: true});

server.register(cors, {
    origin: "*",
    methods: ["GET", "POST"]
});

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
    },
    {
        id: 4,
        name: "Alpine",
        base: "Enstone, United Kingdom"
    },
    {
        id: 5,
        name: "Aston Martin",
        base: "Silverstone, United Kingdom"
    },
    {
        id: 6,
        name: "Ferrari",
        base: "Maranello, Italy"
    },
    {
        id: 7,
        name: "Haas",
        base: "Kannapolis, United States"
    },
    {
        id: 8,
        name: "AlphaTauri",
        base: "Faenza, Italy"
    },
    {
        id: 9,
        name: "Williams",
        base: "Grove, United Kingdom"
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
    },
    {
        id: 4,
        name: "Norris",
        base: "McLaren"
    },
    {
        id: 5,
        name: "Leclerc",
        base: "Ferrari"
    },
    {
        id: 6,
        name: "Sainz",
        base: "Ferrari"
    },
    {
        id: 7,
        name: "Russell",
        base: "Mercedes"
    },
    {
        id: 8,
        name: "Perez",
        base: "Red Bull Racing"
    },
    {
        id: 9,
        name: "Alonso",
        base: "Alpine"
    },
    {
        id: 10,
        name: "Piastri",
        base: "McLaren"
    },
    {
        id: 11,
        name: "Ocon",
        base: "Alpine"
    },
    {
        id: 12,
        name: "Gasly",
        base: "AlphaTauri"
    },
    {
        id: 13,
        name: "Ricciardo",
        base: "McLaren"
    },
    {
        id: 14,
        name: "Stroll",
        base: "Aston Martin"
    },
    {
        id: 15,
        name: "Hulkenberg",
        base: "Haas"
    },
    {
        id: 16,
        name: "Sargeant",
        base: "Williams"
    },
    {
        id: 17,
        name: "Albon",
        base: "Williams"
    },
    {
        id: 18,
        name: "Magnussen",
        base: "Haas"
    },
    {
        id: 19,
        name: "Tsunoda",
        base: "AlphaTauri"
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

interface RouteParams{
    id: string
}

server.get<{Params: RouteParams}>("/pilots/:id", async(req, res)=>{
    const id = parseInt(req.params.id);
    const pilot = pilots.find((p) => p.id === id);

    if(!pilot){
        res.type("application/json").code(404);
        return { message: "Pilot Not Found" }
    }else{
        res.type("application/json").code(200);
        return { pilot };
    }
});

server.listen({port: 3333}, ()=>{
    console.log("Server init");
});