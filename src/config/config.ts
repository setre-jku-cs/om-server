import conf from './conf.json';

export class Config {
  static getMongoDBUrl(): string {
    return process.env.OM_MONGODB_URL
      ? process.env.OM_MONGODB_URL
      : conf.mongodb.url;
  }

  static getMongoDBName(): string {
    return process.env.OM_MONGODB_NAME
      ? process.env.OM_MONGODB_NAME
      : conf.mongodb.db;
  }

  static getMongoDBUser(): string {
    return process.env.OM_MONGODB_USER
      ? process.env.OM_MONGODB_USER
      : conf.mongodb.user;
  }

  static getMongoDBPassword(): string {
    return process.env.OM_MONGODB_PASSWORD
      ? process.env.OM_MONGODB_PASSWORD
      : conf.mongodb.password;
  }

  static print(): void {
    console.log('Config:');
    console.log('\tMONGODB_URL: ' + Config.getMongoDBUrl());
    console.log('\tMONGODB_NAME: ' + Config.getMongoDBName());
    console.log('\tMONGODB_USER: ' + Config.getMongoDBUser());
  }
}

// export default {
//     jwtSecret: "@QEGTUI"
// };
