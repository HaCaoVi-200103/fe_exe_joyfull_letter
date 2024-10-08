import axios from "axios"

interface OrderInformation {
    height: number,
    length: number,
    weight: number,
    width: number,
    insurance: number,
    cod: number
}

interface Items {
    name: string,
    quantity: number,
    height: number,
    weight: number,
    length: number,
    width: number
}

const apiGHN = axios.create({
    baseURL: import.meta.env.VITE_GHN_URL,
    headers: {
        "Content-Type": "application/json",
        "Token": import.meta.env.VITE_GHN_KEY,
        "ShopId": import.meta.env.VITE_SHOP_ID,
    }
})

export const checkShippingFee = async (to_district_id: number, to_ward_code: string, orderInfor: OrderInformation, items: Items[]) => {
    const shippingFee = await apiGHN.post("/v2/shipping-order/fee", {
        data: {
            "service_type_id": 2,
            "to_district_id": to_district_id,
            "to_ward_code": to_ward_code,
            "height": orderInfor.height,
            "length": orderInfor.length,
            "weight": orderInfor.weight,
            "width": orderInfor.width,
            "insurance_value": orderInfor.insurance,
            "coupon": null,
            "cod_value": orderInfor.cod,
            "items": items
        }
    });
    return shippingFee;
}