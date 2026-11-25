// Holiday theme window: Nov 20 through Jan 6 (visitor's local date), every year.
// Outside it the site goes back to normal on its own.
export function isHolidaySeason(date = new Date()) {
  const month = date.getMonth() // 0 = January
  const day = date.getDate()
  return (month === 10 && day >= 20) || month === 11 || (month === 0 && day <= 6)
}
