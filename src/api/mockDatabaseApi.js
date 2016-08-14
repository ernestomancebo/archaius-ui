import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const databases =
  [
    {
      id: 'db1',
      name: 'Data Base 1',
      url: 'mysql://server:port',
      vendor: 'MySQL',
      associatedDomains: '3',
      user: 'userASD',
      pass: 'pwd'
    },
    {
      id: 'db2',
      name: 'Data Base 2',
      url: 'mysql://server:port',
      vendor: 'MySQL',
      associatedDomains: '1',
      user: 'userASD',
      pass: 'pwd'
    },
    {
      id: 'db3',
      name: 'Data Base 3',
      url: 'mysql://server:port',
      vendor: 'MySQL',
      associatedDomains: '1',
      user: 'userASD',
      pass: 'pwd'
    }
  ];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (database) => {
  return replaceAll(database.name, ' ', '-');
};

class databaseApi {
  static getAllDatabases() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], databases));
      }, delay);
    });
  }

  static saveDatabase(database) {
    database = Object.assign({}, database); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minDatabaseTitleLength = 1;
        if (database.title.length < minDatabaseTitleLength) {
          reject(`Name must be at least ${minDatabaseTitleLength} characters.`);
        }

        if (database.id) {
          const existingDatabaseIndex = databases.findIndex(a => a.id == database.id);
          databases.splice(existingDatabaseIndex, 1, database);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new databases in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          database.id = generateId(database);
          databases.push(database);
        }

        resolve(database);
      }, delay);
    });
  }

  static deleteDatabase(databaseId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfDatabaseToDelete = databases.findIndex(database => {
          database.databaseId == databaseId;
        });
        databases.splice(indexOfDatabaseToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default databaseApi;
