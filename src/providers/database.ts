import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Injectable()
export class Database {
    db: SQLiteObject;

    constructor(private sqlite: SQLite) {
        console.log('Hello Database Provider');
        this.start();
    }

    start() {
        this.sqlite.create({
            name: 'data.db',
            location: 'default'
        })
            .then((db: SQLiteObject) => {
                this.db = db;
                this.db.executeSql('CREATE TABLE IF NOT EXISTS DemoTable (name text,score int)', {})
                    .then(() => console.log('Executed SQL'))
                    .catch(e => console.log(e));
            })
            .catch(e => console.log(e));

        console.log("CREATED DB");
    }

    getDb() {
        console.log("getting");
        this.db.executeSql("SELECT * from DemoTable", {})
            .then(res => {
                for (let row = 0; row < res.rows.length; row++)
                    console.log(res.rows.item(row))
            })
            .catch(e => console.log(e));
    }

    setDb(age) {
        console.log("setting");
        this.db.executeSql("INSERT INTO DemoTable (name,score) VALUES ('Paco'," + age + ")", {})
            .then(res => console.log(res))
            .catch(e => console.log(e));
    }
}