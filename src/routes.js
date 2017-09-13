export default [
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
        path: '/question/:questionId/',
        component: require('./pages/question.vue')
    },
    {
        path: '/user/:userId/',
        component: require('./pages/user.vue')
    }
]
