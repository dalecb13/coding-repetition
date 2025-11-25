import { Card } from "./card";

export const fileToCard = (input: string): Card => {
    console.log('input', input);

    return {
        filename: input[0],
        question: '',
        answer: '',
        algorithm: ''
    };
};
