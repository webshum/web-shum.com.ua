/* ANIMATION PAGE
---------------------------------------------------- */
function animScrollPage() {
    const elems = document.querySelectorAll('.animated');
    const options = {rootMargin: '0px'}
   
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting)
                entry.target.classList.add('show');
        });
    }, options);
   
    elems.forEach(elem => {
        observer.observe(elem);
    });
}
   
animScrollPage();

/* ANHOR
---------------------------------------------------- */ 
function anhor() {
   const anchors = document.querySelectorAll('a[href*="#"]');

    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const blockID = anchor.getAttribute('href').substr(1);
            const element = document.getElementById(blockID); 

            if (element != null) {
                let pos = (element.getBoundingClientRect().top + window.pageYOffset);
                window.scrollTo({top: pos, behavior: 'smooth'});
            }           
        });
    }
}

anhor();