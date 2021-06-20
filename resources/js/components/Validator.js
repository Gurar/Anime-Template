class Validator {
    static isValidSelector(param) {
        return param === null ? console.error('ERROR: selector no exist') +  false : true
    }

    static isString(param) {
        if(typeof param !== 'string' || param === null) {
            console.error('ERROr: value not a string');
            return false
        }

        if(param.length === 0) {
            console.error('ERROR: string empry');
            return false;
        }

        return true;
    }

    static isArray(array) {
        if (!Array.isArray(array) ||
            array.length === 0) {
            return false;
        }
        return true;
    }

    static isObject(object) {
        if (typeof object !== 'object' ||
            Array.isArray(object) ||
            object === null) {
            return false;
        }
        return true;
    }

    static isImageFile(text) {
        const validExtension = ['png', 'jpg', 'gif', 'jpeg'];
        if (typeof text !== 'string' ||
            text.length < 5 ||
            text.length > 100 ||
            text[0] === '.' ||
            text[text.length - 1] === '.') {
            return false;
        }
        const parts = text.split('.');

        // isitikaname, jog tinkama galune
        if (parts.length !== 2) {
            return false;
        }
        if (!validExtension.includes(parts[1])) {
            return false;
        }

        // TODO: isitikiname, jog tinkamas pavadinimas

        return true;
    }

    static isHref(href) {
        if (typeof href !== 'string' ||
            href === '') {
            return false;
        }
        return true;
    }

    
}

export {Validator}