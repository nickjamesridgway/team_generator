class Employee{
    constructor(name, id, email){
        this.name = name,
        this.id = id,
        this.email = email
    };
    getName(){
        return this.name
    }
    getId(){
        return this.id
    }
    getEmail(){
        return this.email
    }
    getRole(){
        return "Employee"
    }
};

// const test = new Employee("Alice", 2, "alice@gmail.com")
// console.log(test)

module.exports = Employee