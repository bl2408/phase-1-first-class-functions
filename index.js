const receivesAFunction = fn => fn();

const returnsANamedFunction = () => receivesAFunction;

const returnsAnAnonymousFunction = ()=> ()=>{};