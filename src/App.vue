<template>

  <div>
    
      <Header />   
      <router-view />  
      
      <Footer/>

  </div>
  
</template>

<script>
import Header from './components/header'
import Footer from './components/footer'
export default {
  components:{
    Header,
    Footer
  }
}
</script>

<style>

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
}

.container{
  max-width: 1240px;
  padding: 0px 10px;
  margin: 0 auto;
}

</style>


