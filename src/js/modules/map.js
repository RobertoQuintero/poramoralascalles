const map = document.getElementById('map')
const mql = matchMedia('(min-width:992px)')

if(map){

    const showMap = mql =>{
      mql.matches
        ? map.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.399783034326!2d-97.46268088554405!3d20.530817309967027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85da6ac087aedd9d%3A0xb35a02f5e8512372!2sParque%20Benito%20Ju%C3%A1rez!5e0!3m2!1ses-419!2smx!4v1581991432754!5m2!1ses-419!2smx" width="100%" height="200" frameborder="0" style="border:0;" allowfullscreen=""></iframe>`
        : map.innerHTML = '<a href="https://goo.gl/maps/cxibu6C14biFyZH46" target="_blank" class="btn button-help mt-3">Ver mapa</a>'
    }

    showMap(mql)
    mql.addListener(showMap)

}
