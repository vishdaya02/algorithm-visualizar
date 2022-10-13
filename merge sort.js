//MERGE SORT
document.getElementById('merge_sort_button').addEventListener('click', mergeSort);
function mergeSort() {
    disable();
    t = 0;
    let l = 0, h = arr.length - 1;
    MergeSort(l, h);
    enable();
}

function Merge(l, mid, h) {
    let i = l,j = mid+1,k=l;

    let b=[];

    while (i <= mid && j <= h) {
        if (height[i] <= height[j]) {
            b[k] = height[i];
            update_color("red",i);
            i++;
        }
        else {
            b[k] = height[j];
            update_color("red",j);
            j++;
        }
        k++;
    }


    while (i <= mid) {
        b[k] = height[i];
        update_color("red",i);
        i++;
        k++;
    }

    while (j <= h) {
        b[k] = height[j];
        update_color("red",j);
        j++;
        k++;
    }

    for(i=l;i<=h;i++){
      height[i] = b[i];
      update_height(height[i],i);
      update_color("green",i);
    }
}
function MergeSort(l, h) {
    let mid;
        if (l < h) {
            mid = Math.floor((l + h) / 2);
            update_color("yellow",mid);
            MergeSort(l, mid);
            MergeSort(mid + 1, h);
            Merge(l, mid, h);
        }
}
