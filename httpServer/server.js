const express = require("express");
const basicAuth = require("express-basic-auth");

const app = express();
const HOST = "0.0.0.0";
const PORT = 3002;

// Setup Basic Authentication middleware
const username = "user";
const password = "user";

app.use(
  basicAuth({
    users: { [username]: password },
    challenge: true,
    unauthorizedResponse: (req) => {
      return `
        <html>
          <body>
            <h1>Access Denied</h1>
            <p>Incorrect username or password. Please try again.</p>
          </body>
        </html>
      `;
    },
  })
);

// initial connection
app.get("/", (req, res) => {
  res.send("This is the /root path!");
});

// sending MAC address
app.get("/webserv/cplcfg/state.ssi", (req, res) => {
  res.send(`
        <html>
            <body>
                <table>
                    <tr><td>Mac address:</td></tr>
                    <tr><td>12:34:56:78:9A:BC</td></tr>
                </table>
            </body>
        </html>
    `);
});

// Start the server
app.listen(PORT, HOST, () => {
  console.log(`HTTP Server listening on port ${PORT}...`);
});
