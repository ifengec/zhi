<template>
    <!-- App -->
    <div id="app">
        <!-- Statusbar -->
        <f7-statusbar></f7-statusbar>
        <!-- Main Views -->
        <f7-views>
            <f7-view id="main-view" navbar-through :dynamic-navbar="true" main>
                <!-- iOS Theme Navbar -->
                <f7-navbar v-if="$theme.ios">
                    <f7-nav-left>
                        <f7-link icon="icon-bars" open-panel="left"></f7-link>
                    </f7-nav-left>
                    <f7-nav-center sliding>Framework7</f7-nav-center>
                    <f7-nav-right>
                        <f7-link icon="icon-bars" open-panel="right"></f7-link>
                    </f7-nav-right>
                </f7-navbar>
                <!-- Pages -->
                <f7-pages>
                    <f7-page>
                        <!-- Material Theme Navbar -->
                        <f7-navbar v-if="$theme.material">
                            <f7-nav-left>
                                <f7-link icon="icon-bars" open-panel="left"></f7-link>
                            </f7-nav-left>
                            <f7-nav-center sliding>Framework7</f7-nav-center>
                            <f7-nav-right>
                                <f7-link icon="icon-bars" open-panel="right"></f7-link>
                            </f7-nav-right>
                        </f7-navbar>
                        <!-- Page Content -->
                        <f7-block-title>Welcome to my App</f7-block-title>
                        <f7-block inner>
                            <p>Duis sed erat ac eros ultrices pharetra id ut tellus. Praesent rhoncus enim ornare ipsum
                                aliquet ultricies. Pellentesque sodales erat quis elementum sagittis.</p>
                        </f7-block>
                        <f7-block-title>Navigation</f7-block-title>
                        <f7-list>
                            <f7-list-item link="/about/" title="About"></f7-list-item>
                            <f7-list-item link="/form/" title="Form"></f7-list-item>
                            <f7-list-item link="/dynamic-route/blog/45/post/125/?foo=bar#about"
                                          title="Dynamic Route"></f7-list-item>
                        </f7-list>
                        <mediaItem :media="media"></mediaItem>
                        <div class="msg-list" v-if="mediaData">

                            <div class="msg-item" v-for="item in mediaData">
                                <div class="msg-inner">
                                    <div class="tit"><a class="tit-href" href="#">{{item.title}}</a></div>
                                    <div class="user-info">
                                        <a class="a-666" href="#"><span class="name">{{item.author}}</span><span>{{item.description}}</span></a>
                                    </div>
                                    <div class="ting-box clearfix">
                                        <div class="item-img dinline-l"><a href="#"><img :src="item.imgurl"
                                                                                         class="img-head"></a></div>
                                        <div class="item-audio dinline-l">
                                            <div class="btn-ting">
                                                <div class="btn-ting-txt"><span>¥</span><span
                                                        class="price">1</span><span>听一下</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="answer-info">
                                        <span>答案价值 100元 </span><span>，400人听过</span><span>，200人觉得赞</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <f7-list media-list>
                            <f7-list-item
                                    link="/home/"
                                    media="<img src='http://localhost:63342/zhida/assets/img/head-img.jpg'>"
                                    title="Item Title"
                                    subtitle="Item Subtitle"
                                    text="Text"
                                    after="Read more"
                            >
                                <div slot="root-start">Root Start</div>
                                <div slot="root">Root</div>
                                <div slot="content-start">Content Start</div>
                                <div slot="content">Content</div>
                                <div slot="media-start">Media Start</div>
                                <div slot="media">Media</div>
                                <span slot="after-start">After Start</span>
                                <span slot="after">After</span>
                                <div slot="inner-start">Inner Start</div>
                                <div slot="inner">Inner</div>
                            </f7-list-item>
                        </f7-list>
                    </f7-page>
                </f7-pages>
            </f7-view>
        </f7-views>
    </div>
</template>

<script type="text/ecmascript-6">
    import mediaItem from 'components/mediaItem.vue';
    export default {
        name: 'Index',
        data() {
            return {
                mediaData: [],
                media:''
            }
        },
        created() {
            const url = 'http://localhost:63342/zhida/data/medialist.json';
            let _this = this;
            window.Dom7.ajax({
                dataType: 'json',
                url: url,
                success: function (resp) {
                    _this.mediaData = resp.media;
                    _this.media=resp.media;
                    console.log(_this);
                },
                error: function (xhr) {
                    console.log("Error on ajax call " + xhr);
                    window.f7.hideIndicator();
                }
            });
        },
        components:{
            mediaItem
        }
    }

</script>
<style lang="scss">
    body {
        background-color: red;
        .navbar {
            background-color: #56a7ff;
            color: #fff;
        }
    }

    @import "sass/style.scss";

</style>
