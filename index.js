const express = require('express');
const port = process.env.PORT || 8000;

const app = express();

app.set('view engine', 'ejs');




app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.render('index');
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });

