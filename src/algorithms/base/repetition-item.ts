import { RepItemScheduleInfo } from "./rep-item-schedule-info";

export enum ReviewResponse {
    Easy,
    Good,
    Hard,
    Reset,
}
export enum RepetitionPhase {
    New,
    Review,
}

export class RepItemStorageInfo {}

export class RepetitionItem {
    repetitionPhase: RepetitionPhase;

    scheduleInfo: RepItemScheduleInfo;
    storageInfo: RepItemStorageInfo;

    // scheduling
    get hasSchedule(): boolean {
        return this.scheduleInfo != null;
    }

    get isNew(): boolean {
        return !this.hasSchedule;
    }

    get isDue(): boolean {
        return this.hasSchedule && this.scheduleInfo.isDue();
    }
}
