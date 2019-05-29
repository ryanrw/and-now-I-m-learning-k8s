import server from './app'

const serverStart = () => {
    server.listen(8080, '0.0.0.0', (err, _) => {
        if (err) {
            console.log(err)
            process.exit(1)
        }
        console.log('server started')
    })
}

serverStart()