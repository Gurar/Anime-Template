import {Validator} from './Validator.js';

// navbar hamburger button event
const hamburger = () => {
    
    const DOM = document.querySelector('[data-navbar-burger]');
    
    if(!Validator.isValidSelector(DOM)) {
        console.error('ERROR: Selector not exist');
        return false
    }

    DOM.addEventListener('click', (e) => {
        e.preventDefault();
        DOM.classList.toggle('active');

        const navigation = document.querySelector('[data-navbar-nav]');

        if(!Validator.isValidSelector(navigation)) {
            console.error('ERROR: Selector not exist');
            return false;
        }

        navigation.classList.toggle('open');

        window.addEventListener('click', (event) => {
            if(event.target.tagName.toLowerCase() === 'a') {
                DOM.classList.remove('active');
                navigation.classList.remove('open');
            }
        })

    })
    
}

const dropdown = () => {
    const dropdown = document.querySelector('[data-navbar-dropdown]');
    if(!Validator.isValidSelector(dropdown)) {
        console.error('ERROR: Selector not exist');
        return false;
    }

    dropdown.addEventListener('click', (e) => {
        e.preventDefault();
        const dropdownList = document.querySelector('[data-navbar-dropdown-list]');
        if(!Validator.isValidSelector(dropdownList)) {
            console.error('ERROR: Selector not exist');
            return false;    
        }
        dropdownList.classList.toggle('active');
    });
}

export {hamburger, dropdown}