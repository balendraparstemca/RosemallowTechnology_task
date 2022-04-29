const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());  
app.use(express.urlencoded({ extended: true }));  

const db = require("./models");
 db.sequelize.sync();
require("./routes/user.routes")(app);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
