// Write your solution in this file!
const employee = new Object()
employee.name = "Larry";
employee.streetAddress = "1 market st";

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const new_employee = {...employee}
    new_employee[key] = value;  

    return new_employee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    const new_employee = employee;
    new_employee[key] = value;

    return new_employee;
}

function deleteFromEmployeeByKey(employee, key, value) {
    const new_employee = {...employee}
    delete new_employee[key]

    return new_employee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    const new_employee = employee
    delete new_employee[key]

    return new_employee;
}