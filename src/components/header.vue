<template> 
    <div>
        <section class="bg">
            <div class="container">
                <header class="header">
                    <a href="#" class="logo">
                    <img src="@/assets/Лого.png" alt="">
                    </a>
                    <nav class="nav ">
                    <a  @click="$router.push('about')" class="nav__link">О компании</a>
                    <a @click="$router.push('catalog')" class="nav__link">Каталог </a>
                    <a  @click="$router.push('services')" class="nav__link">Услуги</a>
                    <a @click="$router.push('delivery')" class="nav__link">Доставка и оплата</a>
                    <a @click="$router.push('contacts')" class="nav__link">Контакты</a>
                    <a href="#" class="nav__link">
                        Подборка
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="11" cy="11" r="11" fill="#FFC94F"/>
                            <path d="M14.816 12.568H12.112V15.208H9.648V12.568H6.928V10.232H9.648V7.592H12.112V10.232H14.816V12.568Z" fill="#535353"/>
                        </svg>
                    </a>
                    </nav>
                    <div class="contact-us">
                    <a href="#">
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5832 4.25004C15.5832 3.47087 14.9457 2.83337 14.1665 2.83337H2.83317C2.054 2.83337 1.4165 3.47087 1.4165 4.25004V12.75C1.4165 13.5292 2.054 14.1667 2.83317 14.1667H14.1665C14.9457 14.1667 15.5832 13.5292 15.5832 12.75V4.25004ZM14.1665 4.25003L8.49982 7.7917L2.83316 4.25003H14.1665ZM14.1665 12.75H2.83316V5.6667L8.49982 9.20836L14.1665 5.6667V12.75Z" fill="#FFC94F"/>
                        </svg>
                        info@i-lights.ru
                    </a>
                    <button class="phone">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1_558)">
                            <path d="M0.799805 2.33338C0.799805 1.92672 0.961349 1.5367 1.24891 1.24915C1.53646 0.961593 1.92648 0.800049 2.33314 0.800049H4.8478C5.00864 0.800169 5.16537 0.850873 5.29581 0.944985C5.42624 1.0391 5.52378 1.17185 5.5746 1.32445L6.72307 4.76908C6.78126 4.94414 6.77438 5.13431 6.70369 5.30471C6.633 5.4751 6.50323 5.6143 6.3382 5.69674L4.60784 6.56308C5.45601 8.44029 6.95956 9.94381 8.83676 10.792L9.70308 9.06165C9.78556 8.89661 9.92476 8.76685 10.0952 8.69613C10.2656 8.62549 10.4557 8.61861 10.6308 8.67677L14.0754 9.82525C14.2281 9.87613 14.361 9.97373 14.4551 10.1044C14.5492 10.2349 14.5998 10.3918 14.5998 10.5528V13.0667C14.5998 13.4734 14.4383 13.8634 14.1507 14.1509C13.8632 14.4385 13.4732 14.6 13.0664 14.6H12.2998C5.94874 14.6 0.799805 9.45109 0.799805 3.10005V2.33338Z" stroke="#FFC94F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_1_558">
                                <rect width="16" height="16" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                        +7 (495)  233 55 57
                    </button>
                    </div>
                    <button class="burger" @click="show()">
                        <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 0 24 24" width="32px" fill="#FFC94F">
                            <path d="M0 0h24v24H0V0z" fill="none"/>
                            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
                        </svg>
                    </button>
                    <div class="hide-nav">
                        <nav class=" hide-menu">
                            <a  @click="$router.push('about')" class="nav__link">О компании</a>
                            <a @click="$router.push('catalog')" class="nav__link">Каталог </a>
                            <a  @click="$router.push('services')" class="nav__link">Услуги</a>
                            <a @click="$router.push('delivery')" class="nav__link">Доставка и оплата</a>
                            <a href="#" class="nav__link">Контакты</a>
                            <a href="#" class="nav__link">
                                Подборка
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="11" cy="11" r="11" fill="#FFC94F"/>
                                    <path d="M14.816 12.568H12.112V15.208H9.648V12.568H6.928V10.232H9.648V7.592H12.112V10.232H14.816V12.568Z" fill="#535353"/>
                                </svg>
                            </a>
                        </nav>
                        <div class="hide-contact-us">
                            <a href="#">
                                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5832 4.25004C15.5832 3.47087 14.9457 2.83337 14.1665 2.83337H2.83317C2.054 2.83337 1.4165 3.47087 1.4165 4.25004V12.75C1.4165 13.5292 2.054 14.1667 2.83317 14.1667H14.1665C14.9457 14.1667 15.5832 13.5292 15.5832 12.75V4.25004ZM14.1665 4.25003L8.49982 7.7917L2.83316 4.25003H14.1665ZM14.1665 12.75H2.83316V5.6667L8.49982 9.20836L14.1665 5.6667V12.75Z" fill="#FFC94F"/>
                                </svg>
                                info@i-lights.ru
                            </a>
                            <button class="phone">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_1_558)">
                                    <path d="M0.799805 2.33338C0.799805 1.92672 0.961349 1.5367 1.24891 1.24915C1.53646 0.961593 1.92648 0.800049 2.33314 0.800049H4.8478C5.00864 0.800169 5.16537 0.850873 5.29581 0.944985C5.42624 1.0391 5.52378 1.17185 5.5746 1.32445L6.72307 4.76908C6.78126 4.94414 6.77438 5.13431 6.70369 5.30471C6.633 5.4751 6.50323 5.6143 6.3382 5.69674L4.60784 6.56308C5.45601 8.44029 6.95956 9.94381 8.83676 10.792L9.70308 9.06165C9.78556 8.89661 9.92476 8.76685 10.0952 8.69613C10.2656 8.62549 10.4557 8.61861 10.6308 8.67677L14.0754 9.82525C14.2281 9.87613 14.361 9.97373 14.4551 10.1044C14.5492 10.2349 14.5998 10.3918 14.5998 10.5528V13.0667C14.5998 13.4734 14.4383 13.8634 14.1507 14.1509C13.8632 14.4385 13.4732 14.6 13.0664 14.6H12.2998C5.94874 14.6 0.799805 9.45109 0.799805 3.10005V2.33338Z" stroke="#FFC94F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_1_558">
                                        <rect width="16" height="16" fill="white"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                                +7 (495)  233 55 57
                            </button>
                        </div>
                    </div>
                </header>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    methods:{
        show(){

        }
    }
}
</script>

