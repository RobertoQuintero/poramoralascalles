const gridVideos = document.getElementById('gridVideos')
const mql = matchMedia('(min-width:992px)')

if(gridVideos){
  
!sessionStorage.getItem('videos') &&
fetch(' https://my-json-server.typicode.com/RobertoQuintero/calles/video',{method:'GET'})
  .then(resp => resp.json())
  .then(response=> {
    sessionStorage.setItem('videos',JSON.stringify(response))
  })
  .catch(err => console.log('Este es el error: '+err))

const getVideos = () =>{
  let videosList = JSON.parse(sessionStorage.getItem('videos'))
  let setVideos = videosList.map(v => `
  <div class="col-lg-6 mb-3">
  <iframe src="https://www.youtube.com/embed/${v.video_url_id} " frameborder="0" class='youtube-iframe'></iframe>
  </div>`)
  let content = setVideos.reduce((a,b)=> a + b,' ')
  return content
}

const getImages = () => {
let videosList = JSON.parse(sessionStorage.getItem('videos'))
let setImages = videosList.map(v => `
  <div class='col-md-6'>
    <div class='d-flex image-card'>
      <div class="yt-img-container">
        <img class='yt-img' src='${v.image_url}' alt='${v.title}'/>
      </div>
      <div class="yt-text-container">
        <h2 class='yt-text-title'>${v.title}</h2>
        <h4 class='yt-text-singer'>${v.singer}</h4>
        <a href='${v.video_url}' target='_blank' rel="noopener noreferrer" class="btn btn-danger">Mirar</a>
      </div>
    </div>
  </div>
  `
)
let content = setImages.reduce((a,b)=> a + b,' ')
return content
}

const youtubeMedia = mql =>{
  !sessionStorage.getItem('videos')
    ? gridVideos.innerHTML= `<h1>Cargando..</h1>`
    : mql.matches
      ? gridVideos.innerHTML= getVideos()
      : gridVideos.innerHTML= getImages()
}

youtubeMedia(mql)
mql.addListener(youtubeMedia)

addEventListener('DOMContentLoaded',()=>{
  setTimeout(() => {
    youtubeMedia(mql)
  }, 4000);
})

}
