$(document).ready(function() {




    $('#profile__ripple').ripples({
        resolution:512,
        dropRadius:20,
        perturbance:0.04,
    });


    // progress bar logic

    const bars = document.querySelectorAll('.progress__bar');
    bars.forEach(function(bar) 
    {
        let percentage = bar.dataset.percent;
        let tooltip = bar.children[0];
        tooltip.innerText = percentage + '%';
        bar.style.width = percentage + '%';
    })



    // counter logic
    const counters = document.querySelectorAll('.counter');
    
    function runCounter() {

        counters.forEach(counter => {

            counter.innerText = 0;

            let target = +counter.dataset.count;

            let step = target / 100;
           

            // recursion 
            let countIt = function () {
                let displayedData = +counter.innerText;
                if(displayedData < target)
                {
                    counter.innerText = Math.ceil(displayedData + step);
                    setTimeout(countIt, 2);
                } 
                else
                {
                    counter.innerText = target;
                }
            }
            countIt();

        })
    }
    let counterSection = document.querySelector('.counter__wrapper');
    let options = {

        rootMargin: '0px 0px -100px 0px'
    }
    let done = 0;
    const sectionObserver = new IntersectionObserver(function(entries) {
        if(entries[0].isIntersecting && done !== 1)
        {
            done = 1;
            runCounter();
        }
    },options)
    sectionObserver.observe(counterSection);





    // image filter
    var $wrapper = $('.portfolio__wrapper');

    // initate
    $wrapper.isotope(
        {
            filter: '*',
            layoutMode: 'masonry',
            animationOptions : {
                duration:750,
                easing: 'linear'
            }
        }
    )


    
    let links = document.querySelectorAll('.tabs a');
    links.forEach(link => {

        let selecter = link.dataset.filter;
        link.addEventListener('click' ,function(e) {
            e.preventDefault();


            $wrapper.isotope(
                {
                    filter: selecter,
                    layoutMode: 'masonry',
                    animationOptions : {
                        duration:750,
                        easing: 'linear'
                    }
                }
            )
                e.target.classList.add('active');
                links.forEach(link => {
                    link.classList.remove('active');
                })

                e.target.classList.add('active');

        })
    })


    // magnificpopup 
    $('.magnify').magnificPopup(
        {
            type:'image',
            gallery: {
                enabled:true
            },
            zoom: {
                enable:true
            }
        }
    )

    // slider
    $('.slider').slick(
        {
            arrows:false,
            autoplay:true 
        }
    );

});


