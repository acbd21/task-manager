const doWork = async () => {
  const sum = await add(1, 2);
  const sum2 = await add(sum, -3);
  return sum2;
};

const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a < 0 || b < 0) {
        return reject("hello");
      }
      resolve(a + b);
    }, 2000);
  });
};

console.log(doWork());

doWork()
  .then((result) => {
    console.log("re", result);
  })
  .catch((error) => {
    console.log("e", error);
  });
