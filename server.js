var express = require("express");
var app = express();
const port = process.env.PORT || 3000;
app.use("/", require("./routes2/index"))

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});