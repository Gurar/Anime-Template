import {Validator} from './Validator.js';

const generateCardList = (lists) => {
    if(!Validator.isArray(lists)) {
        return false;
    }

    let HTML = '';
    lists.forEach(list => {
        HTML += `<span class="card__list-item">${list}</span>`;   
    });

    return HTML;
}

const renderContent = (params) => {
    //input validate
    if(!Validator.isObject(params)) {
        return false;
    }

    if(!Validator.isString(params.selector)) {
        return false;
    }

    const DOOM = document.querySelector(params.selector);
    const data = params.data;

    if(!Validator.isValidSelector(DOOM)) {
        return false;
    }

    //data  type validate

    if(!Validator.isArray(data)) {
        return false;
    }

    //logic

    let HTML= '';
    for(let item in data) {
        if(!Validator.isObject(data[item])) {
            continue;
        }

        if(!Validator.isString(data[item].image)) {
            return false;    
        }
    
        if(!Validator.isString(data[item].episode)) {
            return false;    
        }
    
        if(!Validator.isString(data[item].comment)) {
            return false;    
        }
    
        if(!Validator.isArray(data[item].list)) {
            return false;
        }
    
        if(!Validator.isString(data[item].title)) {
            return false;    
        }

        HTML += `<div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="card">
                        <div class="card__image">
                            <img src="./assets/img/${data[item].image}" alt="">
                            <div class="ep">${data[item].episode}</div>
                            <div class="comment">
                                <i class="fa fa-comments"></i>
                                ${data[item].comment}
                            </div>
                            <div class="view view--ps-bottom">
                                <i class="fa fa-eye"></i>
                                ${data[item].view}
                            </div>
                        </div>
                        <div class="card__content">
                            <div class="card__list">
                                ${generateCardList(data[item].list)}
                            </div>
                            <a href="#" class="card__title">${data[item].title}</a>
                        </div>
                    </div>
                 </div>`;
    }

    DOOM.insertAdjacentHTML('beforeend', HTML);

    //result

    return 0;
}

export {renderContent};