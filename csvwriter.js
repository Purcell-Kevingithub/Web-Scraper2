const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const presidentsCvs = require('./potusScraper');

const csvWriter = createCsvWriter({
  path: 'presidential2.csv',
  header: [
    {id: 'name', title: 'Name'},
    {id: 'birthday', title: 'Birthday'}
  ]
});

const data = presidentsCvs();
console.log(presidentsCvs())


// csvWriter
//   .writeRecords(data)
//   .then(()=> console.log('The CSV file was written successfully'));