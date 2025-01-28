function myFunction(a, b) {
  if (a === 0 || b === 0) {
    throw new Error('Division by zero is not allowed!');
  }
  return a / b;
}