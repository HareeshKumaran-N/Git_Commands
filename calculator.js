function addition(...args)
{ let sum=0
    for(let num of args)
    {
        sum+=num;
    }
    return sum;
}


console.log(addition(2, 34, 55, 6, 4));