module.exports = function(app, path){
    var users = [
        {"username": "pepe1", "birthdate": "05/05/2001", "age": 18, "email": "pepe1@com.au", "password": "fgm", "valid": false},
        {"username": "pepe2", "birthdate": "05/05/2000", "age": 19, "email": "pepe2@com.au", "password": "fbm", "valid": false},
        {"username": "pepe3", "birthdate": "05/05/1999", "age": 20, "email": "pepe3@com.au", "password": "fom", "valid": false},
    ]
    app.post('/api/auth', function(req, res){
        if(!req.body){
            return res.sendStatus(400)
        }

        var customer = {}
        customer.username = ""
        customer.birthdate = ""
        customer.age = 0
        customer.email = ""
        customer.valid = false
        
        for(i = 0; i <users.length; i++){
            if(req.body.email === users[i].email && req.body.password === users[i].password){
                customer.username = users[i].username
                customer.birthdate = users[i].birthdate
                customer.age = users[i].age
                customer.email = users[i].email
                customer.valid = true
                //res.send(customer);
            }
        }
        res.send(customer);
    })
}