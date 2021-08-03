import axios from "axios";

const END_POINTS = {
    getCoinsAsset: () => 'https://api.coingecko.com/api/v3/coins/markets',
}
/**
 * API - https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false
 * @return {Promise<AxiosResponse<any>>}
 */
export const getAssetsLists = async (currency: string, order: string, limit: number,
                                     page: number, sparkline: boolean) => {
    const response = await axios.get(END_POINTS.getCoinsAsset(), {
        params: {
            vs_currency: currency,
            order,
            per_page: limit,
            page,
            sparkline
        }
    });
    return response.data;
}


