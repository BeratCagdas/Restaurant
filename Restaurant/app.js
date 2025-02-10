const { Console } = require("console");
var mysql = require("mysql");
var baglanti = mysql.createConnection({
host: "localhost",
user:"root",
pass:"",
database:"deneurunler"


});
baglanti.connect(function(err){
if(err) throw err;
var sorgu = "CREATE TABLE musterilerim1 (name VARCHAR(30), surname VARCHAR(15), adres VARCHAR(75))";
baglanti.query(sorgu, function(err){
if(err) throw err;
 
});
})
