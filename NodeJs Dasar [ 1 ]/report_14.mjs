import process from "process";

process.report.reportOnFatalError = true;
process.report.reportOnSignal = true;
process.report.reportOnUncaughtException = true;
process.report.filename = 'report.json';

function sampleError(){
    throw new Error('Ups');
}

sampleError();

// run : node --report-uncaught-exception --report-on-signal \ --report-on-fatalerror namafile.js