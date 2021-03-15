
var elForm = document.getElementById('elForm')
elForm.addEventListener('submit', tampilKalimat, false)
var vokal = 'aiueo'
var konsonan = 'bcdfghjklmnpqrstvwxyz'
var hurufVokal = []
var hurufKonsonan = []

function tampilKalimat(e){
  e.preventDefault()
  let inputTeks = document.getElementById('textData').value
  getVokalKonsonan(inputTeks)
  let result = `Kalimat = ${titleCase(inputTeks)} <br>
  Huruf vokal = ${hurufVokal.join('')} <br>
  Huruf konsonan = ${hurufKonsonan.join('')} <br>
  Jumlah jenis huruf vokal = ${hurufVokal.length} <br>
  Jumlah jenis huruf konsonan = ${hurufKonsonan.length}
  `
  document.getElementById('result').innerHTML = result
  // console.log(document.getElementById('textData').value)
}

function titleCase(teks){
  let result = teks.split(' ').map((val) => {
    return val[0].toUpperCase() + val.slice(1).toLowerCase()
  }).join(' ')
  return result
}

function getVokalKonsonan(teks){
  teks.toLowerCase().split('').forEach((val) => {
    if(vokal.includes(val)){
      if(!hurufVokal.includes(val)){
        hurufVokal.push(val)
      }
    }else if(konsonan.includes(val)){
      if(!hurufKonsonan.includes(val)){
        hurufKonsonan.push(val)
      }
    }
  })
}