//display notification counters dynamically
const counterEl = document.querySelector('.notifications-counter');
const unreadEls = document.querySelectorAll('.unread');
counterEl.innerText = unreadEls.length;


// mark all as read 
const markAllAsReadEl = document.querySelector('.mark-as-read');
markAllAsReadEl.addEventListener('click', () =>{
    for (let el of unreadEls) {
        el.classList.remove('unread');
    }
    counterEl.innerText = 0;
});
