const express = require('express'),
    cors = require('cors'),
    routes = require('./routes'),
	app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333, () => {
	console.log('Server has started!');
});
