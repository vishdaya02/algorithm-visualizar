//QUICK SORT
document.getElementById('quick_sort_button').addEventListener('click', quick);
function quick() {
  disable();
  t = 0;
  let l = 0, r = arr.length;
  quickSort(l, r);
  enable();
}

function partition(l, h) {

  let pivot = height[l];
  let i = l;
  let j = h;

  update_color("yellow",l);
  do {
    do { i++; } while (height[i] <= pivot);
    do { j--; } while (height[j] > pivot);

    if (i < j) {
      let temp = height[i];
      height[i] = height[j];
      height[j] = temp;

      update_color("red",i);
      update_color("red",j);

      update_height(height[i],i);
      update_height(height[j],j);

      update_color("blue",i);
      update_color("blue",j);
    }
  } while (i < j);

  let temp = height[l];
  height[l] = height[j];
  height[j] = temp;

  update_color("red",j);
  update_color("red",l);

  update_height(height[l],l);
  update_height(height[j],j);

  update_color("green",j);
  return j;
}

function quickSort(l, h) {
    let j;
    if (l < h) {
      j = partition(l, h);
      quickSort(l, j);
      quickSort(j + 1, h);
    }
}
