/* download body parser
   npm install body-parser */

var bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient

var app = express();

app.post('/', bodyParser.urlencoded({ extended: true }), (req, res, next) => {
  MongoClient.connect('mongodb://localhost:27017/firstDB', (err, client) => {
    const db = client.db()

    db.collection('users').insertOne({
      name: req.body.name,
      age: +req.body.age
    }).then(result => {
      console.log(result)
      res.redirect('/')
    })

    client.close()
  })
})

/* The html code

<form action="/" method="POST">
  <input type="text" name="name" placeholder="name">
  <input type="text" name="age" placeholder="age">
  <input type="submit" value="submit">
  
</form>   */
