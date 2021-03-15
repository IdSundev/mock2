var activities = [
  {
    date: '2021-03-14',
    time: '07:00AM',
    activity: 'Mandi',
    location: 'https://cdn.idntimes.com/content-images/qna/2020/07/img-20200708-103740100-8d9430e7d68b44d6543c8e44b9d79e39_600x400.jpg',
  },
  {
    date: '2021-03-15',
    time: '08:00AM',
    activity: 'Kerja',
    location: 'https://2.bp.blogspot.com/-VWRXcjgUmc0/V71UFMZan2I/AAAAAAAAFes/YSL-02vj13oMjm6SQKKtH1KJrp-YhzxigCLcB/s1600/ops.jpeg',
  },
  {
    date: '2021-03-16',
    time: '12:00PM',
    activity: 'Maen Game',
    location: 'https://cdn-cf.gamivo.com/image_original.jpg?f=129037&n=462843597189843.jpg&h=b0395b17cbebb5d25e7e6e502c7b5a84',
  },
  {
    date: '2021-03-17',
    time: '17:00AM',
    activity: 'Pulang',
    location: 'https://masihkuliah.files.wordpress.com/2014/01/2542454_20140117090411.jpg',
  },
]
window.addEventListener('load', getActivities(activities), false)
var elForm = document.getElementById('elForm')
elForm.addEventListener('submit', checkInput, false)
function updateActivity(index){
  activities[index] = {
    date: document.getElementById('editDateActivity').value,
    time: document.getElementById('editTimeActivity').value,
    activity: document.getElementById('editActivity').value,
    location: document.getElementById('editImagesActivity').value,
  }
  getActivities(activities)
}
// edit activity 
function editActivity(e, index){
  let activty = e.target.parentElement.parentElement
  let dateActivity = activty.childNodes[3].textContent
  let timeActivity = activty.childNodes[5].textContent
  let activity = activty.childNodes[7].textContent
  let imagesActivity = activities[index].location
  activty.childNodes[3].innerHTML = `<input type="date" id="editDateActivity" value="${dateActivity}">`
  activty.childNodes[5].innerHTML = `<input type="text" id="editTimeActivity" value="${timeActivity}">`
  activty.childNodes[7].innerHTML = `<input type="text" id="editActivity" value="${activity}">`
  activty.childNodes[9].innerHTML = `<input type="text" id="editImagesActivity" value="${imagesActivity}">`
  activty.childNodes[11].innerHTML = `<input type="button" onclick="updateActivity(${index})" value="Save"> <input type="button" onclick="getActivities(activities)" value="Cancel">`
} 
// delete activity 
function deleteActivity(index){
  activities.splice(index, 1)
  getActivities(activities)
}
function addActivity(e){
  e.preventDefault()
  activities.push({
    date: document.getElementById('dateActivity').value,
    time: document.getElementById('timeActivity').value + document.getElementById('amPm').value,
    activity: document.getElementById('activity').value,
    location: document.getElementById('imagesActivity').value
  })
  clearForm()
  getActivities(activities)
}
function clearForm(){
  document.getElementById('dateActivity').value = ''
  document.getElementById('timeActivity').value = ''
  document.getElementById('activity').value = ''
  document.getElementById('imagesActivity').value = ''
}
function checkInput(e){
  let dateActivity = document.getElementById('dateActivity') 
  let timeActivity = document.getElementById('timeActivity')
  let activity = document.getElementById('activity') 
  let imagesActivity = document.getElementById('imagesActivity') 

  if(dateActivity.value == ''){
    alert('Tanggal harus diisi')
  }else if(timeActivity.value == ''){
    alert('Jam harus diisi')
  }else if(activity == ''){
    alert('Kegiatan harus diisi')
  }else if(imagesActivity == ''){
    alert('Lokasi gambar harus diisi')
  }else{
    addActivity(e)
  }
}
// get activites 
function getActivities(activities){
  let data = ''
  let i =1
  activities.forEach((val, index) => {
    data += `<tr>
      <td>${i}</td>
      <td>${val.date}</td>
      <td>${val.time}</td>
      <td>${val.activity}</td>
      <td>
        <img src="${val.location}" width="100px">
      </td>
      <td>
        <input type="button" value="Edit" onclick="editActivity(event,${index})"> <input type="button" value="Hapus" onclick="deleteActivity(${index})"> 
      </td>
    </tr>`
    i++
  })
  document.getElementById('activitesData').innerHTML = data
  // console.log(activities)
}