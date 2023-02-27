const core = require('@actions/core');
const github = require('@actions/github');
const { ExitCode } = require('./dist');
const name = core.getInput('who-to-greet')
console.log(`Hellow ${name}`)
core.debug("Salve  DEBUG!")
core.warning("Salve  warning!")
try{ 
const time = new Date();
core.setOutput("time", time.toTimeString());
core.exportVariable("EXPORTADA", "TOP");
}
catch(error){
    core.setFailed(error.message)
} 
