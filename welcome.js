import { verifyName } from './getName.js';
console.log("=".repeat(35));
console.log("Welcome to eligibility check");
console.log("=".repeat(35));
console.log("\n");
const userName = verifyName(username);
console.log(`Hello ${userName}!\n`);