<style>
.header{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;
  position: relative;
}
.bg{
  background-color: #0C0537;
  width: 100%;
}
.nav{
  display: flex;
  gap: 15px;

}

.phone{
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px 30px;
  border: 1px solid #fff;
  border-radius: 2px;
  background-color: transparent;
  font-weight: bold;
  color: #fff;
  transition: ease-in 0.3s;
  cursor: pointer;
}

.phone:hover{
  border: 1px solid #FFC94F;
  color: #FFC94F;
}

.burger{
    display: none;
    background-color: transparent;
    border: none;
    outline: none;
}

.nav__link{
  display: flex;
  color: #fff;
  align-items: center;
  cursor: pointer;
  gap: 10px;
  transition: all 0.4s;
}

.nav__link:hover{
  color: #FFC94F;
}

.hide-nav{
    width: 600px;
    padding: 60px;
    display: none;
}

.hide-menu{
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
}

.hide-contact-us{
    margin-top: 20px;
    display: flex;
    gap: 20px;
    border-top: 1px solid #535353;
    flex-direction: column;
    align-items: center;
}

.hide-contact-us a{
    padding-top: 20px;
    color: #fff;
}

.contact-us{
  display: flex;
  gap: 10px;

}

.contact-us a{
  display: flex;
  align-items: center;
  gap: 10px;
  color: #fff;
  transition: all 0.4s;
}

.contact-us a:hover{
  color: #FFC94F;
}

@media  screen and (max-width:1030px) {
    .contact-us{
        display: none;
    }

    .burger{
        display: block;
    }
}

@media screen and (max-width:768px) {
    .nav{
        display: none;
    }
}
</style>