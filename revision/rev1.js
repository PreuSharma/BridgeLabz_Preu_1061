//Create a custom error class that extends the built-in Error class,
//and implement the toString() method to return a formatted string of the error message

class ErrorMessage extends Error{
    constructor(message ,errorMessage)
    {
        super(message);
        this.name="ErrorMessage";
        this.errorMessage=errorMessage;
    }

    toString(){
        return `Error Name : ${this.name}, Code : ${this.errorMessage}, ErrorMessage : ${this.message}`
    }
}

try{
    throw new ErrorMessage("Bad network connection ",404)
}
catch(error){
    console.log(error.toString());
}



