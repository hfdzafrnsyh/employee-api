const Employee = require('../models/EmployeeModels');
const User = require('../models/UsersModels');

module.exports.dataEmployee = async (req, res) => {

    await Employee.find()
        .populate('userId')
        .then(employe => {
            res.status(200).json({
                success: true,
                employee: employe
            })
        })
        .catch(err => {
            res.status(500).json({
                success: false,
                error: err,
                message: "Internal Server Error"
            })
        })
}


module.exports.createdEmployee = async (req, res) => {

    let userId = await User.findById(req.body.userId);

    if (!userId) {
        res.status(404).json({
            success: true,
            message: "User Nothing"
        })
    }

    let Employees = new Employee({
        userId: userId,
        role: req.body.role,
        address: req.body.address,
        phone: req.body.phone,
        sallary: req.body.sallary
    })

    Employees.save()
        .then(employe => {
            res.status(201).json({
                success: true,
                message: "Success Created Employee",
                employee: employe
            })
        })
        .catch(err => {
            res.status(500).json({
                success: false,
                mesage: "Internal Server Error",
                error: err
            })
        })

}

module.exports.updateEmployee = async (req, res) => {

    await Employee.findByIdAndUpdate(req.params.id)
        .then(employe => {
            if (!employe) {
                res.status(404).json({
                    success: false,
                    message: "Nothing Employee"
                })
            }

            employe.role = req.body.role;
            employe.address = req.body.address;
            employe.phone = req.body.phone;
            employe.sallary = req.body.sallary;

            employe.save()
                .then(employes => {
                    res.status(200).json({
                        success: true,
                        employe: employes
                    })
                })
                .catch(err => {
                    res.status(400).json({
                        success: false,
                        message: "Failed Update",
                        error: err
                    })
                })
        })
        .catch(err => {
            res.status(500).json({
                success: false,
                message: "Internal Server Error",
                error: err
            })
        })

}


module.exports.removeEmployee = async (req, res) => {

    await Employee.findByIdAndRemove(req.params.id)
        .then(employe => {
            if (!employe) {
                res.status(404).json({
                    success: false,
                    message: "Nothing Employers"
                })
            }

            res.status(200).json({
                success: true,
                message: "Delete Successfully"
            })
        })
        .catch(err => {
            res.status(500).json({
                success: false,
                mesage: "Internal Server Error",
                error: err
            })
        })

}