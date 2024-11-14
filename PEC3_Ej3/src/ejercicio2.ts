interface Plane{
    model:string,
    npassengers:number
}
interface HangarHash {
    [hash: string]: Plane;
}

let myHangar:HangarHash = {}

myHangar['123Z']={
    model:'airbus',
    npassengers:200
}
myHangar['H789']={ 
    model:'boeing',
    npassengers:151
}

for (const hash in myHangar) {
    const plane = myHangar[hash];
    console.log(`${hash}:${plane.model}(${plane.npassengers})`);
}
