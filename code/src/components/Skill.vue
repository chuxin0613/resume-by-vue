<template>
    <div class="securityresearch">
        <div class="title">
            <el-divider content-position="center">个人技能</el-divider>
            <p class="skill-title"><el-tag>vue</el-tag><el-tag>修电脑</el-tag><el-tag>视频剪辑</el-tag></p>
        </div>
        <div class="skill">
            <el-card class="box-card int" style="margin-bottom: 20px">
                    <el-col :span="8">
                        <div class="grid-content">
                            <p>第一个自制项目地址：</p>
                            <a href="https://emotionlyc.github.io/resume/">https://emotionlyc.github.io/resume/</a>
                            <!-- <img src="../assets/project.png" class="pic"> -->
                            <div class="demo-image__preview">
                                <el-image
                                    style="height: 200px"
                                    :src="img1"
                                    :preview-src-list="srcList">
                                </el-image>
                                </div>
                            <p>项目讲解：</p>
                            <span>该项目运用了bootstrap框架+vue数据渲染</span>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content">
                            <p>修电脑订单展示:</p>
                            暂无
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content">
                            <p>视频剪辑作品:</p>
                            <iframe src="https://player.bilibili.com/player.html?aid=46032966&bvid=BV1qb411e7sR&cid=80650931&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" height="200px" width="355px"> </iframe>
                            <iframe src="https://player.bilibili.com/player.html?aid=96841531&bvid=BV137411Z7Lh&cid=165329901&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" height="200px" width="355px"> </iframe>
                            <p>作品讲解：</p>
                            <span>两部作品都是偏向踩点剪辑</span>
                            <p></p>
                        </div>
                    </el-col>
                <div class='topMask square'></div><div class='topMask'></div>
            </el-card>
        </div>
    </div>
</template>

<style>
    .title .skill-title {
        margin-bottom: 30px;
    }
    .pic {
        height: 200px;
    }
    .int {
        width: 1300px;
        left: 100px;
    }
    .skill {
        text-align: center;
    }
</style>

<script>
export default {
  name: 'SKill',
  data() {
    return {
      img1: require('../assets/project.png'),
      srcList: [
        require('../assets/project.png')
      ]
    }
  }
}
</script>
