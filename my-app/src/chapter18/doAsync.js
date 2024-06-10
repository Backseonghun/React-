function printMe() {
    console.log("Hello world");
}

// setTimeout(printMe, 3000);
// -> 정한 시간이 지난 후에 실행하겠다
// console.log("waiting-----------------")
    // 실행하기 -> 디버깅 없이 실행
    // 실행하면 waiting이 먼저 나오고 3초 후에 Hello world가 나옴

function increase(number, callback) {
    setTimeout(() => {
        const result = number + 10;
        if(callback) {
            callback(result);
        }
    }, 1000)
}

// increase(0, result => {
//     console.log(result);
//     increase(result, result => {
//         console.log(result);
//         increase(result, result => {
//             console.log(result);
//             increase(result, result => {
//                 console.log(result);
//             })
//         })
//     })
// })
// -> 가독성 떨어짐

function increase2(number) {
    const promise = new Promise((response, reject) => {
        setTimeout(() => {
            const result = number + 10;
            if(result >= 50) {
                // 에러발생
                const e = new Error('NumberTooBig')
                return reject(e);
            }
            response(result);
        }, 1000)
    });
    return promise;
}

async function runTask() {
    try{
        let result = await increase2(0);
        console.log(result);
        result = await increase2(result);
        console.log(result);
        result = await increase2(result);
        console.log(result);
        result = await increase2(result);
        console.log(result);
        result = await increase2(result);
        console.log(result);
        result = await increase2(result);
        console.log(result);
    } catch(e) {
        console.error(e);
    }
}

runTask();