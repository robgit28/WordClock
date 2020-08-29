const ready = () => {
  setInterval(()=>{
    const time = new Date().toLocaleTimeString()
// split time into substrings
    let tArr = time.split(':')
    let s = tArr[2].split(' ')
    let tm = [n(tArr[0]), n(tArr[1]), s[1]]
    filterTime(tm)
  }, 1000)
}

const filterTime = (time) => {
// if mins less than 10, add an o
  if(time[1] >= 1 && time[1] < 10){
    minute(0, time[1])
// if mins inbetween 59 & 01, add an o'clock
} else if(time[1] < 1) { // or use === 0
    minute(60, time[1])
// if mins less than 20 don't add extra word like twenty-one
  } else if(time[1] < 20){
    minute(time[1])
  } else if(time[1] < 60){
    let tens = Math.floor(time[1] / 10) * 10
    let ones = time[1] % 10
    minute(tens, ones >= 1 ? ones : null)
  }

  hr(time[0])
  amPm(time[2])

}
// lights up active hour
const hr = (hr) => {
// retrieves all hour items
  const h = document.querySelectorAll('.hr')
  h.forEach(r => {
    if(n(r.classList[1]) == hr){
      r.classList.add('now')
    }
// if it is not that hour then remove
    if (n(r.classList[1]) != hr){
      r.classList.remove('now')
    }
  })
}
// lights up active minute
const minute = (min1, min2) => {
// retrieves all minute items
  const minD = document.querySelectorAll('.min')
  minD.forEach(m => {
    if (n(m.classList[1]) == min1 || n(m.classList[1]) == min2){
      m.classList.add('now')
// if it is not that hour then remove
    } else {
      m.classList.remove('now')
    }
  })
}
// am pm function
const amPm = (a) => {
  const merD = document.querySelectorAll('.merD')
  merD.forEach(m => {
    if(m.classList[1].toUpperCase() == a){
      m.classList.add('now')
    } else {
      m.classList.remove('now')
    }
  })
}

const n = (num) => {
  return Number(num)
}

ready()
