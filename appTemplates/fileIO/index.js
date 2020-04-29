import fsp from 'fs/promises';
import fs from 'fs';
import path from 'path';
import nexline from 'nexline';
import csv2json from 'csvjson-csv2json';
import xml2json from 'xml2json';
import html2json from 'html2json';
import { LOREM_IPSUM, XML_MOCK, CSV_MOCK, HTML_MOCK } from './constants.js'

class FileIO {
  static FILES_DIR_NAME = 'files';

  static async write(fileName, data) {
    const pathToFile = path.join(process.cwd(), FileIO.FILES_DIR_NAME, fileName);

    return fsp.writeFile(pathToFile, data).then(() => data);
  }
  static async delete(fileName) {
    const pathToFile = path.join(process.cwd(), FileIO.FILES_DIR_NAME, fileName);

    return fsp.unlink(pathToFile);
  }
  static async read(fileName) {
    const pathToFile = path.join(process.cwd(), FileIO.FILES_DIR_NAME, fileName);

    return fsp.readFile(pathToFile, { encoding: 'utf8'});
  }

  static csv2json(csv) {
    return csv2json(csv, {parseNumbers: true});
  }

  static html2json(html) {
    return html2json.html2json(html);
  }

  static xml2json(xml) {
    return xml2json.toJson(xml, {object: true, reversible: true, coerce: true});
  }

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
