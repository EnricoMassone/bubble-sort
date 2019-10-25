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

  if (i === j) {
    return;
  }

  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
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

    for (let i = 0; i < nums.length - 1; i++) {
      const current = nums[i];
      const next = nums[i + 1];

      if (current > next) {
        swap(nums, i, i + 1);
        swapped = true;
      }
    }
  } while (swapped);

  return nums;
};

module.exports = {
  bubbleSort
};
