!function(){
    var sudu = 50
    $('#speed').on('click','div',function(e){
        let $div = $(e.currentTarget)
        let x = $div.attr('data-speed')
        console.log(x)
        $div.addClass('active').siblings('.active').removeClass('active') 
        switch(x){
            case 'slow':
                sudu = 100
                break
            case 'normal':
                sudu = 50
                break
            case 'fast':
                sudu = 10
                break
        }       
    })
    function writeCode(prefix,code,fn){
        let n = 0
        let container = document.querySelector('#code')
        let htmlStyleTag = document.querySelector('#styleTag')
        setTimeout(function run(){
            n += 1
            container.innerHTML = code.slice(0,n)
            htmlStyleTag.innerHTML = code.slice(0,n) 
            container.scrollTop = container.scrollHeight
            if(n<code.length){
                setTimeout(run,sudu)
            }else{
                fn && fn.call()
            }
        },sudu)   
    }
    code=`
    /*画一只皮卡丘*/
    /*1.先画皮卡丘的皮*/
    .preview {
      height:100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #ffec00;
    }
  
    .wrapper {
      height: 165px;
      width: 100%;
      position: relative;
    }
    /*2.再画皮卡丘的鼻子*/
    .nose {
      border: 0px transparent solid;
      border-width: 10px;
      border-top-color: #000000;
      width: 0px;
      border-radius: 50%;
      position: absolute;
      top: 26px;
      left: 50%;
      margin-left: -10px;
    }
    /*3.再画皮卡丘的眼睛*/
    .eye {
      width: 48px;
      height: 48px;
      border: 2px black solid;
      background: #2e2e2e;
      border-radius: 50%;
      position: absolute;
  
    }
  
    .eye.left {
      left: 50%;
      margin-left: -130px;
    }
  
    .eye.right {
      right: 50%;
      margin-right: -130px;
    }
    /*4.还有皮卡丘的眼珠子*/
    .eye::after {
      content: '';
      display: block;
      height: 22px;
      width: 22px;
      background: #ffffff;
      border-radius: 50%;
      margin-left: 6px;
      margin-top: 0px;
      border: 2px black solid;
    }
    /*5.然后画皮卡丘的脸*/
    .face {
      width: 68px;
      height: 68px;
      background: #FC0D1C;
      border: 2px solid black;
      border-radius: 50%;
      position: absolute;
      top: 85px;
    }
  
    .face.left {
      right: 50%;
      margin-right: 116px;
    }
  
    .face.right {
      left: 50%;
      margin-left: 116px;
    }
    /*6.再画皮卡丘的上嘴唇*/
    .upperlip {
      height: 25px;
      width: 80px;
      border: 2px solid black;
      position: absolute;
      top: 50px;
      background: #ffec00;
    }
  
    .upperlip.left {
      right: 50%;
      border-top: none;
      border-right: none;
      border-bottom-left-radius: 40px 25px;
      transform: rotate(-20deg)
    }
  
    .upperlip.right {
      left: 50%;
      border-top: none;
      border-left: none;
      border-bottom-right-radius: 40px 25px;
      transform: rotate(20deg)
    }
    /*7.再画皮卡丘的下嘴唇*/
    .lowerlipWrapper {
      position: absolute;
      width: 140px;
      height: 160px;
      left: 50%;
      top: 60px;
      margin-left: -70px;
      overflow: hidden;
    }
  
    .lowerlip {
      width: 140px;
      height: 500px;
      background: #ab0000;
      border-radius: 50%;
      margin-top: -350px;
      position: absolute;
      border: 2px black solid;
      overflow: hidden;
    }
    /*最后画皮卡丘的舌头*/
    .lowerlip::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 50%;
      margin-left: -65px;
      width: 130px;
      height: 120px;
      background: #ff004e;
      border-radius: 50%;
    }
    /*~~~画完啦~~~*/
    `
    writeCode('',code)
    
}.call()