interface BaseDeDatos {
    conectar(): void;
    guardar(datos: string): void;
}

class MySQLDatabase implements BaseDeDatos {
    conectar(): void {
        console.log("Conectando a MySQL");
    }

    guardar(datos: string): void {
        console.log(`Guardando en MySQL: ${datos}`);
    }
}

class PostgreSQLDatabase implements BaseDeDatos {
    conectar(): void {
        console.log("Conectando a PostgreSQL");
    }

    guardar(datos: string): void {
        console.log(`Guardando en PostgreSQL: ${datos}`);
    }
}

class Aplicacion {
    constructor(private db: BaseDeDatos) {}

    procesarDatos(datos: string): void {
        this.db.conectar();
        this.db.guardar(datos);
    }
}

// Uso
const mysqlDB = new MySQLDatabase();
const postgresDB = new PostgreSQLDatabase();

const app1 = new Aplicacion(mysqlDB);
const app2 = new Aplicacion(postgresDB);

app1.procesarDatos("Datos importantes");
app2.procesarDatos("Datos importantes");