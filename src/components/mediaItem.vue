<template>
        <div class="msg-inner" v-if="media">
            <div class="tit"><a class="tit-href" href="#">{{media.title}}</a></div>
            <div class="user-info">
                <a class="a-666" href="#"><span
                        class="name">{{media.author}}</span><span>{{media.description}}</span></a>
            </div>
            <div class="ting-box clearfix">
                <div class="item-img dinline-l">
                    <div class="paddingT">
                    </div>
                    <a href="#"></a>
                    <img :src="media.imgurl" class="img-head"></div>
                <div class="item-audio dinline-l">
                    <div class="btn-ting">
                        <div class="btn-ting-txt"><span>¥</span><span class="price">1</span><span>听一下</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="answer-info">
                <span>答案价值 100元 </span><span>，400人听过</span><span>，200人觉得赞</span>
            </div>
        </div>
</template>
<script type="text/ecmascript-6">
    export default {
        props: ['media']
    };
</script>

<style lang="scss">

</style>
