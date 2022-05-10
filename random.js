let domain = ["telegigs", "medigigs", "taskmo", "digital"]
function generateRandom(maxLimit = domain.length) {
  let rand = Math.random() * maxLimit;

  let ss = parseInt(rand)

  return ss;
}
generateRandom();
console.log(domain[generateRandom()])