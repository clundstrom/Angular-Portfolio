export class DateFormat{

  date: Date;

  MONTHS = ['January', 'February', 'March', 'April', 'May', 'June','July','August','September','October','November','December'];

  constructor(){
    this.date = new Date();
  }

  toDateString(): string {
    return this.MONTHS[this.date.getMonth()] + ' ' + this.date.getDate() + ', ' + this.date.getFullYear();
  }
  dateToDateString(date: Date): string {
    return this.MONTHS[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
  }
}
