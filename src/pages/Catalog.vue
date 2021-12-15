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
                    Каталог
                </a>
            </li>
        </div>
    </div>
    <main class="main">
        <div class="container">
            <h1 class="title">
                Каталог
            </h1>
            <div class="tab-4">
                <button class="tablinks" >Трековые светильники</button>
                <button class="tablinks" >Встраиваемые светильники</button>
                <button class="tablinks" >Профильные светильники</button>
                <button class="tablinks" >Фигурные светильники</button>
                <button class="tablinks" >Светильники Армстронг</button>
                <button class="tablinks" >Светильники Армстронг с равномерной засветкой</button>
              </div>

              <div class="row-catalog">
                    <div class="filter">
                        <div class="filter__title">
                            <h3>
                                Фильтр
                            </h3>
                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0)">
                                <path d="M4.75519 6.41691C4.95945 6.71251 4.89839 6.4662 4.89839 12.3582C4.89839 12.8855 5.49994 13.1873 5.92392 12.8719C7.73561 11.506 8.09758 11.3877 8.09758 10.7488C8.09758 6.4551 8.04754 6.69656 8.24079 6.41691L11.1828 2.41235H1.81322L4.75519 6.41691Z" fill="#FFC94F"/>
                                <path d="M12.2943 0.326523C12.1891 0.125176 11.983 0 11.756 0H1.24033C0.75016 0 0.461748 0.552932 0.742924 0.954687C0.745234 0.958547 0.711008 0.911701 1.25378 1.65039H11.7425C12.2051 1.02088 12.5142 0.748896 12.2943 0.326523Z" fill="#FFC94F"/>
                                </g>
                                <defs>
                                <clipPath id="clip0">
                                <rect width="13" height="13" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                                
                        </div>
                        <div class="filter__range">
                            <h4>Мощность</h4>
                            <div class="filter__min-max">
                                <p>44</p>
                                <p>432</p>
                            </div>
                            <input type="range">
                        </div>
                        <div class="filter__range">
                            <h4>Световой поток LED</h4>
                            <div class="filter__min-max">
                                <p>6110</p>
                                <p>53820</p>
                            </div>
                            <input type="range">
                        </div>
                        <div class="filter__range">
                            <h4>Угол рассеивания</h4>
                            <div class="filter__min-max">
                                <p>15</p>
                                <p>160</p>
                            </div>
                            <input type="range">
                        </div>
                        <div class="filter__range">
                            <h4>Минимальная цена</h4>
                            <div class="filter__min-max">
                                <p>2500</p>
                                <p>10575</p>
                            </div>
                            <input type="range">
                        </div>
                        <div class="buttons">
                            <button class="btn btn_outline">Сбросить</button>
                            <button class="btn">Применить</button>
                        </div>
                  </div>
                  <div class="news">
                        <h2 class="news__title">
                            Новинки
                        </h2>
                        <div class="news-group">
                            <div class="card">
                                <div class="card-img">
                                    <span class="data">
                                        Вт
                                    </span>
                                    <img class="card-img__wrap" src="@/assets/1 2.png" alt="">
                                </div>
                                <h3 class="card__title">
                                    Дизайнерский светильник изготавливаемый по проекту
                                </h3>
                                <p class="card__list">
                                    <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.916992" width="5.98014" height="6" rx="2.99007" fill="#FFC94F"/>
                                    </svg>
                                    Длинна до 3 метров. 
                                        
                                </p>
                                <p class="card__list">
                                    <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.916992" width="5.98014" height="6" rx="2.99007" fill="#FFC94F"/>
                                    </svg>  
                                    Углы поворота между секторами по проекту. 
                                        
                                </p>
                                <p class="card__list">
                                    <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.916992" width="5.98014" height="6" rx="2.99007" fill="#FFC94F"/>
                                    </svg>
                                    Мощность рассчитывается индивидуально.
                                        
                                </p>
                                <h3 class="card__price">
                                    41 500 
                                    ₽
                                        
                                </h3>
                                <div class="card__more">
                                    <button class="card__btn-blue">Подробнее</button>
                                    <button class="card__btn">+</button>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-img">
                                    <span class="data">
                                        Вт
                                    </span>
                                    <img class="card-img__wrap" src="@/assets/1 2.png" alt="">
                                </div>
                                <h3 class="card__title">
                                    Дизайнерский светильник изготавливаемый по проекту
                                </h3>
                                <p class="card__list">
                                    <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.916992" width="5.98014" height="6" rx="2.99007" fill="#FFC94F"/>
                                    </svg>
                                    Длинна до 3 метров. 
                                        
                                </p>
                                <p class="card__list">
                                    <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.916992" width="5.98014" height="6" rx="2.99007" fill="#FFC94F"/>
                                    </svg>  
                                    Углы поворота между секторами по проекту. 
                                        
                                </p>
                                <p class="card__list">
                                    <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.916992" width="5.98014" height="6" rx="2.99007" fill="#FFC94F"/>
                                    </svg>
                                    Мощность рассчитывается индивидуально.
                                        
                                </p>
                                <h3 class="card__price">
                                    41 500 
                                    ₽
                                        
                                </h3>
                                <div class="card__more">
                                    <button class="card__btn-blue">Подробнее</button>
                                    <button class="card__btn">+</button>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-img">
                                    <span class="data">
                                        Вт
                                    </span>
                                    <img class="card-img__wrap" src="@/assets/1 2.png" alt="">
                                </div>
                                <h3 class="card__title">
                                    Дизайнерский светильник изготавливаемый по проекту
                                </h3>
                                <p class="card__list">
                                    <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.916992" width="5.98014" height="6" rx="2.99007" fill="#FFC94F"/>
                                    </svg>
                                    Длинна до 3 метров. 
                                        
                                </p>
                                <p class="card__list">
                                    <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.916992" width="5.98014" height="6" rx="2.99007" fill="#FFC94F"/>
                                    </svg>  
                                    Углы поворота между секторами по проекту. 
                                        
                                </p>
                                <p class="card__list">
                                    <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.916992" width="5.98014" height="6" rx="2.99007" fill="#FFC94F"/>
                                    </svg>
                                    Мощность рассчитывается индивидуально.
                                        
                                </p>
                                <h3 class="card__price">
                                    41 500 
                                    ₽
                                        
                                </h3>
                                <div class="card__more">
                                    <button class="card__btn-blue">Подробнее</button>
                                    <button class="card__btn">+</button>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-img">
                                    <span class="data">
                                        Вт
                                    </span>
                                    <img class="card-img__wrap" src="@/assets/1 2.png" alt="">
                                </div>
                                <h3 class="card__title">
                                    Дизайнерский светильник изготавливаемый по проекту
                                </h3>
                                <p class="card__list">
                                    <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.916992" width="5.98014" height="6" rx="2.99007" fill="#FFC94F"/>
                                    </svg>
                                    Длинна до 3 метров. 
                                        
                                </p>
                                <p class="card__list">
                                    <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.916992" width="5.98014" height="6" rx="2.99007" fill="#FFC94F"/>
                                    </svg>  
                                    Углы поворота между секторами по проекту. 
                                        
                                </p>
                                <p class="card__list">
                                    <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.916992" width="5.98014" height="6" rx="2.99007" fill="#FFC94F"/>
                                    </svg>
                                    Мощность рассчитывается индивидуально.
                                        
                                </p>
                                <h3 class="card__price">
                                    41 500 
                                    ₽
                                        
                                </h3>
                                <div class="card__more">
                                    <button class="card__btn-blue">Подробнее</button>
                                    <button class="card__btn">+</button>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-img">
                                    <span class="data">
                                        Вт
                                    </span>
                                    <img class="card-img__wrap" src="@/assets/1 2.png" alt="">
                                </div>
                                <h3 class="card__title">
                                    Дизайнерский светильник изготавливаемый по проекту
                                </h3>
                                <p class="card__list">
                                    <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.916992" width="5.98014" height="6" rx="2.99007" fill="#FFC94F"/>
                                    </svg>
                                    Длинна до 3 метров. 
                                        
                                </p>
                                <p class="card__list">
                                    <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.916992" width="5.98014" height="6" rx="2.99007" fill="#FFC94F"/>
                                    </svg>  
                                    Углы поворота между секторами по проекту. 
                                        
                                </p>
                                <p class="card__list">
                                    <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.916992" width="5.98014" height="6" rx="2.99007" fill="#FFC94F"/>
                                    </svg>
                                    Мощность рассчитывается индивидуально.
                                        
                                </p>
                                <h3 class="card__price">
                                    41 500 
                                    ₽
                                        
                                </h3>
                                <div class="card__more">
                                    <button class="card__btn-blue">Подробнее</button>
                                    <button class="card__btn">+</button>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-img">
                                    <span class="data">
                                        Вт
                                    </span>
                                    <img class="card-img__wrap" src="@/assets/1 2.png" alt="">
                                </div>
                                <h3 class="card__title">
                                    Дизайнерский светильник изготавливаемый по проекту
                                </h3>
                                <p class="card__list">
                                    <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.916992" width="5.98014" height="6" rx="2.99007" fill="#FFC94F"/>
                                    </svg>
                                    Длинна до 3 метров. 
                                        
                                </p>
                                <p class="card__list">
                                    <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.916992" width="5.98014" height="6" rx="2.99007" fill="#FFC94F"/>
                                    </svg>  
                                    Углы поворота между секторами по проекту. 
                                        
                                </p>
                                <p class="card__list">
                                    <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.916992" width="5.98014" height="6" rx="2.99007" fill="#FFC94F"/>
                                    </svg>
                                    Мощность рассчитывается индивидуально.
                                        
                                </p>
                                <h3 class="card__price">
                                    41 500 
                                    ₽
                                        
                                </h3>
                                <div class="card__more">
                                    <button class="card__btn-blue">Подробнее</button>
                                    <button class="card__btn">+</button>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-img">
                                    <span class="data">
                                        Вт
                                    </span>
                                    <img class="card-img__wrap" src="@/assets/1 2.png" alt="">
                                </div>
                                <h3 class="card__title">
                                    Дизайнерский светильник изготавливаемый по проекту
                                </h3>
                                <p class="card__list">
                                    <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.916992" width="5.98014" height="6" rx="2.99007" fill="#FFC94F"/>
                                    </svg>
                                    Длинна до 3 метров. 
                                        
                                </p>
                                <p class="card__list">
                                    <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.916992" width="5.98014" height="6" rx="2.99007" fill="#FFC94F"/>
                                    </svg>  
                                    Углы поворота между секторами по проекту. 
                                        
                                </p>
                                <p class="card__list">
                                    <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.916992" width="5.98014" height="6" rx="2.99007" fill="#FFC94F"/>
                                    </svg>
                                    Мощность рассчитывается индивидуально.
                                        
                                </p>
                                <h3 class="card__price">
                                    41 500 
                                    ₽
                                        
                                </h3>
                                <div class="card__more">
                                    <button class="card__btn-blue">Подробнее</button>
                                    <button class="card__btn">+</button>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-img">
                                    <span class="data">
                                        Вт
                                    </span>
                                    <img class="card-img__wrap" src="@/assets/1 2.png" alt="">
                                </div>
                                <h3 class="card__title">
                                    Дизайнерский светильник изготавливаемый по проекту
                                </h3>
                                <p class="card__list">
                                    <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.916992" width="5.98014" height="6" rx="2.99007" fill="#FFC94F"/>
                                    </svg>
                                    Длинна до 3 метров. 
                                        
                                </p>
                                <p class="card__list">
                                    <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.916992" width="5.98014" height="6" rx="2.99007" fill="#FFC94F"/>
                                    </svg>  
                                    Углы поворота между секторами по проекту. 
                                        
                                </p>
                                <p class="card__list">
                                    <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.916992" width="5.98014" height="6" rx="2.99007" fill="#FFC94F"/>
                                    </svg>
                                    Мощность рассчитывается индивидуально.
                                        
                                </p>
                                <h3 class="card__price">
                                    41 500 
                                    ₽
                                        
                                </h3>
                                <div class="card__more">
                                    <button class="card__btn-blue">Подробнее</button>
                                    <button class="card__btn">+</button>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-img">
                                    <span class="data">
                                        Вт
                                    </span>
                                    <img class="card-img__wrap" src="@/assets/1 2.png" alt="">
                                </div>
                                <h3 class="card__title">
                                    Дизайнерский светильник изготавливаемый по проекту
                                </h3>
                                <p class="card__list">
                                    <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.916992" width="5.98014" height="6" rx="2.99007" fill="#FFC94F"/>
                                    </svg>
                                    Длинна до 3 метров. 
                                        
                                </p>
                                <p class="card__list">
                                    <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.916992" width="5.98014" height="6" rx="2.99007" fill="#FFC94F"/>
                                    </svg>  
                                    Углы поворота между секторами по проекту. 
                                        
                                </p>
                                <p class="card__list">
                                    <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.916992" width="5.98014" height="6" rx="2.99007" fill="#FFC94F"/>
                                    </svg>
                                    Мощность рассчитывается индивидуально.
                                        
                                </p>
                                <h3 class="card__price">
                                    41 500 
                                    ₽
                                        
                                </h3>
                                <div class="card__more">
                                    <button class="card__btn-blue">Подробнее</button>
                                    <button class="card__btn">+</button>
                                </div>
                            </div>
                        </div>
                  </div>
                  
              </div>
              <div class="pagination">
                <nav>
                    <button>
                          <a href="#">
                              <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M6.55868e-08 5.5L5.5 1.78873e-08L7 1.5L3 5.5L7 9.5L5.4 11L6.55868e-08 5.5Z" fill="#535353"/>
                              </svg>
                                  
                          </a>
                    </button>
                    <button>
                          <a href="#">
                              5
                          </a>
                    </button>
                    <button>
                          <a href="#">
                              6
                          </a>
                    </button>
                    <button>
                          <a href="#">
                              7
                          </a>
                    </button>
                    <button>
                          <a href="#">
                              <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M7 5.5L1.5 11L-6.55671e-08 9.5L4 5.5L-4.15258e-07 1.5L1.6 -6.99382e-08L7 5.5Z" fill="#535353"/>
                              </svg>     
                          </a>
                    </button>
                </nav>
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

