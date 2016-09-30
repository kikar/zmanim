export enum months {
    NISSAN = 1,
    IYAR,
    SIVAN,
    TAMMUZ,
    AV,
    ELUL,
    TISHREI,
    CHESVAN,
    KISLEV,
    TEVET,
    SHEVAT,
    ADAR,
    ADAR_II
}

export enum years {
    CHASER = 0,
    KESIDRAN,
    SHALEM
}

export class JewishDate {
    private readonly JEWISH_EPOCH = -1373429;

    private readonly CHALAKIM_PER_MINUTE = 18;
    private readonly CHALAKIM_PER_HOUR = this.CHALAKIM_PER_MINUTE * 60;
    private readonly CHALAKIM_PER_DAY = this.CHALAKIM_PER_HOUR * 24;
    private readonly CHALAKIM_PER_MONTH = (29 * 24 + 12) * this.CHALAKIM_PER_MINUTE + 793;

    private readonly CHALAKIM_MOLAD_TOHU = 31524;

    private _jewishDay: number;
    private _jewishMonth: number;
	private _jewishYear: number;
    private _moladChalakim: number;
	private _moladMinutes: number;
	private _moladHours: number;

    constructor() {}

    get jewishDayOfTheMonth(): number {
        return this._jewishDay;
    }

    get jewishMonth(): number {
        return this._jewishMonth;
    }

    get jewishYear(): number {
        return this._jewishYear;
    }

    get moladChalakim(): number {
        return this._moladChalakim;
    }

    set moladChalakim(newMoladChalakim: number) {
        this._moladChalakim = newMoladChalakim;
    }

    get moladMinutes(): number {
        return this._moladMinutes;
    }

    set moladMinutes(newMoladMinutes: number) {
        this._moladMinutes = newMoladMinutes;
    }

    get moladHours(): number {
        return this._moladHours;
    }

    set moladHours(newMoladHours: number) {
        this._moladHours = newMoladHours;
    }

    private _dayOfWeek: number;
    private _gregorianDayOfMonth: number;
    private _gregorianMonth: number;
	private _gregorianYear: number;
	private _gregorianAbsDate: number;

    get dayOfWeek(): number {
        return this._dayOfWeek;
    }

    get gregorianDayOfMonth(): number {
        return this._gregorianDayOfMonth;
    }

    get gregorianMonth(): number {
        return this._gregorianMonth;
    }

    get gregorianYear(): number {
        return this._gregorianYear;
    }

    // To replace with moment?
    private getLastDayOfGregorianMonth(month: number, year: number = this._gregorianYear): number {
        switch (month) {
            case 2:
                if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
                    return 29;
                } else {
                    return 28;
                }
            case 4:
            case 6:
            case 9:
            case 11:
                return 30;
            default:
                return 31;
        }
    }

    // To replace with moment?
    private gregorianDateToAbsDate(year: number, month: number, dayOfMonth: number): number {
        let absDate = dayOfMonth;

        for (let m = month - 1; m > 0; m--) {
            absDate += this.getLastDayOfGregorianMonth(m, year);
        }

        absDate += 365 * (year - 1); // number of days in previous years, ignoring leap days
        absDate += (year - 1) / 4; // Add number of Julian leap days
        absDate -= (year - 1) / 100 // Subtract number of Century leap days
        absDate += (year - 1) / 400 // Add number of leap days of every 4 centuries.

        return absDate;
    }

    private isJewishLeapYear(year: number = this._jewishYear): boolean {
        return ((7 * year) + 1) % 19 < 7;
    }

    private getLastMonthOfJewishYear(year: number): number {
		return this.isJewishLeapYear(year) ? months.ADAR_II : months.ADAR;
	}
}
