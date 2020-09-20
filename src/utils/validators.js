import errors from './errorMessages';

export const lengthLimit = ({ value, name, limit }) => {
    const valid = value.length < limit;
    let error = errors.lengthLimit;
    if (!valid) {
        error = error.replace('${label}', name);
        error = error.replace('${limit}', limit);
    }
    return {
        valid,
        validator: 'lengthLimit',
        error: valid ? '' : error
    }
}

export const email = ({ value, name }) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const valid = re.test(value);
    return {
        valid,
        validator: 'Email',
        error: valid ? '' : errors.email.replace('${label}', name)
    }
}

export const required = ({ value, name }) => {
    const valid = !!value;
    return {
        valid,
        validator: 'required',
        error: valid ? '' : errors.required.replace('${label}', name)
    };
}