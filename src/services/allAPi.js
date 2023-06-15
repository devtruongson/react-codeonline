import axios from "axios";

export let getData = function () {
    return axios.get(
        `https://backoffice.nodemy.vn/api/menu-headers?populate[menuheader][populate][0]=link`
    );
};
