export const timeRegex = /^\d{2}:\d{2}$/;

export const minutesRegex = /[0-5]?[0-9]/;

export const formatTime = inputString => {
  // If blank, immediately populate with colon and three other zero digits
  // must not exceed 5 characters (colon being one of said characters)
  // Exceeding it unshifts first character always to preserve max number of characters
  // Repositioning cursor does not unshift but changes digit in question
  if (inputString.length < 2) {
    return inputString;
  } else {
    return (
      /[0-5]?[0-9]/.test(inputString.slice(1, 3)) && inputString.slice(1, 3)
    );
  }
};
