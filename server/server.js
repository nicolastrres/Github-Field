import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../build')));

app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, '../build', 'index.html'));
});

app.listen(3000, () => {
  console.log(`Server started on PORT 3000`);
});