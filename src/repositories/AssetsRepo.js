import axios from "axios";

/**
 * API - https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false
 * @return {Promise<AxiosResponse<any>>}
 */
export const getAssetsLists = async (
    currency,
order,
limit,
page,
sparkline) => {
    const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
        params: {
            vs_currency: currency,
            order,
            per_page: limit,
            page,
            sparkline
        }
    });
    return response;
}


