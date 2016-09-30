export declare enum months {
    NISSAN = 1,
    IYAR = 2,
    SIVAN = 3,
    TAMMUZ = 4,
    AV = 5,
    ELUL = 6,
    TISHREI = 7,
    CHESVAN = 8,
    KISLEV = 9,
    TEVET = 10,
    SHEVAT = 11,
    ADAR_I = 12,
    ADAR_II = 13,
}
export declare enum years {
    CHASER = 0,
    KESIDRAN = 1,
    SHALEM = 2,
}
export declare class JewishDate {
    private readonly JEWISH_EPOCH;
    private readonly CHALAKIM_PER_MINUTE;
    private readonly CHALAKIM_PER_HOUR;
    private readonly CHALAKIM_PER_DAY;
    private readonly CHALAKIM_PER_MONTH;
    private readonly CHALAKIM_MOLAD_TOHU;
    private _jewishMonth;
    private _jewishDay;
    private _jewishYear;
    private _moladHours;
    private _moladMinutes;
    private _moladChalakim;
    constructor();
    moladHours: number;
}