.breadcrumbs {
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  list-style-type: none;
  padding: 17px;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  background-color: #FFFFFF;
  gap: 10px;
}

.breadcrumbs__link {
  color: #7C7C7C;
  text-decoration: none;
}

.main {
  background: rgba(240, 240, 240, 0.3);
  padding: 15px;
}

.title {
    font-weight: 800;
    font-size: 30px;
    line-height: 40px;
    color: #535353;
}

.tab-4 {
  overflow: hidden;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  gap: 10px;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
}

.tab-4 button {
  background-color: inherit;
  float: left;
  background-color: #FFFFFF;
  border: none;
  border: 1px solid #E5E5E5;
  outline: none;
  cursor: pointer;
  padding: 10px;
  -webkit-transition: 0.3s;
  transition: 0.3s;
}

.tab-4 button.active {
  background-color: #3D4F64;
  color: #FFFFFF;
}

.tabcontent {
  display: none;
  padding: 6px 12px;
  border-top: none;
}

.row-catalog {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin: 30px 0px;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
  -webkit-box-align: baseline;
      -ms-flex-align: baseline;
          align-items: baseline;
    gap: 20px;
}

.filter {
  position: -webkit-sticky;
  position: sticky;
  top: 50px;
  padding: 15px;
  border: 1px solid #EAEAEA;
  max-width: 302px;
  width: 100%;
}

