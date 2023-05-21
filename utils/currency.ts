const currencySymbols: {
    aed: string;
    cad: string;
    gbp: string;
    usd: string;
} = {
    aed: "AED ", // Dirham
    cad: "$", // Canadian Dollar
    gbp: "£", // British Pound Sterling
    usd: "$", // US Dollar
};

export type CurrencyCode = "aed" | "cad" | "gbp" | "usd";

export const currencyCodeToSymbol = (currencyCode: CurrencyCode) => {
    return currencySymbols[currencyCode];
};
