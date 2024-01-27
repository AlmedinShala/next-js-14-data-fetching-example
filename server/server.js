const express = require('express');

const app = express();
const cors = require('cors');

const PORT = 3000;

app.use(cors());

app.get('/companies', (req, res) => {
  const companies = [
    {
      id: 0,
      companyName: 'Company Red',
      companyDescription: 'Description of company Red',
      color: 'red',
    },
    {
      id: 1,
      companyName: 'Company Blue',
      companyDescription: 'Description of company Blue',
      color: 'blue',
    },
    {
      id: 2,
      companyName: 'Company Green',
      companyDescription: 'Description of company Green',
      color: 'green',
    },
  ];

  res.json(companies);
});

app.get('/company/:id', (req, res) => {
  const requestedId = parseInt(req.params.id);

  const companies = [
    {
      id: 0,
      companyName: 'Company Red',
      companyDescription: 'Description of company Red',
      color: 'red',
    },
    {
      id: 1,
      companyName: 'Company Blue',
      companyDescription: 'Description of company Blue',
      color: 'blue',
    },
    {
      id: 2,
      companyName: 'Company Green',
      companyDescription: 'Description of company Green',
      color: 'green',
    },
  ];

  const company = companies.find((ws) => ws.id === requestedId);

  if (company) {
    res.json(company);
  } else {
    res.status(404).send('Company not found');
  }
});

app.get('/user', (req, res) => {
  res.json({
    userId: 0,
    userName: 'Almedin Shala',
  });
});

app.get('/company/:id/stats', (req, res) => {
  const requestedId = parseInt(req.params.id);

  const companyStats = [
    {
      id: 0,
      companyUsers: 23,
      companyActivity: 36,
    },
    {
      id: 1,
      companyUsers: 45,
      companyActivity: 125,
    },
    {
      id: 2,
      companyUsers: 100,
      companyActivity: 100,
    },
  ];

  const stats = companyStats.find((stat) => stat.id === requestedId);

  setTimeout(() => {
    if (stats) {
      res.json(stats);
    } else {
      res.status(404).send('Company statistics not found');
    }
  }, 5000);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
