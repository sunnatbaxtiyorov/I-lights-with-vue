<template>
    <div>
        <div class="container">
            <div class="breadcrumbs">
                <p><a class="location" href="index.html">Главная</a>  </p>
                -   
                <p><a class="location" href="#">О компании</a></p>
            </div>
        </div>
        <main class="main">
            <div class="container">
                <div class="">
                    <h3 class="title">О компании</h3>
                </div>
                <div class="tab">
                    <button class="tablinks">Кто мы</button>
                    <button class="tablinks">В чем мы можем Вам помочь</button>
                    <button class="tablinks">О продукции</button>
                    <button class="tablinks">Реквизиты компании</button>
                </div>
                <div class="title">
                    <h3>Наши решения</h3>
                </div>
                <div class="solution-group">
                    <h2 class="solution-title">
                        Картинки
                    </h2>
                    <div class="solution-img">
                        <h3>Для магазинов</h3>
                        <img src="img/Картинка (2).png" alt="">
                    </div>
                    <div class="solution-img">
                        <h3>Для общественных мест</h3>
                        <img src="img/Картинка (2).png" alt="">
                    </div>
                    <div class="solution-img">
                        <h3>Для жилых интерьеров</h3>
                        <img src="img/Картинка (2).png" alt="">
                    </div>
                    <div class="solution-img">
                        <h3>Для офисов</h3>
                        <img src="img/Картинка (2).png" alt="">
                    </div>
                </div>
                <div class="solution">
                
                    <div class="tab-2">
                        <button class="tablinkss" onclick="opensCity(event, 'Madrid')" id="defaultsOpen">
                            Для магазинов
                            <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7 5.5L1.5 11L-6.55671e-08 9.5L4 5.5L-4.15258e-07 1.5L1.6 -6.99382e-08L7 5.5Z" fill="#F9F9F9"/>
                            </svg>
                                
                        </button>
                        <button class="tablinkss" onclick="opensCity(event, 'Moscow')">
                            Для общественных мест
                            <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7 5.5L1.5 11L-6.55671e-08 9.5L4 5.5L-4.15258e-07 1.5L1.6 -6.99382e-08L7 5.5Z" fill="#F9F9F9"/>
                            </svg>
                        </button>
                        <button class="tablinkss" onclick="opensCity(event, 'Seul')">
                            Для фасадов и ландшафтов
                            <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7 5.5L1.5 11L-6.55671e-08 9.5L4 5.5L-4.15258e-07 1.5L1.6 -6.99382e-08L7 5.5Z" fill="#F9F9F9"/>
                            </svg>
                        </button>
                        <button class="tablinkss" onclick="opensCity(event, 'Madrid')" id="defaultsOpen">
                            Для кафе и ресторанов
                            <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7 5.5L1.5 11L-6.55671e-08 9.5L4 5.5L-4.15258e-07 1.5L1.6 -6.99382e-08L7 5.5Z" fill="#F9F9F9"/>
                            </svg>
                        </button>
                        <button class="tablinkss" onclick="opensCity(event, 'Moscow')">
                            Для офисов
                            <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7 5.5L1.5 11L-6.55671e-08 9.5L4 5.5L-4.15258e-07 1.5L1.6 -6.99382e-08L7 5.5Z" fill="#F9F9F9"/>
                            </svg>
                        </button>
                        <button class="tablinkss" onclick="opensCity(event, 'Seul')">
                            Для жилых интерьеров
                            <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7 5.5L1.5 11L-6.55671e-08 9.5L4 5.5L-4.15258e-07 1.5L1.6 -6.99382e-08L7 5.5Z" fill="#F9F9F9"/>
                            </svg>
                        </button>
                    </div>  
                </div>
            </div>
        </main>
    </div>
</template>

<script>

export default {
    components:{
    }
}
</script>
<style>
.location {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
    -ms-flex-align: center;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  text-decoration: none;
  cursor: pointer;
  color: #7C7C7C;
}

.tab {
  overflow: hidden;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -ms-flex-pack: distribute;
      justify-content: space-around;
}

.tab button {
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 40px;
  color: #535353;
  cursor: pointer;
  padding: 8px 16px;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  width: 100%;
  border-bottom: 1px solid #EDEDED;
}

.tab button.active {
  background-color: #3D4F64;
  color: #FFFFFF;
}

.tabcontent {
  display: none;
  padding: 6px 12px;
  border-top: none;
}

.tabcontent p {
  font-weight: 300;
  font-size: 14px;
  line-height: 24px;
  color: #535353;
}

.tab-2 {
  float: left;
  width: 30%;
  height: 300px;
}

.tab-2 svg {
  display: none;
}

.solution-group {
  display: none;
}

.tablinks:hover{
  background-color: #3D4F64;
  color: #FFFFFF;
}

.solution-group .solution-title {
  font-weight: bold;
  font-size: 24px;
  line-height: 40px;
  color: #535353;
}

.solution-group .solution-img {
  font-weight: 800;
  font-size: 18px;
  line-height: 40px;
  color: #535353;
}

.solution-group .solution-img img {
  width: 100%;
}

.solution {
  height: 500px;
}

.tab-2 button {
  display: block;
  background-color: inherit;
  color: black;
  padding: 22px 16px;
  width: 100%;
  border: none;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  outline: none;
  text-align: left;
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  color: #535353;
  cursor: pointer;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  font-size: 17px;
}

.tab-2 button:hover {
  color: #5f5fee;
}

.tab-2 button.active {
  background-color: #3D4F64;
  color: #FFFFFF;
}

.tab-2 button.active svg {
  display: block;
}

.tabcontents {
  float: left;
  padding: 0px 12px;
  width: 70%;
  border-left: none;
  height: 300px;
}

.tabcontents img {
  width: 100%;
}

@media only screen and (max-width: 768px) {
  .solution {
    display: none;
  }
  .solution-group {
    display: block;
  }
}
</style>