/**
 * Sample response
 *
 "id": "bitcoin",
 "symbol": "btc",
 "name": "Bitcoin",
 "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
 "current_price": 2863762,
 "market_cap": 53742318982240,
 "market_cap_rank": 1,
 "fully_diluted_valuation": 60110730263049,
 "total_volume": 2085821327961,
 "high_24h": 2970017,
 "low_24h": 2814754,
 "price_change_24h": -86656.76278673392,
 "price_change_percentage_24h": -2.9371,
 "market_cap_change_24h": -1783328378246.2266,
 "market_cap_change_percentage_24h": -3.21172,
 "circulating_supply": 18775162,
 "total_supply": 21000000,
 "max_supply": 21000000,
 "ath": 4868723,
 "ath_change_percentage": -41.20808,
 "ath_date": "2021-04-14T11:54:46.763Z",
 "atl": 3993.42,
 "atl_change_percentage": 71578.31654,
 "atl_date": "2013-07-05T00:00:00.000Z",
 "roi": null,
 "last_updated": "2021-08-03T14:24:20.654Z"
 */

export interface ICoinAssets {
    id: string;
    symbol: string;
    name: string;
    image: string;
    current_price: number,
}
