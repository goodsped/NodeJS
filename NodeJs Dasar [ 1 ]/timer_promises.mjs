import timers from 'timers/promises';

console.info(new Date());
const value = await timers.setTimeout(5000, '5 Second');
console.info(new Date());
console.info(value);

for await (const startTime of timers.setInterval(2000, "ignored")){
    console.info(`Start time  at ${new Date()}`);
}