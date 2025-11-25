function extractEmails(text) {
    let pattern = /(^|[\s])([A-Za-z0-9]+([._-][A-Za-z0-9]+)*@[A-Za-z]+(-[A-Za-z]+)*(?:\.[A-Za-z]+(-[A-Za-z]+)*)+)/g;

    let match;
    while ((match = pattern.exec(text)) !== null) {
        console.log(match[2]);   // the email is in capture group 2
    }
}
