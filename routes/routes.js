'use strict'

const UserRoutes = require('./api/UserRoutes');
const EmployeeRoutes = require('./api/EmployeeRoutes');

const routes = (router) => {


    router.use('/api', EmployeeRoutes);
    router.use('/api', UserRoutes);

    router.get('/', (req, res) => {
        res.send("Hello World")
    })

}

module.exports = routes;
