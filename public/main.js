console.log('我是main.js')

getCSS.onclick = () =>{

    const request = new XMLHttpRequest()
    request.open('GET', '/style.css');
    request.onload = () =>{
    console.log('request.response')
    console.log(request.response)
    
    //创建style标签
    const style = document.createElement('style')
    //填写style的内容
    style.innerHTML = request.response
    //插到头里去
    document.head.appendChild(style)

    }
    request.onerror = () =>{
        console.log('失败了')
    }
    request.send()
};

getJS.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/2.js');
    request.onload = () =>{
      //创建script标签  
     const script = document.createElement('script')
     //填写script标签
     script.innerHTML = request.response
     //插到body里面去
     document.body.appendChild(script)


    }
    request.onerror = () =>{}
    request.send()
};

getHTML.onclick = () =>{
    const request = new XMLHttpRequest();
    request.open('GET','/3.html')
    request.onreadystatechange = () =>{
        console.log(request.readyState);
        if(request.readyState === 4){
            //下载完成，但不知道是否成功
            if(request.status>=200 && request.status< 300){
               //创建div
               const div = document.createElement('div')
             //在div里面写东西
                div.innerHTML = request.response
              //把div插入到body
              document.body.appendChild(div)
            }else{
                alert('加载css失败')
            }
    
        }
    
    };
    request.onerror = () =>{}
    request.send()
};

getXML.onclick = () =>{
    const request = new XMLHttpRequest();
    request.open('GET','/4.xml')
    request.onreadystatechange = () => {
      if (request.readyState === 4 && request.status === 200 
      )  {
          const dom = request.responseXML;
          const text = dom.getElementsByTagName('warning')[0].textContent
          console.log(text.trim())
      }
      
    };
    request.send()

};

getJSON.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("get", "/5.json")
    request.onreadystatechange = () =>{
     if(request.readyState === 4 && request.status===200 ){
         console.log(request.response);
         const object = JSON.parse(request.response)
         myName.textContent = object.name
     }

    };
   request.send()

};
