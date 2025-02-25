function samplePromise(){
    return Promise.resolve('Alberto');
}

const name = await samplePromise();
console.info(name);