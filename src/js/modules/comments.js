const commentsImage = document.getElementById('commentsImage')
const mediaComments = matchMedia('(min-width:768px)')

if(commentsImage){

  const setImage= mql =>{
    mql.matches
      ? commentsImage.innerHTML ='<img src="https://firebasestorage.googleapis.com/v0/b/poramoralascalles-1ce75.appspot.com/o/img%2F7-img.png?alt=media&token=3b9faeba-8ed0-4d6d-8983-8b2c254cf06c" style="max-width: 284px;">'
      : commentsImage.innerHTML = ''
  }

  setImage(mediaComments)
  mediaComments.addListener(setImage)
}
