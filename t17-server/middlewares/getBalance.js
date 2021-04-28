const getArsBalance = (topUpTransactions, paymentTransactions) => {
  let topUpTransactionsTotal = 0;
  let paymentTransactionsTotal = 0;
  let arsBalance = 0;

  topUpTransactions.forEach(transaction => {
    topUpTransactionsTotal += transaction.amount
  });
  paymentTransactions.forEach(transaction => {
    paymentTransactionsTotal += transaction.amount
  });

  arsBalance = topUpTransactionsTotal - paymentTransactionsTotal

  return arsBalance;
}

const getUsdBalance = (topUpTransactions, paymentTransactions) => {
  let topUpTransactionsTotal = 0;
  let paymentTransactionsTotal = 0;
  let usdBalance = 0;

  topUpTransactions.forEach(transaction => {
    topUpTransactionsTotal += transaction.amount
  });
  paymentTransactions.forEach(transaction => {
    paymentTransactionsTotal += transaction.amount
  });

  usdBalance = topUpTransactionsTotal - paymentTransactionsTotal

  return usdBalance;
}

exports.getBalances =
  (arsTopUpTransactions, arsPaymentTransactions, usdTopUpTransactions, usdPaymentTransactions) => {

    const balances = {
      arsBalance: getArsBalance(arsTopUpTransactions, arsPaymentTransactions),
      usdBalance: getUsdBalance(usdTopUpTransactions, usdPaymentTransactions),
    }

    return balances;

  }