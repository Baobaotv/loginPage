const mysql=require('mysql');
const env=require('dotenv').config()

const dbConfig=mysql.createConnection({
    host:'us-cdbr-east-05.cleardb.net',
    database:'heroku_8b2497654a2aa12',
    user:'b8ed1f151830c1',
    password:'3afc372c'
})
dbConfig.connect((error)=>{
    if(error) throw error
    console.log('Database connected successfully')
})

module.exports=dbConfig