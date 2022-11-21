//js for dark mode toggle
document.querySelector('.dark-mode-switch').onclick =()=>{
    document.querySelector('body').classList.toggle('dark')
    document.querySelector('body').classList.toggle('light')
}
//check switch year
isLeapYear=(year) => {
    return (year % 4===0 && year % 100 !==0 && year % 400!==0)||(year % 100 === 0 && year % 400!==0 )
}
getFebDays=(year)=>{
    return isLeapYear(year) ? 29 :28
}
let calendar =document.querySelector('.calendar')
const month_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
let month_picker=document.querySelector('#month-picker')
//generate calendar
generateCalendar = (month, year) => {

    let calendar_days = calendar.querySelector('.calendar-days')
    calendar_days.innerHTML = ''
    let calendar_header_year = calendar.querySelector('#year')

    let days_of_month = [31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    // calendar_days.innerHTML = ''

    let currDate = new Date()

    month_picker.innerHTML = curr_month
    calendar_header_year.innerHTML = year

    let first_day=new Date(month,year,1)

    for (let i = 0; i < days_of_month +first_day.getDay()-1; i++) {
       let day=document.createElement('div')
       if(i>first_day.getDay()){
        day.classList.add('calendar-day-hover')
        day.innerHTML =i
       }
        
    }

    // if (!month) month = currDate.getMonth()
    // if (!year) year = currDate.getFullYear()

    // let curr_month = `${month_names[month]}`
    // month_picker.innerHTML = curr_month
    // calendar_header_year.innerHTML = year
}