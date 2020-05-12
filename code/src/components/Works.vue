<template>
    <div class="works">
        <div class="title">
            <el-divider content-position="center">校内经历</el-divider>
            <p><el-tag>计算机协会技术部干事</el-tag></p>
        </div>
        <div>
            <el-carousel :interval="5000" type="card" height="200px" class="picture">
                <el-carousel-item>
                    <img src="../assets/1.jpg" class="pictures">
                </el-carousel-item>
                <el-carousel-item>
                    <img src="../assets/2.jpg" class="pictures">
                </el-carousel-item>
                <el-carousel-item>
                    <img src="../assets/3.jpg" class="pictures">
                </el-carousel-item>
            </el-carousel>
        </div>
        <el-card class="box-card int" style="margin-bottom: 20px">
                    <el-col :span="9" :offset="8">
                        <div class="grid-content bg-purple introduce">
                            <p>在计算机协会中积极参与社团活动，积极参加每周三下午的志愿维修服务，积极参加维修周，在维修周内，课后有时间就去帮忙，辅助干部完成活动现场布置等</p>
                        </div>
                    </el-col>
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
    .picture {
            text-align: center;
            top: 0;
        }
    .pictures {
        height: 200px;
        text-align: center;
        top: 0;
    }
    .int {
        width: 1300px;
        left: 100px;
    }
    .introduce {
        text-align: center;
    }
</style>
