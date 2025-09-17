// abstract classes and interfaces

type Holidays = {
    date:Date;
    reason: string;
}[]

abstract class Department{
    protected abstract holidays: Holidays
    protected constructor(protected name: string){}

    public addHolidays(holidays: Holidays){
        if(Array.isArray(holidays)){
            for (const holiday of holidays){
                this.holidays.push(holiday)
            }
        }
    }

    public abstract printHolidays(): void;
}

class ItDepartment extends Department {
    protected holidays: Holidays = []

    constructor(){
        super("IT Department")
    }
    public printHolidays(){
        if (this.holidays.length === 0){
            return console.log("No holidays")
        }

        console.log("Here is the holidays")
        this.holidays.forEach((holiday: {date:Date, reason:string}, index)=>{
            console.log(`${index+1}. ${holiday.reason}`)
        })
    }
}

class AdminDepartment extends Department {
    protected holidays: Holidays = []

    constructor(){
        super("Admin Department")
    }
    public printHolidays(){
        if (this.holidays.length === 0){
            return console.log("No holidays")
        }

        console.log("Here is the holidays")
        this.holidays.forEach((holiday: {date:Date, reason:string}, index)=>{
            console.log(`${index+1}. ${holiday.reason}`)
        })
    }
}

const itHolidays: Holidays = [
    {
        date: new Date(2025, 11, 1),
        reason: "It department holidays"
    },
    {
        date: new Date(2025, 12, 25),
        reason: "Chistmas holidays"
    },
]


const adminHolidays: Holidays = [
    {
        date: new Date(2025, 10, 1),
        reason: "Admin department holidays"
    },
    {
        date: new Date(2025, 12, 25),
        reason: "Christmas holidays"
    },
]

const itDepartmenrt: ItDepartment = new ItDepartment()
const adminDepartmenrt: AdminDepartment = new AdminDepartment()

itDepartmenrt.addHolidays(itHolidays);
adminDepartmenrt.addHolidays(adminHolidays);

console.log(itDepartmenrt);
itDepartmenrt.printHolidays();
console.log(adminDepartmenrt);
adminDepartmenrt.printHolidays();







