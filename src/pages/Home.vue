<template>
    <div class="container">
        <div class="flex">
          <div class="home">
            <h2 class="title-home">
              <span class="yellow">I-LIGHTS </span>- Эффективные решения
            </h2>
            <p class="text">Компания I-lights это современная производственно-проектная организация с многолентим опытом работы в сфере разработки </p>
            <button  class="btn-yellow">Подробнее</button>
          </div>
        <Slider />
        </div>
        <div class="category">
          <div class="card-icon"></div>
           Каталог
        </div>
        <Catalog />
        <div class="category">
          <div class="card-icon"></div>
           Услуги
        </div>
        <Service /> 
        <div class="category">
          <div class="card-icon"></div>
           Новинки
        </div>
        <Card />
        <button @click="$router.push('/catalog')"  class="btn-2 center">Перейти а каталог</button>
        <Download />
        
    </div>
</template>
<script>
import Card from '../components/card'
import Download from '../components/download'
import Slider from '../components/Slider'
import Catalog from '../components/catalog'
import Service from '../components/service'


export default {

    

    components:{
        Slider,
        Catalog,
        Service,
        Card,
        Download
        
    },

  

}
</script>

<style lang="css">

.category{    
  display: flex;
  align-items: center;
  gap: 15px;
  font-weight: 800;
  font-size: 30px;
  line-height: 40px;
  margin: 50px 0px;
  color: #535353;
}

.card-icon{
  width: 5px;
  height: 25px;
  background-color: #FFC94F;
}


a{
  text-decoration: none;
}

.home{
  max-width: 480px;
  font-size: 14px;
  color: #8C8C8C;
}

.btn-yellow{
  background-color: #FFC94F;
  color: #535353;
  padding: 15px 55px;
  font-weight: bold;
  cursor: pointer;
  border: none;
}

button{
  cursor: pointer;
}

.btn-2 {
  padding: 14px 55px;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  color: #535353;
  background: #FFC94F;
  border: 1px solid #FFC94F;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  border-radius: 2px;
  cursor: pointer;
}

.text{
  margin: 44px 0px;
}

.title-home{
  color: #535353;
  margin-top: 80px;
  font-size: 36px;
}
.yellow{
    color: #FFC94F;
}

.flex{
  display: flex;
  align-items: center;
}

.center {
  text-align: center;
  margin: 0 auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
  margin-bottom: 30px;
}

@media only screen and (max-width: 1200px) {
  .flex {
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: 1fr 1fr;
        grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
  .flex .card {
    margin: 0 auto;
  }
}



@media screen and (max-width:960px) {
  .flex{
    flex-direction: column-reverse;
  }

  .slider-buttons{
    display: none;
  }
  
}

@media screen and (max-width:768px) {

  .footer{
    flex-direction: column;
  }
  .question , .row{
    flex-direction: column;
    gap: 30px;
  }

  .flex{
    display: block;
  }

  .flex .card{
    margin-top: 30px;
  }

  .scroll .scroll-group__title{
    line-height: 25px;
  }


  
}
</style>