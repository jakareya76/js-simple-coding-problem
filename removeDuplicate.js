const friends = [
  "ajit",
  "suvas",
  "arif",
  "zain",
  "ibrahim",
  "sunny",
  "ajit",
  "arif",
  "suvas",
  "zain",
];

function removeDuplicate(array) {
  const unique = [];

  for (item of array) {
    if (!unique.includes(item)) {
      unique.push(item);
    }
  }
  return unique;
}

const noDuplicateFriends = removeDuplicate(friends);
console.log(noDuplicateFriends);
