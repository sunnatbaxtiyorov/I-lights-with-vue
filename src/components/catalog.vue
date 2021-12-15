<template>
    <div class="catalog">
        <div class="catalog-group">
            <h3 class="title-md">Трековые светильники</h3>
            <p class="text-md">Органично вписываются в интерьеры в стиле хай-тек, лофт </p>
            <div class="catalog-btn-group">
                <button @click="show" class="catalog-btn">Перейти в каталог</button>
                <button class="catalog-btn">Встраиваемые светильники</button>
                <button class="catalog-btn">Фигурные светильники</button>
                <button class="catalog-btn">Светильники Армстронг</button>
                <button class="catalog-btn">Светильники Армстронг с равномерной засветкой</button>
            </div>
        </div>
        <div class="catalog-result">
            <img src="@/assets/s.png" alt="">
        </div>
    </div>
</template>
<script>
export default {
}
</script>
<style>

.catalog{
    display: flex;
    margin-left: 20px;
    justify-content: space-between;
    align-items:center;
}
.title-md{
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    color: #FFC94F;
}

.text-md{
    font-size: 14px;
    line-height: 22px;
    color: #8C8C8C;
}

.catalog-result img{
    max-width: 700px;
}

.catalog-btn-group{
    display: flex;
    flex-direction: column;
}

.catalog-btn{
    font-weight: bold;
    font-size: 14px;
    line-height: 22px;
    color: #535353;
    padding: 15px 10px;
    background-color: transparent;
    border: none;
    text-align: left;
    border-radius: 2px;
    transition: all 0.3s;
}

.catalog-btn:hover{
    background-color: #3D4F64;
    color: #fff;
}

.catalog-btn:not(:last-child){
    border-bottom: 1px solid #EFEFEF;
}

</style>