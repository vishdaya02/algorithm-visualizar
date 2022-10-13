//BUBBLE SORT
document.getElementById('bubble_sort_button').addEventListener('click', bubbleSort);

function bubbleSort() {
  disable();
  t=0;
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {

    for (let j = 0; j < n - i - 1; j++) {

      update_color("yellow", j);

      if (height[j] > height[j + 1]) {

        update_color("red", j + 1);
        let t = height[j];
        height[j] = height[j + 1];
        height[j + 1] = t;
        update_height(height[j], j);
        update_height(height[j + 1], j + 1);

      }

      update_color("blue", j);

    }

    update_color("green", n - i - 1);

  }

  update_color("green", 0);
  enable();

}
