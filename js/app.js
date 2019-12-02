const countdown = document.querySelector('.countdown');
const launchDate = new Date('Dec 24, 2019 00:00:00').getTime();

const interval = setInterval(()=>{
    console.log('tick');
    const now = new Date().getTime();
    const distance = launchDate - now;
    console.log(distance);

    const days = Math.floor(distance/(1000*60*60*24));
    const hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));
    const minutes = Math.floor((distance % (1000*60*60))/(1000*60));
    const seconds = Math.floor((distance % (1000*60))/1000);

    countdown.innerHTML = `
        <div><span>${days} päeva</span></div>
        <div><span>${hours} tundi</span></div>
        <div><span>${minutes}  minutit</span></div>
        <div><span>${seconds} sekundit</span></div>
    `;
}, 1000);