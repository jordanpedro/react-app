const core = require('@actions/core');
const github = require('@actions/github');
const name = core.getInput('who-to-greet')
console.log(`Hellow ${name}`)
try{
throw(new Error("MEnsagem de erro"));
const time = new Date();
core.setOutput("time", time.toTimeString());
}
catch(error){
    core.setFailed(error.message)
}
