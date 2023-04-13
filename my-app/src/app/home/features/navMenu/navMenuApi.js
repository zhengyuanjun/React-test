import axios from "axios";
export async function getMenuData() {
    try {
        const response = await axios.get('/getMenu');
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}
