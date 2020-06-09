const buildCount = (i) => {
  let count = i;
  const displeyCount = () => {
    console.log(count++);
  }

  return displeyCount;
}

const myCount = buildCount(1);
myCount();
myCount();
myCount();

const myOtherCount = buildCount(10);
myOtherCount();
myOtherCount();