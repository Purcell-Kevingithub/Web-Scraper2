const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const presidentsCvs = require('./potusScraper');

const csvWriter = createCsvWriter({
  path: 'presidential.csv',
  header: [
    {id: 'name', title: 'Name'},
    {id: 'birthday', title: 'Birthday'}
  ]
});

let data = presidentsCvs;


const asyncCvsWriter = async () => {
  data()
  .then(res => {
    csvWriter
    .writeRecords(res)
    .then(()=> console.log('The CSV file was written successfully'));
  })
}

asyncCvsWriter();

