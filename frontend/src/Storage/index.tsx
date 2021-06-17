const PREFIX = '@vuttr';

interface IStorage {
    get: (key: string) => {},
    set: (key: string, value: any) => void,
    remove: (key: string) => void,
    exists: (key: string) => boolean,
    clear: () => void
}

const Storage: IStorage  = {
    get: (key: string) : {} => {
        return JSON.parse(localStorage.getItem(`${PREFIX}/${key}`) as string);
    },

    set: (key: string, value: any) => {
        localStorage.setItem(`${PREFIX}/${key}`, JSON.stringify(value));
    },

    remove: (key: string) => {
        localStorage.removeItem(`${PREFIX}/${key}`);
    },

    exists: (key: string) => {
        return localStorage.getItem(`${PREFIX}/${key}`) != null;
    },

    clear: () => {
        return localStorage.clear();
    }
};

export default Storage;