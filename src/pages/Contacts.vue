<template>
    <div>
        <nav>
            <a class="link" href="https://web.telegram.org">
                <img class="link-img" src="@/assets/tg.png" alt="">
                Telegram
            </a>
            <a class="link" href="https://instagram.com">
                <img class="link-img" src="@/assets/In.png" alt="">
                Instagram
            </a>
            <a class="link" href="https://tiktok.com">
                <img class="link-img" src="@/assets/tt.png" alt="">
                Tik Tok
            </a>
        </nav>
    </div>
</template>

<style>
.link-img{
    max-width: 180px;
}

.link{
    display: flex;
    gap: 20px;
    align-items: center;
    margin: 30px;
    font-size: 48px;
    border-bottom: 1px solid #ccc;
    color: #3d4f64;
    padding: 20px;
    justify-content: center;
}
</style>