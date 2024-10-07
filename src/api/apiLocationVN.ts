import axios from "axios"

const ghnApi = axios.create({
    baseURL: import.meta.env.VITE_GHN_URL, headers: {
        "Content-Type": "application/json",
        "Token": import.meta.env.VITE_GHN_KEY,
    }
})

export const provinceGetAPI = async () => {
    const res = await ghnApi.get("/master-data/province")
    return res;
}

export const districtGetAPI = async (provinceId: number) => {
    const res = await ghnApi.get("/master-data/district", {
        params: {
            province_id: provinceId
        }
    })
    return res;
}

export const wardGetAPI = async (districtId: number) => {
    const res = await ghnApi.get(`/master-data/ward?district_id=${districtId}`)
    return res;
}