.filter__title {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 10px;
  line-height: 40px;
  color: #535353;
}

.filter__range h4 {
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: #535353;
  margin-top: 10px;
}

.filter__range input {
  width: 100%;
  height: 1px;
  -webkit-appearance: none;
  background-color: #FFC94F;
}

.filter__range input::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 13px;
  width: 13px;
  background-color: #FFC94F;
  border-radius: 50%;
}

.filter__min-max {
  font-weight: 500;
  font-size: 12px;
  line-height: 40px;
  color: #3D4F64;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
}

.filter .buttons {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  padding-top: 10px;
  -ms-flex-pack: distribute;
      justify-content: space-around;
}

.filter .buttons .btn {
  padding: 0px 15px;
  background-color: #FFC94F;
  font-weight: 600;
  font-size: 14px;
  line-height: 36px;
  border: 1px solid #FFC94F;
  cursor: pointer;
  border-radius: 2px;
  color: #535353;
  border: none;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}

.filter .buttons .btn:hover {
  background-color: #FFFFFF;
  border: 1px solid #E5E5E5;
}

.card {
  position: relative;
  border: 1px solid #EAEAEA;
  padding: 20px;
  max-width: 300px;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
}

.card:hover {
  -webkit-box-shadow: 0px 0px 30px rgba(255, 201, 79, 0.3);
          box-shadow: 0px 0px 30px rgba(255, 201, 79, 0.3);
}

