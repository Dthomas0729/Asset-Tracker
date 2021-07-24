const express = require('express');
const PORT = 4000
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.listen(PORT, (err) => {
    console.log(`We Are Live! Go Here ---> http://localhost:${PORT}`);
})