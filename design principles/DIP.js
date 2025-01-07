// Galat Tareeka
class Database {
    connect() {
      console.log("Connected to database.");
    }
  }
  
  class App {
    start() {
      const db = new Database();
      db.connect();
      console.log("App started.");
    }
  }
  
  // Sahi Tareeka
  class Database {
    connect() {
      console.log("Connected to database.");
    }
  }
  
  class App {
    constructor(database) {
      this.database = database;
    }
    start() {
      this.database.connect();
      console.log("App started.");
    }
  }
  
  const db = new Database();
  const app = new App(db);
  app.start();
  