.card:hover .card__price {
  color: #FFC94F;
}

.card:hover .svg {
  fill: #FFC94F;
}

.card .data {
  position: absolute;
  top: 0;
  left: 0;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #3D4F64;
  background-color: #FFC94F;
  padding: 5px 15px;
}

.card .card-img {
  margin: 70px auto;
}

.card__title {
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  color: #535353;
}

.card__list {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  gap: 10px;
  margin-top: 10px;
  font-weight: 300;
  font-size: 14px;
  line-height: 21px;
  color: #535353;
}

.card__price {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  gap: 10px;
  font-weight: bold;
  font-size: 20px;
  line-height: 21px;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  color: #535353;
  padding-top: 16px;
  padding-bottom: 60px;
}

.card__more {
  position: absolute;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  bottom: 0;
  left: 0;
}

.card__btn {
  font-weight: bold;
  font-size: 24px;
  line-height: 45px;
  color: #535353;
  background: #FFFFFF;
  border: 1px solid #EAEAEA;
  padding: 0px 20px;
  cursor: pointer;
}

.card__btn-blue {
  background: #3D4F64;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  border: none;
  color: #FFFFFF;
  padding: 15px 83px;
  cursor: pointer;
}

.news .news-group {
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: 1fr 1fr 1fr;
      grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
}

