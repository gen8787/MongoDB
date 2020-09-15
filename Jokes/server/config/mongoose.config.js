const mongoose = require('mongoose');
const db = "jokes2_db"; // <~~ Update db name.

mongoose.connect(`mongodb://localhost/${db}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`Connection established to databse: ${db}`))
    .catch(err => console.log(err))