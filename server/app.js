const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors')

const app = express();
const PORT = 4000

app.use(cors())

// mongoose.connect('mongodb+srv://dev:dev@cluster0.rnla2.mongodb.net/test?retryWrites=true&w=majority', {
// useNewUrlParser: true,
// useFindAndModify: false,
// useUnifiedTopology: true
// });

// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error: "));
// db.once("open", function () {
//   console.log("Connected successfully");
// });

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
})
