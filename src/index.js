const messages = [
    "oscar",
    "ana",
    "nikolai",
    "laura",
    "perez",
    "pablo",
    "diego",
    "david",
    "victoria"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

module.exports = { randomMsg };