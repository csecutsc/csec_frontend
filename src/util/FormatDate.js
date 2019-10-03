const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

const WEEKDAYS = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

export class FormatDate {
    constructor(date) {
        this.date = new Date(date);
        this.str = '';
    }

    getDay = (full, append = '') => {
        const d = this.date.getDate();
        let s = '';
        if (full) {
            switch(d) {
                case 1:
                    s = 'st'; break;
                case 2:
                    s = 'nd'; break;
                case 3:
                    s = 'rd'; break;
                default:
                    s = 'th'; break;
            }
        }
        this.str += d + s + append;
        return this;
    }

    getWeek = (full, append = '') => {
        const w = WEEKDAYS[this.date.getDay()];
        this.str += (full ? w : w.slice(0, 3)) + append;
        return this;
    }

    getMonth = (full, append = '') => {
        const m = this.date.getMonth();
        let s = '';
        switch (full) {
            case true:
                s = MONTHS[m]; break;
            case false:
                s = MONTHS[m].slice(0, 3); break;
            default:
                s = m; break;
        }
        this.str += s + append;
        return this;
    }

    getTime = (period = true, append = '') => {
        const h = this.date.getHours();
        const m = this.date.getMinutes();
        const p = h >= 12 ? 'PM' : 'AM';

        this.str += `${period? (h % 12 || 12) : h}:${m.toString().padStart(2, 0)} ${period ? p : ''}`;
        return this;
    }

    format = () => this.str;

}