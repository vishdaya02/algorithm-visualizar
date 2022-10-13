//Generate initiall array
let arr = [];
let height=[];
let outer = document.getElementById('outer');
for (let i = 0; i < 200; i++) {
    let random = (Math.random() * 350) + 20;
    height[i]=random;
    let div = document.createElement('div');
    arr[i] = div;
    arr[i].style.cssText = `display:inline-block ; background-color: blue ; height:${random}px ; width : 3px ; margin-right:1px `;
    outer.appendChild(arr[i]);
}

//To Generate new array
document.getElementById('generate_newarray_button').addEventListener('click', newsize);

//To change the size of the array
let sizeofarray = document.getElementById('size_scroller'). addEventListener('input', newsize);
let a = 1;
function newsize()
{
    sizeofarray = document.getElementById('size_scroller').value;
    if(sizeofarray>=0 && sizeofarray<20)
    {
        for(let i=0 ; i<arr.length ; i++)
        {
            height.pop();
            outer.removeChild(arr[i]);
        }
        let n=arr.length;
        for(let i=0 ; i<n ; i++)
        {
            arr.pop();
        }
        for (let i = 0; i < 15; i++) {
            let random = (Math.random() * 350) + 20;
            height[i]=random;
            let div = document.createElement('div');
            arr[i] = div;
            arr[i].style.cssText = `display:inline-block ; background-color: blue ; height:${random}px ; width : 52.3px ; margin-right:1px `;
            outer.appendChild(arr[i]);
        }
    }
    else if(sizeofarray>=20 && sizeofarray<40)
    {
        for(let i=0 ; i<arr.length ; i++)
        {
            outer.removeChild(arr[i]);
        }
        let n=arr.length;
        for(let i=0 ; i<n ; i++)
        {
            height.pop();
            arr.pop();
        }
        for (let i = 0; i < 30; i++) {
            let random = (Math.random() * 350) + 20;
            height[i]=random;
            let div = document.createElement('div');
            arr[i] = div;
            arr[i].style.cssText = `display:inline-block ; background-color: blue ; height:${random}px ; width : 25.66px ; margin-right:1px `;
            outer.appendChild(arr[i]);
        }
    }
    else if(sizeofarray>=40 && sizeofarray<=60)
    {
        for(let i=0 ; i<arr.length ; i++)
        {
            outer.removeChild(arr[i]);
        }
        let n=arr.length;
        for(let i=0 ; i<n ; i++)
        {
            height.pop();
            arr.pop();
        }
        for (let i = 0; i < 50; i++) {
            let random = (Math.random() * 350) + 20;
            height[i]=random;
            let div = document.createElement('div');
            arr[i] = div;
            arr[i].style.cssText = `display:inline-block ; background-color: blue ; height:${random}px ; width : 15px ; margin-right:1px `;
            outer.appendChild(arr[i]);
        }
    }
    else if(sizeofarray>=60 && sizeofarray<=80)
    {
        for(let i=0 ; i<arr.length ; i++)
        {
            outer.removeChild(arr[i]);
        }
        let n=arr.length;
        for(let i=0 ; i<n ; i++)
        {
            height.pop();
            arr.pop();
        }
        for (let i = 0; i < 100; i++) {
            let random = (Math.random() * 350) + 20;
            height[i]=random;
            let div = document.createElement('div');
            arr[i] = div;
            arr[i].style.cssText = `display:inline-block ; background-color: blue ; height:${random}px ; width : 7px ; margin-right:1px `;
            outer.appendChild(arr[i]);
        }
    }
    else if(sizeofarray>=80 && sizeofarray<=100)
    {
        for(let i=0 ; i<arr.length ; i++)
        {
            outer.removeChild(arr[i]);
        }
        let n=arr.length;
        for(let i=0 ; i<n ; i++)
        {
            height.pop();
            arr.pop();
        }
        for (let i = 0; i < 200; i++) {
            let random = (Math.random() * 350) + 20;
            height[i]=random;
            let div = document.createElement('div');
            arr[i] = div;
            arr[i].style.cssText = `display:inline-block ; background-color: blue ; height:${random}px ; width : 3px ; margin-right:1px `;
            outer.appendChild(arr[i]);
        }
    }
}

//Speed Setting
document.getElementById('speed_scroller').addEventListener('input',getspeed);

function getspeed()
{
    let speed=document.getElementById('speed_scroller').value;
    speed++;
    return speed;
}

let t = 0;

function update_height(x,ind)
{
  let s = getspeed();
  let speed_var = 600 / s;
    setTimeout(() => {
    arr[ind].style.height=`${x}px`;
}, t=t+speed_var);
}

function update_color(color,ind)
{
  let s = getspeed();
  let speed_var = 600 / s;
    setTimeout(() => {
    arr[ind].style.backgroundColor=color;
}, t=t+speed_var);
}

function disable(){
  document.getElementById("bubble_sort_button").disabled = true;
  document.getElementById("insertion_sort_button").disabled = true;
  document.getElementById("heap_sort_button").disabled = true;
  document.getElementById("selection_sort_button").disabled = true;
  document.getElementById("merge_sort_button").disabled = true;
  document.getElementById("quick_sort_button").disabled = true;
  document.getElementById("size_scroller").disabled = true;
  document.getElementById("speed_scroller").disabled = true;
  document.getElementById("generate_newarray_button").disabled = true;
}

function enable(){
  s = getspeed();
  speed_var = 600 / s;
  setTimeout(() => {
  document.getElementById("bubble_sort_button").disabled = false;
  document.getElementById("insertion_sort_button").disabled = false;
  document.getElementById("heap_sort_button").disabled = false;
  document.getElementById("selection_sort_button").disabled = false;
  document.getElementById("merge_sort_button").disabled = false;
  document.getElementById("quick_sort_button").disabled = false;
  document.getElementById("size_scroller").disabled = false;
  document.getElementById("speed_scroller").disabled = false;
  document.getElementById("generate_newarray_button").disabled = false;
},t = t + speed_var);
}
