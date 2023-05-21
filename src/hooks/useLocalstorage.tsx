export const useLocalstorage = () => {
    const data = JSON.parse(localStorage.getItem('userInfo') || '{}');

    return { data };
};
