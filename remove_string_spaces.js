/*
Simple, remove the spaces from the string, then return the resultant string.
*/

const noSpace = (x) => {
  let unSpaced = '';

  for (let i = 0; i < x.length; i++) {
      if(x[i] !== " ") {
          unSpaced = unSpaced + x[i];
      }
  }

  console.log("Here is the answer: " + unSpaced);
  return unSpaced;
}

noSpace("Here is an example."); // Hereisanexample.
noSpace("Another  one isright here      too  ."); // Anotheroneisrightheretoo.