.news__title {
  font-weight: bold;
  font-size: 18px;
  line-height: 40px;
  color: #535353;
}

.pagination {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  gap: 13px;
}

.pagination button {
  padding: 7px 8px;
  background-color: #FFFFFF;
  border: 1px solid #ECECEC;
  border-radius: 2px;
  cursor: pointer;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}

.pagination button:hover {
  background-color: #FFC94F;
  font-weight: bold;
}

.pagination a {
  font-size: 12px;
  line-height: 10px;
  text-transform: uppercase;
  color: #464855;
  text-decoration: none;
}


@media only screen and (max-width: 1200px) {
    .row {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
    }

    .filter{
        display: block;
        max-width: 100%;
        position: inherit;
    }

    .news{
        margin: 0 auto;
    }
    .buttons{
      gap: 20px;
    }
  .btn{
      width: 100%;
  }

  .row-catalog{
      flex-direction: column;
  }
  .row .filter {
    position: inherit;
    top: 0px;
    max-width: inherit;
  }
  .row .filter .buttons {
    -webkit-box-pack: end;
        -ms-flex-pack: end;
            justify-content: flex-end;
    gap: 30px;
  }
  .row .filter .buttons .btn {
    padding: 0px 60px;
  }
  .row .news {
    margin: 0 auto;
  }
  .row .news__title {
    text-align: center;
    font-size: 25px;
    margin: 20px 0px;
  }
}

@media only screen and (max-width: 992px) {
  .news .news-group {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
  }
  .row .filter .buttons {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    gap: 15px;
  }
  .row .filter .buttons .btn {
    width: 100%;
  }
}

</style>