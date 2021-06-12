const ArrayBans = require("./ArrayBands");

class Sockets {
  constructor(io) {
    this.io = io;
    this.ArrayBands = new ArrayBans();
    this.socketEvents();
  }

  socketEvents() {
    // On connection
    this.io.on("connection", (socket) => {
      console.log("Cliente conectado");
      // emitar bandas que esten en el Array
      socket.emit("current-bands", this.ArrayBands.getBands());
      // escuchar acción de votar
      socket.on("accion-votar", (id) => {
        this.ArrayBands.addvote(id);
        this.io.emit("current-bands", this.ArrayBands.getBands());
      });
      socket.on("action-delete", (id) => {
        this.ArrayBands.deleteBand(id);
        this.io.emit("current-bands", this.ArrayBands.getBands());
      });
      socket.on("change-name", (data) => {
        const { id, name } = data;
        this.ArrayBands.changeName(id, name);
        this.io.emit("current-bands", this.ArrayBands.getBands());
      });
      socket.on("add-band", (data) => {
        const { name } = data;
        this.ArrayBands.addBand(name);
        this.io.emit("current-bands", this.ArrayBands.getBands());
      });
    });
  }
}

module.exports = Sockets;
