# mini-program  

**学习过程中的总结与发现，欢迎指正！**  


```
custom_component：自定义组件的学习与探索 
        
    component：自定义的组件文件夹
           
        modal：自定义模态框 
        
        toast：自定义吐司
        
        loadmore：列表加载更多以及没有更多数据
        
        loading：加载动画以及加载失败
        
使用方法：

modal：
    
    在需要使用的页面json中添加如下配置：
    
        "usingComponents": {
   
            "modal": "../../component/modal/modal"
        }
        
    在wxml中使用组件：
    
        <modal id="modal" imgSrc="../../images/component/modal_pic.png" showClose showCancel showInput></modal>
        
    在js中处理逻辑：
    
        toolkit.showModal({
            id: 'modal',
            title: '温馨提示',
            msg: `<p>成功显示模态框<br/><span style="color:#ff523c;font-size:12px">这些内容换行了呢</span></p>`,
            confirm: function () {
                toolkit.showToast('点击了确定');
            },
            cancel: function () {
                console.log('点击取消按钮时')
            },
            input: function (res) {
                console.log('输入的内容', res);
            }
    });
    
    自定义组件modal中包含了多个属性： 
        
        showCancel：是否显示取消按钮
        showClose：是否显示关闭按钮
        imgSrc：模态框顶部的小图片地址
        showInput：是否显示输入框
        placeholder：输入框的占位内容
        inputType：输入框类型
        cancelText：取消按钮的文字，默认为“取消”
        confirmText：确定按钮的文字，默认为“确定”
        
toast（这个组件使用比较简单）：

    在需要使用的页面json中添加如下配置：
    
        "usingComponents": {
   
            "toast": "../../component/toast/toast"
        }
        
    在wxml中使用组件：
    
       <toast id="toast"></toast>
        
    在js中处理逻辑：
    
        toolkit.showToast('吐司');
        
    toast的属性只有一个：
        
        location：toast的位置，默认在中间显示。可选值有“t” 和 “b” 分别表示在顶部和底部显示。
        
loadmore：

    在需要使用的页面json中添加如下配置：
    
        "usingComponents": {
   
            "loadmore": "../../component/loadmore/loadmore"
        }
        
    在wxml中使用组件：
    
       <loadmore id="loadmore"></loadmore>
        
    在js中处理逻辑：
    
        <!--开始加载更多动画-->
        toolkit.startLoadMore();
        <!--结束加载更多动画-->
        toolkit.stopLoadMore();
        <!--显示木有更多了提示-->
        toolkit.showLoaded();
        <!--隐藏木有更多了提示-->
        toolkit.hideLoaded();
        
loading：

    在需要使用的页面json中添加如下配置：
    
        "usingComponents": {
   
            "loading": "../../component/loading/loading"
        }
        
    在wxml中使用组件：
    
       <loading id="loading"></loading>
        
    在js中处理逻辑：
    
        <!--开始加载-->
        toolkit.startLoading();
        <!--加载成功-->
        toolkit.loadSuccess();
        <!--加载失败  此时有个回调函数，用来重新加载-->
        toolkit.loadFail(function () {
            //重新加载逻辑
        });

```
#### 模态框效果图  

![模态框](http://oqt5xkoma.bkt.clouddn.com/%E6%A8%A1%E6%80%81%E6%A1%86.png)

#### 加载更多及木有更多了提示效果图

![加载更多](http://oqt5xkoma.bkt.clouddn.com/%E5%8A%A0%E8%BD%BD%E4%B8%AD.png)

![木有更多](http://oqt5xkoma.bkt.clouddn.com/%E6%9C%A8%E6%9C%89%E6%9B%B4%E5%A4%9A.png)

#### 加载动画及加载失败效果图

![加载动画](http://oqt5xkoma.bkt.clouddn.com/%E5%8A%A0%E8%BD%BD%E5%8A%A8%E7%94%BB.png)

![加载失败](http://oqt5xkoma.bkt.clouddn.com/%E5%8A%A0%E8%BD%BD%E5%A4%B1%E8%B4%A5.png)