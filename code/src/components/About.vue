<template>
  <div class="about">
      <div class="title">
          <el-divider content-position="center">个人简介</el-divider>
          <p><el-tag>深圳信息职业技术学院</el-tag><el-tag>专科</el-tag></p>
      </div>
      <el-card class="box-card" style="margin-bottom: 20px;">
          <div class="text item">
              <el-row :gutter="110">
                <el-col :span="8">
                  <div class="grid-content bg-purple">
                    <img src="../assets/header.jpg" class="header-pic">
                  </div>
                </el-col>
                  <el-col :span="8">
                      <div class="grid-content bg-purple">
                  将于2021.07月毕业于<span class="large">深圳信息职业技术学院</span>，专科学历。在校专业为嵌入式技术与应用，做过班长，主修课程为xxxx、xxxx、xx和xxxx等课程。在校期间主要技能为C语言，预期职位是<span class="large">前端工程师</span>
                      </div>
                  </el-col>
                  <el-col :span="8">
                    <p>联系电话：18676103694</p>
                    <p>电子邮箱：liu1590@126.com</p>
                    <p>个人博客：<a href="http://emotionlyc.cn" target="_blank">emorionlyc.cn</a></p>
                  </el-col>
              </el-row>
          </div>
      <div class='topMask square'></div><div class='topMask circular'></div>
      </el-card>
  </div>
</template>
<script>
export default {
  name: 'About'
}
</script>

<style>
  .about .grid-content.line{
    border-right: 1px solid #ddd;
    height: 150px;
  }
  .about .el-card__header{
    background: #545c64;
  }
  .about .el-card__body{
    padding: 50px 20px;
  }
  .about .el-timeline-item__wrapper{
    top: -8px;
  }
  .about .title p .el-tag{
    margin: 0px 5px;
    cursor: pointer;
  }
  .about{
    font-size: 14px;
    text-align: left;
    padding: 0px 100px;
  }
  .intro{
    width: 200px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  .text {
    font-size: 14px;
    text-align: left;
    line-height: 30px;
    text-indent: 2em;
  }
  .box-card{
    position: relative;
  }
  .item {
    display: inline-block;
    margin: 30px 50px;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
  .clearfix span{
    color: #fff;
    font-weight: bold;
  }
  .title p{
    color: #8c8888;
    font-size: 15px;
    margin-bottom: 80px;
    text-align: center;
  }
  .grid-content .large{
    font-size: 16px;
    color: #409EFF;
    font-weight: bold;
  }
  .topMask{
    width: 100px;
    height: 100px;
    background-color: rgba(68,138,255,0.2);
    transform: rotate(45deg);
    position: absolute;
  }
  .square{
    border-radius: 5px;
    top: 0px;
  }
  .circular{
    border-radius: 50%;
    top:80px;
    left: 80%;
    background-color: rgba(255, 208, 75,0.2);
  }
  .header-pic{
    height: 200px;
  }
  a {
    text-decoration: none;
    color: #409EFF;
  }
</style>
