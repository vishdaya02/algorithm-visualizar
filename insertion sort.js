//INSERTION SORT
document.getElementById('insertion_sort_button').addEventListener('click', insertionSort);

function insertionSort() {
  disable();
  t = 0;
  let n = arr.length;

  for (let i = 0; i < n; i++) {

    let key, j;
    update_color("yellow", i);
    key = height[i];
    j = i - 1;

    while (j >= 0 && height[j] > key) {
      update_color("red", j);
      height[j + 1] = height[j];
      update_height(height[j + 1], j + 1);
      update_color("red", j + 1);
      j = j - 1;
    }

    height[j + 1] = key;
    update_height(key, j + 1);
    let p = i;

    while (p >= 0) {
      update_color("green", p);
      p--;
    }
  }
  enable();

}
