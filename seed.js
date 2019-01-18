const db = require('./models');
db.sync({force: true})
    .then(() => {
        console.log('connected');
        
        db.close();
    })
    .catch(err => {
        console.log('oh no ');
        console.log(err);
        db.close();
    });
