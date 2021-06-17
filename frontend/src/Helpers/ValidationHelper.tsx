const ValidationHelper = {
    hasError: (key: string, errors: any) => {
        return errors.hasOwnProperty(key);
    },
    getErrors: (key: string, errors: any) => {
        if (typeof errors[key] == "undefined")
            return '';
        return errors[key].join("<br>");
    }
}

export default ValidationHelper;