const fs = require('fs');

const writeFile = async (messages, msName) => {
    debugger
    messages.shift();
    const message = messages.map(msg => JSON.stringify(msg)).join("").replace(/"/g, "");
    try {
        await fs.writeFileSync(msName + ".log", message + "\n", {
            flag: 'a'
        });
    } catch (error) {
        console.warn("Writing log error", error);
    }
}

module.exports = writeFile;