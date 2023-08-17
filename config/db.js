import { Sequelize } from "sequelize";

class Connection {
  db = null;
  async connect() {
    if (!!this.db) return;
    try {
      this.db = new Sequelize("cook", "root", "root", {
        host: "localhost",
        port: "8889",
        dialect: "mariadb",
      });
      await this.db.authenticate();
      console.log(`authentification reussi`);
    } catch (e) {
      console.error(e.message);
    }
  }
  async sync() {
    await this.db.sync();
    console.log(`synchronisation réussi`);
  }
}

const connection = new Connection();
await connection.connect();

export default connection;
