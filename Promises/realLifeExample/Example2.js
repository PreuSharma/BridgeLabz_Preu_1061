// Custom AuthenticationError class

class AuthenticationError extends Error 
{
    constructor(message) 
    {
        super(message); 
        this.name = "AuthenticationError"; 
    }
}


function authenticateUser(username, password) 
{
    let correctUsername="iamcorrect"; 
    let correctPassword="p1235";  

    if (username===correctUsername && password===correctPassword) 
    {
        console.log("User successfully authenticated!");
    } 
    else {
        throw new AuthenticationError("Invalid username or password");
    }
}

try 
{
    let username="iamcorrect";  
    let password="wrongpassword"; 
    
    authenticateUser(username, password);
}
catch(error) 
{
    console.log(`${error.name}: ${error.message}`);  
}
