document.getElementById('heap_sort_button').addEventListener('click', function HEAPSORT() {
    t=0;
    disable();
    HeapSort(height);
    enable();
});
let array_length;
function heap_root(height, i) {

    let left = 2 * i + 1;
    let right = 2 * i + 2;
    let max = i;
    if (left < array_length && height[left] > height[max]) {
        max = left;
    }

    if (right < array_length && height[right] > height[max]) {
        max = right;
    }

    if (max != i) {
        swap(height, i, max);
        update_color("red",max);
        update_color("red",i);
        update_height(height[max],max);
        update_height(height[i],i);
        update_color("blue",max);
        update_color("blue",i);
        heap_root(height, max);
    }
}

function swap(height, index_A, index_B) {
    let temp = height[index_A];
    height[index_A] = height[index_B];
    height[index_B] = temp;
}
function HeapSort(height) {
    t=0;
    console.log("clicked?");
    array_length = arr.length;

    for (let i = Math.floor(array_length / 2); i >= 0; i -= 1) {
            heap_root(height, i);
        
    }
  
    for (let i = arr.length - 1; i > 0; i--) {
            swap(height, 0, i);
            update_height(height[0],0);
            update_height(height[i],i);
            update_color("yellow",i);
            array_length--;
            heap_root(height, 0);
            update_color("green",i);
    }
    update_color("green",0);

}
