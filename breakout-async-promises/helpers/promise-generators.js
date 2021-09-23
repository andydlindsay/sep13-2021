const createPromise = (name, delay = 1000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Promise ${name} has resolved`);
    }, delay);
  });
};

const createRejectedPromise = (name, delay = 1000) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(`Promise ${name} is rejected`);
    }, delay);
  });
};

module.exports = {
  createPromise,
  createRejectedPromise
};
