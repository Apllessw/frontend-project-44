#!/usr/bin/env node
import game from '../src/cli.js';

const userName = game();

console.log(`Hello, ${userName}!`);
