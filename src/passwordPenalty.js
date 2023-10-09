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

  let regexMatch = /([a-zA-Z0-9])\1{1,}/g;
  let regex = new RegExp(regexMatch, "g");
  const sequences = password.match(regex);
  
  if (sequences) {
    return sequences.reduce((penality, sequence) => {
      return (
        penality + (sequence.length === 2 ? 1 : sequence.length >= 3 ? 2 : 0)
      )
    }, 0);
  }

}
