const express =  require('express');
const app = express();

require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

require("./server/routes/routes")(app);

app.listen(8000, () => console.log("Server is listening on port 8000..."));