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
            body = JSON.parse(body)
            if (isLoginTaken(body.login)) {
                console.log("USER EXISTS")
                res.writeHead(400, { 'Content-Type': 'text/plain' })
                res.end("USER EXISTS")
                return
            }

            users.push(body)
            console.log("USERS: ", users)

            console.log("REGISTER SUCCESSFUL")
            res.writeHead(200, { 'Content-Type': 'text/plain' })
            res.end("REGISTER SUCCESSFUL")
            return
        })
    }

    if (req.url == "/api/users" && req.method == "GET") {
        res.writeHead(200, { 'Content-Type': "application/json" })
        res.end(JSON.stringify(users))
    }
})

server.listen(3000, () => {
    console.log("server running on port propably 3000")
})

function isLoginTaken(login) {
    for (i = 0; i < users.length; i++) {
        if (users[i].login == login) {
            return true
        }
    }

    return false
}