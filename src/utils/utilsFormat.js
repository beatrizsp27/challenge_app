export function amountFormat(amount) {
    if (typeof amount === 'string' || amount instanceof String) {
        amount = parseFloat(amount);
    }

    const strAmount = spanishSeparator(amount.toFixed(2));

    return `$${strAmount}`;
};

function spanishSeparator(str) {
    return addSeparatorsNF(str, '.', '.', ',');
};

function addSeparatorsNF(nStr, inD, outD, sep) {
    nStr += '';
    const dpos = nStr.indexOf(inD);
    let nStrEnd = '';
    if (dpos !== -1) {
        nStrEnd = outD + nStr.substring(dpos + 1, nStr.length);
        nStr = nStr.substring(0, dpos);
    }
    const rgx = /(\d+)(\d{3})/;
    while (rgx.test(nStr)) {
        nStr = nStr.replace(rgx, '$1' + sep + '$2');
    }
    return nStr + nStrEnd;
};
