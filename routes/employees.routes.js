const express = require('express');
const router = express.Router();
const EmployeesController = require('../controllers/employees.controller');

router.get('/employees', EmployeesController.getAll);
router.get('/employees/random', EmployeesController.getRandom);
router.get('/employees/:id', EmployeesController.getEmployeeById);
router.post('/employees', EmployeesController.createEmployee);
router.put('/employees/:id', EmployeesController.editEmployeeById);
router.delete('/employees/:id', EmployeesController.deleteEmployeeById);

module.exports = router;
