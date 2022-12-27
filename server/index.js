require("dotenv").config();
require("./db") ; 
const express = require("express")
const app = express();
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)});
    app.get("/", (req, res) => {console.log("ye boii")
        res.json("i did it!")
    });

    // now I need to add more crud operations and post mock data using the data models I created as a template
