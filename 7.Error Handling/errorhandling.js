function validateName(name) {
    try {
        if (name.match(/[\$\#]/)) {// error occurs here
            throw new Error("Name should not contain $");
        }
        else {
            return true;
        }
    }
    catch (error) {
        console.log(error.message);
        if (error instanceof TypeError)
            console.log("Type Error Occurred");
        else if (error instanceof RangeError)
            console.log("Range Error Occurred");
        else if (error instanceof SyntaxError)
            console.log("Syntax Error Occurred");
        else
            console.log("Some other Error Occurred");
    }
    finally{
        console.log("Cleaning up resources");
    }
}
validateName("Josh$");



