export const log = (event, callback) => {
    return function (target, name, descriptor) {
        let originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            let result = originalMethod.apply(this, args);
            if (result instanceof Promise) {
                let postData = {
                    event
                };
                result.then((res) => {
                    if (callback instanceof Function) {
                        postData.value = callback.apply(this, arguments);
                    }
                    if (typeof(callback) === "string" || typeof (callback) === 'number') {
                        postData.value = callback.toString();
                    }
                    /*if (window.plus) {
                        window.plus.statistic.eventTrig(postData.event, postData.value); //桥接的dcloud友盟统计
                    } else {
                        window._czc.push(["_trackEvent", postData.event, postData.value, 1]);
                    }*/
                    console.log("count_clickEvent", postData.event, postData.value);
                });
            }
            else {
                let postData = {
                    event
                };
                if (callback instanceof Function) {
                    postData.value = callback.apply(this, arguments);
                }
                if (typeof(callback) === "string" || typeof (callback) === 'number') {
                    postData.value = callback.toString();
                }
                /*if (window.plus) {
                    window.plus.statistic.eventTrig(`${postData.event}`, `${postData.value}`);
                }
                else {
                    window._czc.push(["_trackEvent", postData.event, postData.value, 1]);
                }*/
                console.log("count_clickEvent", postData.event, postData.value);
            }
            return result;
        };
        return descriptor;
    }
};
