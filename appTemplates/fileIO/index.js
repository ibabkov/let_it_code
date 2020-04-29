import fsp from 'fs/promises';
import fs from 'fs';
import path from 'path';
import nexline from 'nexline';
import csv2json from 'csvjson-csv2json';
import xml2json from 'xml2json';
import html2json from 'html2json';
import { LOREM_IPSUM, XML_MOCK, CSV_MOCK, HTML_MOCK } from './constants.js'

/**
 * Class with some IO methods
 */
class FileIO {
  static FILES_DIR_NAME = 'files';

  /**
   * @param {string} fileName
   * @param {string} data
   * @returns {Promise<string>}
   * @description writes file to the dir
   */
  static async write(fileName, data) {
    const pathToFile = path.join(process.cwd(), FileIO.FILES_DIR_NAME, fileName);

    return fsp.writeFile(pathToFile, data).then(() => data);
  }

  /**
   * @param {string} fileName
   * @returns {Promise<void>}
   * @description deletes file from the dir
   */
  static async delete(fileName) {
    const pathToFile = path.join(process.cwd(), FileIO.FILES_DIR_NAME, fileName);

    return fsp.unlink(pathToFile);
  }

  /**
   * @param {string} fileName
   * @returns {Promise<string>}
   * @description Return whole file as a string
   */
  static async read(fileName) {
    const pathToFile = path.join(process.cwd(), FileIO.FILES_DIR_NAME, fileName);

    return fsp.readFile(pathToFile, { encoding: 'utf8'});
  }

  /**
   * @param {string} csv
   * @returns {*}
   * @description converts csv string to json obj
   */
  static csv2json(csv) {
    return csv2json(csv, {parseNumbers: true});
  }

  /**
   * @param {string} html
   * @returns {*}
   * @description converts html string to json obj
   */
  static html2json(html) {
    return html2json.html2json(html);
  }

  /**
   * @param {string} xml
   * @returns {*}
   * @description converts xml string to json obj
   */
  static xml2json(xml) {
    return xml2json.toJson(xml, {object: true, reversible: true, coerce: true});
  }

  /**
   * @param fileName
   * @returns {{ next: Promise<string> }}
   * @description returns generator that returns file line by line
   */
  static readLineByLine(fileName) {
    const pathToFile = path.join(process.cwd(), FileIO.FILES_DIR_NAME, fileName);

    return nexline({
      input: fs.openSync(pathToFile, 'r'), // input can be file, stream, string and buffer
    });
  }
}

const myFunc = async() => {
  await FileIO.write('temp.txt', LOREM_IPSUM).then((data) => {
    console.log('Txt file has been written!\n', data);
  });

  console.log('---------------------------------------------------------------');

  const csv = await FileIO.write('temp.csv', CSV_MOCK).then((data) => {
    console.log('Csv file has been written!\n', data);

    return data;
  });

  console.log('---------------------------------------------------------------');

  await FileIO.write('temp.xml', XML_MOCK).then((data) => {
    console.log('Xml file has been written!\n', data);
    console.log('An JSON data from xml', FileIO.xml2json(data));

    return data;
  });

  console.log('---------------------------------------------------------------');

  await FileIO.write('temp.html', HTML_MOCK).then((data) => {
    console.log('HTML file has been written!\n', data);
    console.log('An JSON data from HTML', FileIO.html2json(data));

    return data;
  });

  console.log('---------------------------------------------------------------');

  await FileIO.write('temp.json', JSON.stringify(FileIO.csv2json(csv))).then((data) => {
    console.log('JSON file has been written!\n', data);
  });

  console.log('---------------------------------------------------------------');

  await FileIO.read('temp.txt').then((data) => {
    console.log('File was read!\n', data)
  });

  console.log('---------------------------------------------------------------');

  const nl = FileIO.readLineByLine('temp.txt');

  console.log('First line!', await nl.next());

  // console.log('---------------------------------------------------------------');
  //
  // await FileIO.delete('temp.txt').then(() => {
  //   console.log('File was deleted!')
  // });
};

myFunc();
