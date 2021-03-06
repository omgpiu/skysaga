const fakeRequest = (value?: any, textLog: any = 'resolve / response fake API') => {
    // имитация асинхронного запроса, задержка ответа 1сек, reject выходит рандомно , примерно 1 из 10 раз
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // if (Math.random() > 0.9) {
            //     return reject(uH1-storage Error('ОШИБКА СДЕЛАНА СПЕЦИАЛЬНО !!! ОБНОВИ СТРАНИЦУ ...'));
            // } else {
            //
            // }
            console.log(textLog);
            resolve(value);
        }, 1000);
    });
};
export const authAPI = {
    authMe() {
        return fakeRequest();
    },
    login(param: any) {
        return fakeRequest(param, 'login succeed');
    },
    logout() {
        return fakeRequest('logout succeed');
    },
};
