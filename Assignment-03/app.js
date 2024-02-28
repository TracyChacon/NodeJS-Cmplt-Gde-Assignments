const path = require('path');

const express = require('express');

const app = express();

const mainRoutes = require('./routes/index');
const userRoutes = require('./routes/users');
const errorRoutes = require('./routes/404');

app.use(express.static(path.join(__dirname, 'public', 'css')));


app.use(mainRoutes);
app.use('/users', userRoutes);
app.use(errorRoutes);

app.listen(3000);