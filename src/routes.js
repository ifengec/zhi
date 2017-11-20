export default [
    {
        path: '/',
        component: require('./app.vue')
    },
    {
        path: '/about/',
        component: require('./pages/about.vue')
    },
    {
        path: '/form/',
        component: require('./pages/form.vue')
    },
    {
        path: '/dynamic-route/blog/:blogId/post/:postId/',
        component: require('./pages/dynamic-route.vue')
    },
    {
        path: '/question/:questionId/done/:done',
        component: require('./pages/question-detail.vue')
    },
    {
        path: '/user/:userId/',
        component: require('./pages/user.vue')
    }
]
