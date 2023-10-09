/**
 * Calculates the sum of penalty points for a given password.
 * Double characters like `aa` count as 1 penalty point, triples and more are 2 points.
 * It returns the sum of penalty points for a password or 0.
 * @param {string} password
 * @returns {number}
 */
export default function penaltyPoints(password = "") {
  // The following line ensures, that password is always a string, like the number 128 -> string "128"
  if (typeof password !== "string") password = String(password);

  // * * * * * * * * * * * * * * * * * * * * * * * * * * * *
  // * * * INSERT YOUR CODE HERE * * * * * * * * * * * * * *
  // * * * * * * * * * * * * * * * * * * * * * * * * * * * *
  //

  const regex = /([a-zA-Z0-9])\1{1,}/g;
  const sequences = password.match(regex);

  let penalityPoint = 0;
  if (sequences) {
    for (let sequence of sequences) {
      const consecutiveCount = sequence.length - 1;
      if (consecutiveCount === 2) {
        penalityPoint += 1;
      } else if (consecutiveCount >= 3) {
        penalityPoint += 2;
      }
    }
  }

  return penalityPoint;
}
