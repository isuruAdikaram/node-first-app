// server created

const http = require('http');

const server = http.createServer((req,res) => {
    const url = req.url
    if(url ==='/'){
    res.setHeader('Content-Type','text/html')
    res.write('<html>')
    res.write('<head><titleEnter body</title></head>')
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
    res.write('</html>')
    return res.end()
    }
    
    res.setHeader('Content-Type','text/html')
    res.write('<html>')
    res.write('<head><title>My First Page</title></head>')
    res.write('<body><h1>Hello from node.js sever</h1></body>')
    res.write('</html>')
    res.end()
})

server.listen(3000)