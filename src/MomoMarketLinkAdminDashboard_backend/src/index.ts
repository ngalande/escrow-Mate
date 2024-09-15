import { Canister, query, text } from 'azle';

export default Canister({
    greet: query([text], text, (name) => {
        return `Hello, ${name}!`;
    }),

    getBuyers: query([text], text, (name) => {
        return `Buyers endpoint, ${name}!`;
    })
})


