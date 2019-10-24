const swap = (nums, i, j) => {
  if (!Array.isArray(nums)) {
    throw new TypeError("nums must be an array");
  }

  if (i < 0 || i >= nums.length) {
    throw new RangeError(
      `Index ${i} is out of array bounds. Array length is ${nums.length}.`
    );
  }

  if (j < 0 || j >= nums.length) {
    throw new RangeError(
      `Index ${j} is out of array bounds. Array length is ${nums.length}.`
    );
  }

  throw new Error("Not implemented");
};

const bubbleSort = nums => {
  if (!Array.isArray(nums)) {
    throw new TypeError("nums must be an array");
  }

  if (nums.some(item => typeof item !== "number")) {
    throw new TypeError("all items in nums must be of type number");
  }

  if (nums.length < 2) {
    return nums;
  }

  let swapped = false;

  do {
    swapped = false;
  } while (swapped);

  return nums;
};

module.exports = {
  bubbleSort
};
