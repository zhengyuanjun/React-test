import axios from "axios";

export async function axiosSubmit(formData) {
    try {
        console.log({api: formData});
        const response = await axios.request({
            method: 'post',
            url: 'login',
            data: formData,
        })
            .then(function (response) {
                console.log('请求成功');
                console.log(response);
            })
            .catch(function (error) {
                console.log('异常错误');
                console.log(error);
            });

    } catch (error) {
        console.log(33);
        console.error(error);
    }
}
