//4. Print all the multiplication tables with numbers from 1 to 10

for(let j=1;j<=10;j++)
{
    console.log(`======== ${j} -TABLE =============`)
    for(let i=1;i<=10;i++)
    {
        let store=j*i;
        console.log(`${j} * ${i} = ${store}`)
        
    }
}