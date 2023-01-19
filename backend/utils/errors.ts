export class ApplicationError extends Error {
  constructor(message: string, public httpStatus: number) {
    super(message);

    Object.setPrototypeOf(this, ApplicationError.prototype);
  }
}

export class InternalServerError extends ApplicationError {
  constructor() {
    super("internal server error", 500);

    Object.setPrototypeOf(this, InternalServerError.prototype);
  }
}

// const err1 = new Error();
// const err2 = new InternalServerError();
// const err3 = new ApplicationError("abc", 100);

// console.log(err1 instanceof Error); // True
// console.log(err1 instanceof ApplicationError); //False

// console.log(err2 instanceof Error); // True
// console.log(err2 instanceof ApplicationError); // True
// console.log(err2 instanceof InternalServerError); // True

// console.log(err3 instanceof Error); // True
// console.log(err3 instanceof ApplicationError); // True
// console.log(err3 instanceof InternalServerError); // False
