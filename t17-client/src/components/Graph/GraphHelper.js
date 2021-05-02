const addAmount = (fromItem, toItem) => {
    if (fromItem.type === "topup" && fromItem.account.currencyType === "ARS") toItem.IngresosARS += fromItem.amount;
    else if (fromItem.type === "payment" && fromItem.account.currencyType === "ARS") toItem.EgresosARS -= fromItem.amount;
    else if (fromItem.type === "topup" && fromItem.account.currencyType === "USD") toItem.IngresosUSD += fromItem.amount;
    else if (fromItem.type === "payment" && fromItem.account.currencyType === "USD") toItem.EgresosUSD -= fromItem.amount;
    return toItem;
};

export const processTransactions = (transactions) => {
    let out = transactions.reduce((acc, item) => {
        let existItem = acc.find(({ name }) => item.createdAt.split("T")[0] === name);
        if (existItem) {
            existItem = addAmount(item, existItem);
        } else {
            let newItem = {
                name: item.createdAt.split("T")[0],
                IngresosARS: 0,
                EgresosARS: 0,
                IngresosUSD: 0,
                EgresosUSD: 0
            };
            newItem = addAmount(item, newItem);
            acc.push(newItem);
        }
        return acc;
    }, []);
    return out.reverse();
};