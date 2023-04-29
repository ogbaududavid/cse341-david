var express = require("express");
var app = express();
const port = process.env.PORT || 8080;
app.use("/professional", require("./routes/index"));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});