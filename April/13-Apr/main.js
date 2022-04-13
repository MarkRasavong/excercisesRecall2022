function printChildrenRecursive(t) {
  if (t.children.length === 0) return

  //checks for each persons children and if they have nothing return
  // => best for nested children
  t.children.forEach(child => {
    console.log(child.name)
    printChildrenRecursive(child)
  })
};

const giosTree = {
  name: "Giovanni Benazzi",
  children: [
    {
      name: "Gianni Benazzi",
      children: []
    },
    {
      name: "Zoe Decoco",
      children: [
        { name: "Giacomo Decoco", children: [] },
        {
          name: "Sophia Decoco", children: [
            { name: "Fabio Quartararo", children: [] },
          ]
        }
      ]
    },
  ],
};

const fibonacci = (num) => {
  const arr = new Array(0, 1);
  let a, b;

  for (let i = 2; i < num; i++) {
    a = arr[i - 2];
    b = arr[i - 1];

    arr.push(a + b);
  }

  return arr;
}

const factorial = (num) => {

  for (let i = num - 1; i >= 1; i--) {
    num *= i
  }

  return num
}