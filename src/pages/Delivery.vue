<template>
    <div>
        <div class="container">
            <div class="breadcrumbs">
                <li>
                    <a href="index.html" class="breadcrumbs__link">
                        Главная
                    </a>
                </li>
                -
                <li>
                    <a href="#" class="breadcrumbs__link">
                        Доставка и оплата
                    </a>
                </li>
            </div>
            <main>
                <h1 class="title">
                    Доставка и оплата
                </h1>
                <div class="delivery-btn-list">
                    <button class="delivery-btn">
                        Физическим лицам
                    </button>
                    <button class="delivery-btn">
                        Юридическим лицам
                    </button>
                    <button class="delivery-btn">
                        Бюджетным организациям
                    </button>
                </div>
                <div class="flex-step">
                    <div class="step-list">
                        <div class="step">
                            <h3 class="number">
                                1
                                <svg class="line" width="150" height="1" viewBox="0 0 192 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="4.37114e-08" y1="0.5" x2="192" y2="0.500017" stroke="#C4C4C4" stroke-dasharray="4 4"/>
                                </svg>
                            </h3>
                            <p>
                                Оформляете заявку в любой из форм на нашем сайте. Укажите телефон или адрес электронной почты для обратной связи. 
                                <b>Либо заявку можно оформить по телефону 8 495 233 55 57</b>
                            </p>
                        </div>
                        <div class="step">
                            <h3 class="number">
                                2
                                 <svg class="line" width="150" height="1" viewBox="0 0 192 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="4.37114e-08" y1="0.5" x2="192" y2="0.500017" stroke="#C4C4C4" stroke-dasharray="4 4"/>
                                </svg>
                            </h3>
                           
                            <p>
                                Менеджер оформляет заказ,
                                вы согласовываете порядок доставки и оплаты с ним. 

                            </p>
                        </div>
                        <div class="step">
                            <h3 class="number">
                                3
                            </h3>
                            <p>
                                Получаете изделие 
                                выбранным вами способом
                            </p>
                        </div>
                    </div>
                    <div class="recalling">
                        <h4 class="recalling-title">В регионы</h4>
                        <p class="recalling-text">Доставка через транспортные компании Деловые Линии, ПЭК, СДЭК в течении 2-7 дней с момента отправки. Возможна как адресная доставка,
                        так и получение в пункте самовывоза в вашем городе.
                        </p>
                        <form action="https://google.com" class="form">
                            <input type="text" class="input" placeholder="Ваше имя*">
                            <input type="text" class="input" placeholder="Ваш e-mail*">
                            <button class="btn-2">Отправить</button>
                        </form>
                    </div>
                    
                </div>
                
            </main>
        </div>
    </div>

</template>


<script>
export default {
    components:{
        
    }
}
</script>

<style>


.delivery-btn-list{
    display: flex;
    align-items: center;
    border-bottom: 1px solid #EDEDED;
}

.delivery-btn {
    font-weight: 600;
    font-size: 16px;
    border: none;
    background-color: transparent;
    outline: none;
    line-height: 40px;
    padding: 5px 30px;
    transition: all 0.3s;
    color: #535353;

}

.delivery-btn:hover{
    background-color: #3D4F64;
    color: #fff;
}

.number{
    padding: 12px 21px;
    border: 1px solid #FFC94F;display: inline-block;
    border-radius: 50%;
    box-shadow: 0px 8px 10px rgba(255, 201, 79, 0.25);
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    color: #535353;
    position: relative;


}

.step-list{
    display: flex;
    gap: 30px;
}

.step-list p{
    font-weight: 300;
    font-size: 12px;
    margin-top: 20px;
    line-height: 20px;
    color: #535353;
}
 .form {
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: end;
      -ms-flex-align: end;
          align-items: flex-end;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  gap: 15px;
}

.form .input {
  font-size: 14px;
  line-height: 17px;
  color: #535353;
  border: none;
  border-bottom: 1px solid #EFEFEF;
  padding: 10px;
  outline: none;
  width: 100%;
}

.form .textarea {
  font-size: 14px;
  line-height: 17px;
  color: #535353;
  border: none;
  resize: none;
  border-bottom: 1px solid #EFEFEF;
  padding: 10px;
  outline: none;
  width: 100%;
}

.recalling{
    max-width: 500px;
    width: 100%;
}

.title {
    font-weight: 800;
    font-size: 24px;
    line-height: 40px;
    color: #535353;
}

.recalling-title{
    font-weight: bold;
    font-size: 16px;
    line-height: 40px;
    color: #535353;
}

.recalling-text{
    font-weight: 300;
    font-size: 14px;
    line-height: 24px;
    color: #535353;
    margin-bottom: 30px;
}

.step{
    max-width: 300px;
    width: 100%;
}

.flex-step{
    display: flex;
    align-items: flex-start;
    gap: 4rem;
    margin: 20px 0px;
}

.line{
    position: absolute;
    top: 0;
    transform: translate(64px, 22px);
    left: 0;
}

@media screen and (max-width: 1030px) {
    .flex-step{
        flex-direction: column;
        align-items: center;
    }
}

@media screen and (max-width: 768px){
    .step-list{
        flex-direction: column;

    }

    .line{
        display: none;
    }

    .delivery-btn-list{
        flex-wrap: wrap;
    }

    .delivery-btn{
        width: 100%;
    }
}

</style>