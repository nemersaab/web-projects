let quotes = [
    "Access denied. System breach detected.",
    "You can't hide from the truth.",
    "The system is watching you.",
    "Your data is no longer yours.",
    "Welcome to the dark side of the web.",
    "Encryption won't save you now.",
    "The weakest link is always human.",
    "Think before you click.",
    "Your secrets are no longer safe.",
    "The firewall has been breached.",
    "Every click leaves a trail.",
    "Hackers don't sleep, and neither should you.",
    "The internet never forgets.",
    "Your password is the key to your life.",
    "Trust no one. Verify everything.",
    "The best defense is a good offense.",
    "Cybersecurity is not a product, it's a process.",
    "The only secure system is an unplugged one.",
    "Data is the new oil, and you're the well.",
    "Phishing is just the beginning.",
    "The cost of freedom is eternal vigilance.",
    "Your digital footprint is permanent.",
    "Hackers are always one step ahead.",
    "The greatest threat is complacency.",
    "The internet is a battlefield.",
    "Your privacy is an illusion.",
    "The weakest link is always exploited.",
    "Security is a journey, not a destination.",
    "The enemy is already inside.",
    "Welcome to the matrix."
];
const div = document.getElementById('quote');

function f() {
    if (quotes.length != 0) {
        let num = Math.floor(Math.random() * quotes.length); 
        div.innerHTML = quotes[num];
        quotes.splice(num, 1); 
    }
}

f();