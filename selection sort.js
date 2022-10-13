//SELECTION SORT
document.getElementById('selection_sort_button').addEventListener('click', selectionSort);

function selectionSort() {
  disable();
  t=0;
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {

    update_color("red", i);
    let k = i;

    for (let j = i + 1; j < n; j++) {

      update_color("yellow", j + 1);
      if (height[j] < height[k]) {
        if (i != k) {
          update_color("blue", k);
        }
        k = j;
        update_color("red", k);
      }
      update_color("blue", j + 1);

    }

    let t = height[k];
    height[k] = height[i];
    height[i] = t;
    update_color("blue", k);
    update_height(height[i], i);
    update_height(height[k], k);
    update_color("green", i);

  }
  update_color("green", n - 1);
  enable();
}
