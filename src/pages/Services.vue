<template>
    <div>
        <div class="container">
            <div class="breadcrumbs">
                <li>
                    <a @click="$router.push('/')" class="breadcrumbs__link">
                        Главная
                    </a>
                </li>
                -
                <li>
                    <a href="#" class="breadcrumbs__link">
                        Услуги
                    </a>
                </li>
            </div>
            <h3 class="title">
                    Услуги
            </h3>
            <div class="btn-list">
                <button class="border btn-service ">
                   Изготовление светильников для торгового и общестыкнного освещения
                                    
                </button>
                <button class="btn-service border">
                    Постовки дизайнерского свеата от ведущих европейских производителей
                </button>
                <button class="btn-service border">
                    Проектирование, светотехнические расчеты и разработка концепции освещения
                </button>
                <button class="btn-service border">
                    Модернизация светильников
                </button>
                <button class="btn-service border">
                   Ремонт светодиоидных светильников
                </button>
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
    </div>
</template>

<style>
.border{
     border-right:  1px solid #e5e5e5;
    border-left:   1px solid  #e5e5e5;
}

.btn-service{
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    padding: 20px 15px;
    background-color: transparent;
    border: none;
    text-align: center;
    transition: all 0.3s;
    color: #535353;
}

.btn-service:hover{
    background-color: #3D4F64;
    color: #fff;
}

.btn-list{
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
    align-items: center;
    border-bottom: 1px solid #EDEDED;
}

@media screen and (max-width: 1030px) {
    .btn-list{
        flex-direction: column;
        gap: 0px;
        align-items: flex-start;
    }
}
</style>