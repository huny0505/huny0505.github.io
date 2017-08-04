<template>
    <div id="teml">
        <!--bootstrap 媒体对象写的 四个小方块-->
        <div class="square">
            <div class="media">
                <div class="media-left media-middle ">
                    <a href="#">
                    <span class="glyphicon glyphicon-usd"></span>
                </a>
                </div>
                <div class="media-body">
                    <p>我的收入</p>
                    <p>￥1000000</p>
                </div>
            </div>
            <div class="media">
                <div class="media-left media-middle">
                    <a href="#">
                    <span class="glyphicon glyphicon-th"></span>
                </a>
                </div>
                <div class="media-body">
                    <p>课程数量</p>
                    <p>12</p>
                </div>
            </div>
            <div class="media">
                <div class="media-left media-middle">
                    <a href="#">
                    <span class="glyphicon glyphicon-user"></span>
                </a>
                </div>
                <div class="media-body">
                    <p>用户访问量</p>
                    <p>236</p>
                </div>
            </div>
            <div class="media">
                <div class="media-left media-middle">
                    <a href="#">
                    <span class="glyphicon glyphicon-eye-open"></span>
                </a>
                </div>
                <div class="media-body">
                    <p>浏览了</p>
                    <p>22435</p>
                </div>
            </div>
        </div>
        <!--图表-->
        <div class="echarts">
            <div id="main" style="width: 600px;height:400px;"></div>
        </div>
    </div>
</template>
<script>
    import echarts from 'echarts';
    export default {
        data() {
           return{
               
           }
        },
        mounted() {
            this.getEcharts();
        },
        methods: {
            getEcharts() {
                // 基于准备好的dom，初始化echarts实例
                var myChart = echarts.init(document.getElementById('main'));

                // 指定图表的配置项和数据
                var option = {
                    title: {
                        text: '课程数量'
                    },
                    tooltip: {},
                    legend: {
                        data: ['数量']
                    },
                    xAxis: {
                        data: ["HTML", "CSS", "Mobile", "Angular", "vue", "Nodejs"]
                    },
                    yAxis: {},
                    series: [{
                        name: '数量',
                        type: 'bar',
                        data: [5, 20, 36, 10, 10, 20]
                    }]
                };

                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
            }
        }
    }
</script>
<style scoped>
    /*四个小方块*/

    .media-left span {
        padding-right: 10px;
        font-size: 30px;
        color: #fff;
    }

    .media {
        float: left;
        width: 22%;
        margin: 0 10px;
        padding: 20px 20px;
        border-radius: 5px;
    }

    .media-body p {
        margin: 0;
        color: #fff;
    }

    .media:nth-of-type(1) {
        background: #FC8675
    }

    .media:nth-of-type(2) {
        background: #5AB6DF;
    }

    .media:nth-of-type(3) {
        background: #65CEA7;
    }

    .media:nth-of-type(4) {
        background: #EBC85E;
    }
    .square {
        overflow: hidden;
    }
    /*图表*/
    .echarts {
        background: #fff;
        margin: 30px 10px;
        padding: 30px 0;
    }
</style>