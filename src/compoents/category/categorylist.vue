<template>
    <div>
        <!--讲师列表-->
        <div class="teacher">
            <a>课程管理&nbsp;</a>/&nbsp;课程分类
        </div>
        <div class="teacher">
            <button type="button" class="btn btn-success btn-sm f_right">添加分类</button>
        </div>
        <div class="panel">
            <!--表格-->
            <table id="table" class="table-bordered">
                <thead id="thead">
                    <tr>
                        <th>分类名称</th>
                        <th>课程数量</th>
                        <th>是否显示</th>
                        <th>排序</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody id="tbody">
                    <tr>
                        <td>HTML</td>
                        <td>12</td>
                        <td>否</td>
                        <td>10</td>
                        <td>
                            <button type="button" class="btn btn-info btn-xs">编辑</button>
                        </td>
                    </tr>
                    <tr>
                        <td>CSS</td>
                        <td>12</td>
                        <td>否</td>
                        <td>10</td>
                        <td>
                            <button type="button" class="btn btn-info btn-xs">编辑</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
    export default {
    }
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
        border: 1px solid #ccc;
        border-top: 0;
        border-radius: 5px;
    }
    /*表格*/

    #table {
        width: 100%;
    }

    #thead th {
        text-align: center;
        font-weight: 400;
        padding: 5px;
    }
    #tbody td {
        text-align: center;
        padding: 5px;
    }
</style>