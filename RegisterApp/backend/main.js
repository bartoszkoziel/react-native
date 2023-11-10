const http = require("http")
let users = []
let idcount = 0

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
            console.log("TEST: ", body)
            if (isLoginTaken(body.login)) {
                console.log("USER EXISTS")
                res.writeHead(400, { 'Content-Type': 'text/plain' })
                res.end("USER EXISTS")
                return
            } else {
                users.push({
                    id: idcount,
                    body: body
                })
                idcount++
                console.log("USERS: ", users)

                console.log("REGISTER SUCCESSFUL")
                res.writeHead(200, { 'Content-Type': 'text/plain' })
                res.end("REGISTER SUCCESSFUL")
                return
            }
        })
    }

    if (req.url == "/api/users" && req.method == "GET") {
        res.writeHead(200, { 'Content-Type': "application/json" })
        res.end(JSON.stringify({ users: users }))
    }

    if (req.method == "POST" && req.url.match(/\/api\/delete\/([0-9]+)/)) {
        let id = req.url.split("/")[3]
        console.log("RECIVED ID: ", id)
        users.forEach((item, index) => {
            if (item.id == id) {
                users.splice(index, 1)
                console.log("NEW ARR: ", users)
            }
        })

        res.writeHead(200, { 'Content-Type': "application/json" })
        res.end(JSON.stringify({ users: users }))
    }
})

server.listen(3000, () => {
    console.log("server running on port propably 3000")
})

function isLoginTaken(login) {
    for (i = 0; i < users.length; i++) {
        if (users[i].body.login == login) {
            return true
        }
    }

    return false
}