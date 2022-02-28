// getting all element with the class name of icon-items 
let iconItems = document.querySelectorAll('.icon-items');

  // adding event listener to each icon 
iconItems.forEach(icons=>{
  icons.addEventListener('mouseover',e=>{
    e.currentTarget.lastElementChild.classList.toggle('show');
  });
  icons.addEventListener('mouseout',e=>{
    e.currentTarget.lastElementChild.classList.toggle('show');
  })
})