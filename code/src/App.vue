<template>
  <el-carousel height="700px" direction="vertical" :autoplay="false">
    <el-carousel-item>
      <div class="about">
        <About></About>
      </div>
    </el-carousel-item>
    <el-carousel-item>
      <Works></Works>
    </el-carousel-item>
    <el-carousel-item>
      <Skill></Skill>
    </el-carousel-item>
  </el-carousel>
</template>

<script>

import About from './components/About.vue'
import Works from './components/Works.vue'
import Skill from './components/Skill.vue'

export default {
  name: 'app',
  components: {
    About,
    Works,
    Skill
  }

}
</script>

<style>
  .el-header {
      margin-top: 50px;
      margin-left: 100px;
    }
  .el-header img {
    height: 200px;
  }
  .el-carousel__indicators--vertical {
    background-color: rgb(155, 155, 155);
    opacity: .5;
  }
  .el-carousel__indicator.is-active button {
    background-color: black;
  }
  .step {
    position: absolute;
  }
</style>
