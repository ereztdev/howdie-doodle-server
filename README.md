# Howdie Doodle
## Multi-User streaming chat and canvas drawer
### SERVER 
### pre-requisites
- **Node.JS** -  if you don;t have it, you can [download it right here](https://nodejs.org/dist/v12.16.2/node-v12.16.2-x64.msi).
- **Howdie Doodle client** -  you will need the [Howdie Doodle client](https://github.com/ereztdev/howdie-doodle-client),
follow its Installation procedures.
### Installation procedures
* Either download or clone (`git clone https://github.com/ereztdev/howdie-doodle-server.git`) this repo into your web server. 
* switch into the repo directory where you pulled the repo: `cd howdie-doodle-server`
* `npm install` to install node.js dependencies
* `node index.js` to start the node server.
* The node server will running on `http://localhost:3000/` by default, no need to access this endpoint,
 only the client (howdie-doodle-client) will access this server and TX/RX via WebSockets. 
