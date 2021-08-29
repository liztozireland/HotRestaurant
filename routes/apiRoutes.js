// LOAD DATA

const tableData = require('../data/tableData');
const waitListData = require('../data/waitinglistData');

// ROUTING

module.exports = (app) => {
  // API GET Requests
  
  app.get('/api/tables', (req, res) => res.json(tableData));

  app.get('/api/waitlist', (req, res) => res.json(waitListData));

  // API POST Requests
  
  app.post('/api/tables', (req, res) => {
   
    if (tableData.length < 5) {
      tableData.push(req.body);
      res.json(true);
    } else {
      waitListData.push(req.body);
      res.json(false);
    }
  });

   app.post('/api/clear', (req, res) => {
    // Empty out the arrays of data
    tableData.length = 0;
    waitListData.length = 0;

    res.json({ ok: true });
  });
};
