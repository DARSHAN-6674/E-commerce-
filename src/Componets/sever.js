const path = require('path');
app.use(express.static(path.join(__dirname, 'build'))); // NOT 'bulid'
