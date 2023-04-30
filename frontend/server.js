var express = require("express");
var app = express();
const port = process.env.PORT || 9090;
app.use("/professional", require("./routes"));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});