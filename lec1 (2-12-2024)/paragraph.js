const paragraph = "This is a test. This test is only a test.";

function calculateWordFrequency(text) {
    const words = text.toLowerCase().replace(/[^\w\s]/g, "").split(/\s+/);
    const wordFrequency = words.reduce((frequency, word) => {
        frequency[word] = (frequency[word] || 0) + 1;
        return frequency;
    }, {});

    return wordFrequency;
}

const frequency = calculateWordFrequency(paragraph);
console.log(frequency);
