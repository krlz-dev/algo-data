function solution(queries) {
    const accounts = new Map();
    const transactionHistory = new Map();
    const results = [];

    for (const query of queries) {
        const [operation, timestamp, accountId, amount] = query;
        switch (operation) {
            case "CREATE_ACCOUNT":
                if (accounts.has(accountId)) {
                    results.push("false");
                } else {
                    accounts.set(accountId, 0);
                    transactionHistory.set(accountId, { deposits: [], payments: [] });
                    results.push("true");
                }
                break;

            case "DEPOSIT":
                if (accounts.has(accountId)) {
                    const balance = accounts.get(accountId);
                    accounts.set(accountId, balance + Number(amount));
                    transactionHistory.get(accountId).deposits.push({ timestamp: Number(timestamp), amount: Number(amount) });
                    results.push(String(accounts.get(accountId)));
                } else {
                    results.push("");
                }
                break;

            case "PAY":
                if (accounts.has(accountId)) {
                    const balance = accounts.get(accountId);
                    if (balance < Number(amount)) {
                        results.push("");
                    } else {
                        accounts.set(accountId, balance - Number(amount));
                        transactionHistory.get(accountId).payments.push({ timestamp: Number(timestamp), amount: Number(amount) });
                        results.push(String(accounts.get(accountId)));
                    }
                } else {
                    results.push("");
                }
                break;

            case "TOP_ACTIVITY":
                let n = Number(amount);
                if (isNaN(n) || n < 1) {
                  n = accounts.size;
                }
                const rankedAccounts = [];

                for (const [accountId, history] of transactionHistory.entries()) {
                    const depositSum = history.deposits.reduce(
                        (sum, deposit) => sum + deposit.amount,
                        0
                    );
                    rankedAccounts.push({ accountId, depositSum });
                }

                rankedAccounts.sort((a, b) => {
                    if (b.depositSum === a.depositSum) {
                      return a.accountId.localeCompare(b.accountId, undefined, {numeric: true});
                    }
                    return b.depositSum > a.depositSum;
                  });

              
 
                const topAccounts = rankedAccounts.slice(0, n);
                const topAccountsString = topAccounts
                .map(({ accountId, depositSum }) => `${accountId}(${depositSum})`)
                .join(", ");
        
                results.push(topAccountsString);
                break;


            default:
                results.push("");
                break;
        }
    }

    return results;
}


console.log(solution([["CREATE_ACCOUNT", "1", "account1"],
["CREATE_ACCOUNT", "2", "account2"],
["CREATE_ACCOUNT", "3", "account3"],
["DEPOSIT", "4", "account1", "1000"],
["DEPOSIT", "5", "account2", "1000"],
["DEPOSIT", "6", "account3", "1000"],
["PAY", "7", "account2", "100"],
["PAY", "8", "account2", "100"],
["PAY", "9", "account3", "100"],
["TOP_ACTIVITY", "10", "3"]]))