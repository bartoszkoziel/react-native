const http = require("http")
let users = []

const server = http.createServer((req, res) => {

    if (req.url == "/" && req.method == "GET") {
        console.log("BAJO JAJO")
    }

    if (req.url == "/api/register" && req.method == "POST") {
        let body = ""

        req.on("data", (data) => {
            body += data
        })

        req.on("end", () => {
            console.log(body)
        })
    }
})

server.listen(3000, () => {
    console.log("server running on port propably 3000")
})