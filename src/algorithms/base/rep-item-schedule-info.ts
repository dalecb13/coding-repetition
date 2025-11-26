import { TICKS_PER_DAY } from "../../constants";

export abstract class RepItemScheduleInfo {
    dueDate: Date;
    latestEase: number;
    interval: number;
    delayedBeforeReviewTicks: number;

    get dueDateAsUnix(): number {
        return this.dueDate.valueOf();
    }

    isDue(): boolean {
        const today = new Date();
        return this.dueDate && this.dueDate.getTime() <= today.getTime();
    }

    formatDueDate(): string {
        return this.dueDate.toISOString().split('T')[0];
    }

    delayedBeforeReviewDaysInt(): number {
        return Math.max(0, Math.floor(this.delayedBeforeReviewTicks / TICKS_PER_DAY));
    }

    abstract formatCardScheduleForHtmlComment(): string;
}
