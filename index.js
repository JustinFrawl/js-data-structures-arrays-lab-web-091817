// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name){
drivers.push(name)
}
function destructivelyPrependDriver(name){
drivers.unshift(name)
}
function destructivelyRemoveLastDriver(name) {
  drivers.pop(name)
}
function destructivelyRemoveFirstDriver(name){
  drivers.shift(name)
}
function prependDriver(name){
  return [name, ...drivers];
}
function appendDriver(name){
  return [...drivers, name];
}
function removeFirstDriver() {
  return drivers.slice(1);
}
function removeLastDriver() {
  return drivers.slice(0, drivers.length - 1);
}
