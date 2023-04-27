#!/usr/bin/env node
import Wiki from "./handler/wiki";
import CLI from "./handler/cli";
const inst: Wiki = new Wiki();
const cli: CLI = new CLI(inst);
cli.init();