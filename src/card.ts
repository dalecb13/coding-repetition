import { RepetitionItem } from "./algorithms/base/repetition-item";
import { CardListType } from "./deck";
import { Question } from "./question";

export class Card extends RepetitionItem {
    filename: string;
    question: Question;
    answer: string;
    algorithm: string;

    constructor(init?: Partial<Card>) {
        super();
        Object.assign(this, init);
    }

    get cardListType(): CardListType {
        return this.isNew ? CardListType.NewCard : CardListType.DueCard;
    }

    formatSchedule(): string {
        let result: string = "";
        if (this.hasSchedule) {
            result = this.scheduleInfo.formatCardScheduleForHtmlComment();
        } else {
            result = "New";
        }
        return result;
    }
}
