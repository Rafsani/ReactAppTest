const express = require("express");
const bodyParser = require ("body-parser");
const mongoose = require ('mongoose');
const cors  = require("cors") ;

const product = require("./routes/product") ;

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit : "30mb", extended: true }));

app.use(cors());

app.use('/api',product);

const CONNECTION_URL = 'mongodb+srv://user1:Rafsani@786@ecommerecesite.zksgp.mongodb.net/<dbname>?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;


try{
    mongoose.connect(CONNECTION_URL,{useNewUrlParser: true,useUnifiedTopology:true}).then( ()=> app.listen(PORT, () => console.log(`server running at port ${PORT}`))).catch( (error) => console.log(error.message));

    mongoose.set('useFindAndModify',false);

}
catch (e)
{
    console.log(e);
}

