class AppError extends Error {                     //extend will extend the built in class of es6 class inheritance example
    constructor(message, statusCode) {             // constructor is called automatically
        super(message)                             //super is called to call the parent constructor
        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith("4") ? "fail" : "error" // 400 or 500 startsWith 4
        this.isOperational = true;

        Error.captureStackTrace(this, this.constructor)
    }
}

module.exports = AppError