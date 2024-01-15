// variables
const menuBtn = document.querySelector('.sidebar-btn');
const sidebar = document.querySelector('.sidebar');
const sidebarSpan = document.querySelectorAll('#sidebar span');
const sidebarInput = document.querySelector('#sidebar .input-group');
const main = document.querySelector('.main');

// add span display:block class to all sidebar's span
sidebarSpan.forEach((span)=>{
    span.classList.add('span');
});

menuBtn.addEventListener('click',()=>{
    sidebar.classList.toggle('sidebar-toggle');
    console.log(sidebar.className);
    // console.log(sidebar.offsetWidth);

    // main.style.marginLeft = sidebar.offsetWidth;
    if (sidebar.offsetWidth == 246) {
        console.log('246');
        main.style.marginLeft = '70px';
    }else if (sidebar.offsetWidth == 70) {
        console.log('70');
        main.style.marginLeft = '240px';

    }

    sidebarSpan.forEach((span)=>{
        span.classList.toggle('span-none');

    });
    sidebarInput.classList.toggle('span-none');

});

    
    // mouse enter
    sidebar.addEventListener('mouseenter',()=>{
        if (sidebar.offsetWidth == 70) {

            sidebarSpan.forEach((span)=>{
                span.classList.remove('span-none');
            });
        }
    });
    // mouse leave
    sidebar.addEventListener('mouseleave',()=>{
        console.log('mouse leave');
        if (sidebar.offsetWidth == 246) {

            sidebarSpan.forEach((span)=>{
                span.classList.add('span-none');
            });
        }
    
    });
