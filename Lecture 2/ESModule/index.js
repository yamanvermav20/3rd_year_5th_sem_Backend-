export function add(a, b){ // firstly we make this file as index.mjs then we add  type module in package.json and we reaname
    return a + b;           // rename it to js file
}
export function sub(a, b){
    return a - b;
}
function mult(a, b){
    return a * b;
}
export default mult;
// export default sub;
// export default add;