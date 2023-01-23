const loanOut = function (amount) {
  return new Promise((resolve, reject) => {
    if (creditLimit <= 0) {
      reject('Insufficient Funds!');
    } else {
      creditLimit -= amount;
      resolve(amount);
    }
  });
};
