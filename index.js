const express = require('express')
const app = express()
const port = 3000
// route ( định nghĩa tuyến đường)
app.get('/', (req, res) => {
    var a = 1;
    var b = 2;
    var c = a + b;
    res.send('Hello World! This is')
})

// 127.0.0.1 - localhost (phân giải DNS để call đến địa chỉ ip)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})