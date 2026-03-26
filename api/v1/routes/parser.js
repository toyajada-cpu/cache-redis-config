const fs = require('fs');
const path = require('path');
const xml2js = require('xml2js');

class Parser {
  constructor(filePath) {
    this.filePath = filePath;
  }

  async parse() {
    const fileContent = await this.readFile(this.filePath);
    const parser = new xml2js.Parser();
    const data = await parser.parseStringPromise(fileContent);
    return data;
  }

  async readFile(filePath) {
    return new Promise((resolve, reject) => {
      fs.readFile(filePath, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data.toString());
        }
      });
    });
  }
}

module.exports = Parser;