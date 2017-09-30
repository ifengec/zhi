<template>
    <div class="question-inner" v-if="question">
        <div class="tit"><a class="tit-href" :href="'/question/'+question.id+'/done/'+question.done+'/'">{{question.title}}</a></div>
        <div class="user-info">
            <a class="a-666" :href="'/user/'+question.answererUserId+'/'"><span
                    class="name">{{question.answerer}}</span><span>{{question.description}}</span></a>
        </div>
        <div class="ting-box clearfix">
            <div class="answerer-avatar dinline-l">
                <div class="paddingT">
                </div>
                <a :href="'/user/'+question.answererUserId+'/'"></a>
                <img :src="question.answererAvatar" class="img-head"></div>
            <div class="item-audio dinline-l">
                <div class="btn-ting">
                    <div class="btn-ting-txt"><span>¥</span><span class="price">1</span><span>听一下</span>
                    </div>
                    <a :href="'/question/'+question.id+'/done/'+question.done+'/'"></a>
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
        props: ['question']
    };
</script>

<style lang="scss">

</style>
