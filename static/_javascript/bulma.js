document.addEventListener('DOMContentLoaded', function () {
    // The following code is based off a toggle menu by @Bradcomp
// source: https://gist.github.com/Bradcomp/a9ef2ef322a8e8017443b626208999c1

    const burger = document.querySelector('.burger');
    const menu = document.querySelector('#' + burger.dataset.target);
    burger.addEventListener('click', function () {
        burger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    });


    const section = document.querySelectorAll(".screen");
    let sections = {},
        i = 0;

    Array.prototype.forEach.call(section, function (e) {
        sections[e.id] = e.offsetTop;
    });

    window.onscroll = function () {
        const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

        for (i in sections) {
            if (sections[i] <= scrollPosition) {
                const currentActive = document.querySelector('.is-active');
                if (currentActive) {
                    currentActive.setAttribute('class', '');
                }
                const query = 'a[href*=' + i + ']';
                document.querySelector(query).parentElement.setAttribute('class', 'is-active');
            }
        }
    };

});