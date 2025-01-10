class AuthenticationError extends Error
{
    constructor(message)
    {
        super(message)     // Parent Error class ko call karta hai
        this.name="AuthenticationError"
        this.randomMessage="Hii i am a random message"
    }
}
// throw new AuthenticationError("i am the error")
const a=new AuthenticationError('I am the error')
console.log(a.randomMessage);


