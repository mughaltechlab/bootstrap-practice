const menuBtn = document.querySelector('.sidebar-btn');
const sdiebar = document.querySelector('.sidebar');
const sidebarSpan = document.querySelectorAll('#sidebar span');
const sidebarInput = document.querySelector('#sidebar .input-group');

// add span display:block class to all sidebar's span
sidebarSpan.forEach((span)=>{
    span.classList.add('span');
});

menuBtn.addEventListener('click',()=>{
    sdiebar.classList.toggle('sidebar-toggle');
    sidebarSpan.forEach((span)=>{
        span.classList.toggle('span-none');
    });
    sidebarInput.classList.toggle('span-none');
    
});
