const json2xls = require('json2xls'); // json to excel
const fs = require('fs');
const YAML = require('yaml')

var data = fs.readFileSync('content/ctx.yaml', 'utf8')
data = YAML.parse(data);
console.log(data)

var xls = json2xls(data);

fs.writeFileSync('data.xlsx', xls, 'binary');