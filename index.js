const server = require("./src/server");
const { conn } = require("./src/db");

const PORT = process.env.PORT;

// server.listen(PORT, () => {
//     conn.sync({ force: false }).then(()=>{ console.log(`Connected to the DB: ${process.env.DB_NAME}`) });
//     console.log(`Server raised in port: ${ PORT }`);
//   });

const startServer = async() => {
    try {
    await conn.sync({ force: false })
    server.listen(PORT, () => {
    console.log(`Server raised in port: ${PORT}`);
  });
    } catch (error) {
        console.log(error.message)
    }
}
startServer()