function createUser(firstname,lastname,age)
{
    let user={
        firstname,
        lastname,
        age
    }
    return user;
}

let p=createUser("preu","sharma",21);
let r=createUser("riddhi","gupta",21);
console.log(p)
console.log(r);