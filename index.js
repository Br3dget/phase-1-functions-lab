// Code your solution in this file!
function distanceFromHqInBlocks(somevalue){
    const hqBlock = 42;
    return Math.abs(somevalue - hqBlock)
}
const {distanceFromHqInBlocks } = require('../index');
const{expect} = require("chai");