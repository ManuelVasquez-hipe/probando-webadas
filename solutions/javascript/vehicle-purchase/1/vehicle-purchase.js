// @ts-check

/**
 * Determines whether or not you need a license to operate a certain kind of vehicle.
 *
 * @param {string} kind
 * @returns {boolean} whether a license is required
 */
export function needsLicense(kind) {
  // Solo se necesita licencia si el tipo es "car" o "truck"
  return kind === 'car' || kind === 'truck';
}

/**
 * Helps choosing between two options by recommending the one that
 * comes first in dictionary order.
 *
 * @param {string} option1
 * @param {string} option2
 * @returns {string} a sentence of advice which option to choose
 */
export function chooseVehicle(option1, option2) {
  // Compara en orden alfabético (diccionario)
  const betterOption = option1 < option2 ? option1 : option2;
  return `${betterOption} is clearly the better choice.`;
}

/**
 * Calculates an estimate for the price of a used vehicle in the dealership
 * based on the original price and the age of the vehicle.
 *
 * @param {number} originalPrice
 * @param {number} age
 * @returns {number} expected resell price in the dealership
 */
export function calculateResellPrice(originalPrice, age) {
  // Regla: depende de la edad
  if (age < 3) {
    return originalPrice * 0.8; // menos de 3 años → 80%
  } else if (age >= 3 && age <= 10) {
    return originalPrice * 0.7; // entre 3 y 10 años → 70%
  } else {
    return originalPrice * 0.5; // más de 10 años → 50%
  }
}
