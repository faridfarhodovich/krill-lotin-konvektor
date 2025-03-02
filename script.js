// Lotin va Kirill alifbolarini moslash
const latinToCyrillicMap = {
    'a': 'а', 'b': 'б', 'd': 'д', 'e': 'е', 'f': 'ф', 'g': 'г', 'h': 'ҳ', 'i': 'и', 'j': 'ж', 'k': 'к',
    'l': 'л', 'm': 'м', 'n': 'н', 'o': 'о', 'p': 'п', 'q': 'қ', 'r': 'р', 's': 'с', 't': 'т', 'u': 'у',
    'v': 'в', 'x': 'х', 'y': 'й', 'z': 'з', '‘': 'ъ', 'g‘': 'ғ', 'o‘': 'ў', 'sh': 'ш', 'ch': 'ч', 'ng': 'ң',
    "'": 'ь'
};

const cyrillicToLatinMap = {
    'а': 'a', 'б': 'b', 'д': 'd', 'е': 'e', 'ф': 'f', 'г': 'g', 'ҳ': 'h', 'и': 'i', 'ж': 'j', 'к': 'k',
    'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o', 'п': 'p', 'қ': 'q', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u',
    'в': 'v', 'х': 'x', 'й': 'y', 'з': 'z', 'ъ': '‘', 'ғ': 'g‘', 'ў': 'o‘', 'ш': 'sh', 'ч': 'ch', 'ң': 'ng',
    'ь': "'"
};

// Lotin -> Kirill
function convertToCyrillic() {
    const inputText = document.getElementById('inputText').value;
    let outputText = '';
    for (let char of inputText) {
        outputText += latinToCyrillicMap[char.toLowerCase()] || char;
    }
    document.getElementById('outputText').value = outputText;
}

// Kirill -> Lotin
function convertToLatin() {
    const inputText = document.getElementById('inputText').value;
    let outputText = '';
    for (let char of inputText) {
        outputText += cyrillicToLatinMap[char.toLowerCase()] || char;
    }
    document.getElementById('outputText').value = outputText;
}

// Matnni tozalash
function clearText() {
    document.getElementById('inputText').value = '';
    document.getElementById('outputText').value = '';
}