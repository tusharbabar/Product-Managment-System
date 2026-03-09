require("dotenv").config();
const app = require("./src/app.js");

const port = process.env.db_server || 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
