function addAlphaToHex(hexColor, alpha) {
  alpha = Math.round(Math.min(Math.max(alpha || 1, 0), 1) * 255);
  return hexColor + alpha.toString(16).toUpperCase();
}

export { addAlphaToHex };