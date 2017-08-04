<template>
    <div>
        <!--讲师列表-->
        <div class="teacher">
            <a>课程管理&nbsp;</a>/&nbsp;课程列表
        </div>
        <!--搜索-->
        <div class="panel">
            <div class="search">
                <div class="left_input f_left">
                    <select class="form-control input-sm " id="input_style">
                           <option value="">按讲师</option>
                    </select>
                    <select class="form-control input-sm " id="input_style">
                           <option value="">按类别</option>
                    </select><select class="form-control input-sm " id="input_style">
                           <option value="">按课时</option>
                    </select>
                    <button type="button" class="btn btn-success btn-sm" id="btn_search">筛选</button>
                </div>
                <div class="right_input">
                    <input type="" class="inputs">
                    <button type="button" class="btn btn-success btn-sm" id="btn_search">搜索</button>
                </div>
            </div>
            <!--图文列表-->
            <div class="media">
                <div class="media-left">
                    <a href="#">
                        <img class="media-object" src="../../../statics/imgs/mn.jpg"/>
                        </a>
                </div>
                <div class="media-body">
                    <h4 class="media-heading">211工程长江大学</h4>
                    <p><span>讲师:任小花&nbsp;&nbsp;类别:面向对象</span></p>
                    <p><span>课时:任小花&nbsp;&nbsp;学员:某某</span></p>
                    <p>浏览:11313</p>
                </div>
            </div>
            <div class="media">
                <div class="media-left">
                    <a href="#">
                        <img class="media-object" src="../../../statics/imgs/mn.jpg"/>
                        </a>
                </div>
                <div class="media-body">
                    <h4 class="media-heading">211工程长江大学</h4>
                    <p><span>讲师:任小花&nbsp;&nbsp;类别:面向对象</span></p>
                    <p><span>课时:任小花&nbsp;&nbsp;学员:某某</span></p>
                    <p>浏览:11313</p>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
    export default {}
</script>
<style scoped>
    /*讲师列表*/

    .teacher {
        background: #fff;
        margin: 20px;
        padding: 8px 10px;
        border-radius: 5px;
        overflow: hidden;
    }

    #btn {
        background: #5cb85c;
        color: #fff;
        float: right;
    }
    /*搜索*/

    .panel {
        background: #fff;
        margin: 20px;
        border-radius: 5px;
    }

    .search {
        padding: 20px;
        overflow: hidden;
        border-bottom: 1px solid #ccc;
    }

    .inputs {
        padding: 4px;
        float: left;
        border-right: 0;
        border-radius: 5px 0 0 5px;
    }

    .right_input {
        float: right;
    }

    select {
        float: left;
        margin-right: 20px;
    }

    #input_style {
        width: 100px;
        border: 1px solid #ccc;
    }
    /*图文列表*/

    .media-left img {
        width: 240px;
        height: 120px;
        margin-right: 20px;
    }

    .media-body h4 {
        padding-bottom: 10px;
    }

    .media-body p {
        color: #888;
        line-height: 22px;
    }
</style>