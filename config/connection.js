var mysql = require('mysql');
var connection;


//SQL connection
if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else{
    connection = mysql.createConnection({
        root: 3000,
        host: 'localhost',
        user: 'root',
        password: 'surfer03',
        database: 'burgers_db',
    });
};


connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('Connected as: ' + connection.threadId);
});

module.exports = connection;