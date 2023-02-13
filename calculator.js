function addition(...args)
{ let sum=0
    for(let num of args)
    {
        sum+=num;
    }
    return sum;
}

function product(...args)
{
    let product=1;
    for(let num of args)
    {
        product*=num;
    }
    return product;
}

console.log(product(2, 34, 55, 6, 4));