const express = require('express');
const router = express();
const EmployeeController = require('../../controller/EmployeeController');

router.get('/employee', EmployeeController.dataEmployee);
router.post('/employee/create', EmployeeController.createdEmployee);
router.put('/employee/update/:id', EmployeeController.updateEmployee);
router.delete('/employee/:id', EmployeeController.removeEmployee);

module.exports = router;