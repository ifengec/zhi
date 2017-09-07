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
              <p>Duis sed erat ac eros ultrices pharetra id ut tellus. Praesent rhoncus enim ornare ipsum aliquet ultricies. Pellentesque sodales erat quis elementum sagittis.</p>
            </f7-block>
            <f7-block-title>Navigation</f7-block-title>
            <f7-list>
              <f7-list-item link="/about/" title="About"></f7-list-item>
              <f7-list-item link="/form/" title="Form"></f7-list-item>
              <f7-list-item link="/dynamic-route/blog/45/post/125/?foo=bar#about" title="Dynamic Route"></f7-list-item>
            </f7-list>
            <f7-list>
              <f7-list-item>
                <div class="msg-item">
                  <div class="msg-inner">
                    <div class="tit"><a class="tit-href" href="#">开车技术哪家强？冯工开车稳当当，我服的
                      呵呵哒开车技术哪家强？冯工开车稳当当，我服的
                      呵呵哒开车技术哪家强？冯工开车稳当当，我服的
                      呵呵哒开车技术哪家强？冯工开车稳当当，我服的
                      呵呵哒</a></div>
                    <div class="user-info">
                      <a class="a-666" href="#"><span class="name">伐木累</span><span>资深老伐木资深老伐木资深老伐木资深老伐木资深老伐木资深老伐木资深老伐木</span></a>
                    </div>
                    <div class="ting-box clearfix">
                      <div class="item-img dinline-l"><a href="#"><img src="./img/head-img.jpg" class="img-head"></a></div>
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
                </div>
              </f7-list-item>
            </f7-list>
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-views>
  </div>
</template>

<script>

export default {}
</script>
<style lang="scss">
  body{
   background-color: red;
    .navbar{
      background-color: #56a7ff;
      color: #fff;
    }
  }
  /*ting*/
  .msg-item {
    margin-bottom: 10px;
    background-color: #ffffff;
    border-bottom: 1px solid #d8d8d8;
    .msg-inner {
      padding: 0.85rem 0.7rem;
      .tit {
        font-size: 0.85rem;
        line-height: 1.3;
        .tit-href {
          display: block;
          overflow: hidden;
          max-height: 3.315rem;
        }
      }
      .user-info {
        color: #666;
        font-size: 0.7rem;
        margin: 0.5rem 0;
        white-space: nowrap;
        overflow: hidden;
        -ms-text-overflow: ellipsis;
        text-overflow: ellipsis;
        & > a {
          color: #666;
          span + span {
            margin-left: 0.75rem;
          }
        }
      }
      .ting-box {
        margin-top: 0.65rem;
        width: 100%;
        height: 50px;
        .item-img {
          a {
            color: #333;
            .img-head {
              width: 50px;
              height: 50px;
              -webkit-border-radius: 50%;
              -moz-border-radius: 50%;
              border-radius: 50%;
            }
          }
        }
        .item-audio {
          padding: 3px 0;
          .btn-ting {
            background-image: url("btn-ting.png");
            background-position: left center ;
            background-repeat: no-repeat;
            background-size: cover;
            -webkit-background-size: cover;
            -webkit-border-radius: 4px;
            -moz-border-radius: 4px;
            border-radius: 4px;
            height: 45px;
            width: 225px;
            margin-left: 10px;
            position: relative;
            line-height: 45px;
            color: #ffffff;
            padding-left: 2.6rem;
            span {
              padding: 0 5px;
            }
          }
        }
        .answer-info {
          color: #999;
          font-size: 0.7rem;
          margin-top: 0.5rem;
        }
      }
    }
  }

  .dinline-l {
    float: left;
    display: inline-block;
  }

  .clearfix:after, .clearfix:before {
    content: " ";
    display: table;
  }

  .clearfix:after {
    clear: both;
    display: table;
    content: " ";
  }

</style>
