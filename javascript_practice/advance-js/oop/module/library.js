let name = 'LoneWolf';
function user(userN){
    console.log(`Hye ${userN} I am CEO ${name}`);
}

function salaryBonus(n1,n2){
    return n1 + n2;
}

// shorthand for export 
export {name, user, salaryBonus}