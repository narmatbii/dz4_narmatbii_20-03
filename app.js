const usd = document.querySelector('#usd')
const som = document.querySelector('#som')

function changeCurs(elem,elem2){
    elem.addEventListener('input',()=>{

    const request = new XMLHttpRequest()
    request.open('GET','data.json')
    request.send()
    request.addEventListener('load',()=>{
        const usdRes = JSON.parse(request.response).usd
        if(elem===usd){
            elem2.value= (elem.value*usdRes).toFixed(2)

        }else if(elem===som){
            elem2.value = (elem.value/usdRes).toFixed(2)
        }

        if(elem.value===''){
            elem2.value=''
        }
    })
    })
}
changeCurs(usd,som)
changeCurs(som,usd)