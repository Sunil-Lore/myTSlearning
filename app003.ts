function greetUser(name: string): string {
    return `Welcome back, ${name}!`;
}

const userGreeting: string = greetUser("Alice");
console.log(userGreeting);
