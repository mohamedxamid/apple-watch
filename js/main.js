const modifiers = {
    siteHeaderOpen: 'site-header--open'
}

const elSiteHeader = document.querySelector('.site-header');
const elSitenavToggler = elSiteHeader.querySelector('.site-header__sitenav-toggler');

if (elSiteHeader) {
    elSitenavToggler.addEventListener('click', function () {
        elSiteHeader.classList.toggle(modifiers.siteHeaderOpen);
    })
}