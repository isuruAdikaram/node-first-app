const http = require('http')

const server = http.createServer((req,res) =>{
    const url = req.url
    const method = req.method
    if(url ==='/'){
        res.setHeader('Content-Type','text/html')
        res.write('<html>')
        res.write('<head><title>greeting page</title></head>')
        res.write('<body><h1>Greetings!!!</h1>')
        res.write('<form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form>')
        res.write('</body>')
        res.write('</html>')
        return res.end()
    }
    if(url ==='/create-user' && method === 'POST'){
        const body =[]

        req.on('data',(chunk)=>{
            body.push(chunk)     
        })
            req.on('end',()=>{
            const parsedBody =Buffer.concat(body).toString()
            const message = parsedBody.split('=')[1]
            const refinedMessage = message.replace('+',' ')
            console.log(refinedMessage)
            // res.setHeader('Content-Type','text/html')
            // res.write('<html>')
            // res.write('<head><title>User List</title></head>')
            // res.write('<body><h1>Congratulation! Data submitted!!</h1></body>')
            // res.write('</html>')
            
        })
            res.statusCode = 302
            res.setHeader('Location','/')
            return res.end()

    }
    if(url ==='/users'){
        res.setHeader('Content-Type','text/html')
        res.write('<html>')
        res.write('<head><title>User List</title></head>')
        res.write('<body><ul><li>User 1</li><li>User 2</li><li>User 3</li></ul></body>')
        res.write('</html>')
        return res.end()
    }    

})

server.listen(5000)