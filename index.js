const uuidv1 = require('uuid/v1');
const uuidv5 = require('uuid/v5');
const core = require('@actions/core');

async function run() {
  try {
    const name = core.getInput('name');
    const namespace =
      core.getInput('namespace') || 'f9962f80-1514-11ea-bfe7-1f9e6cf0a044';

    let uuid = uuidv1();
    if (name) {
      uuid = uuidv5(name, namespace);
    }

    core.setOutput('uuid', uuid);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
