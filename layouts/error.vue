<template>
    <div class="__nuxt-error-page">
        <div class="error">
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="90" 
                height="90" 
                fill="#DBE1EC" 
                viewBox="0 0 48 48">
                <path d="M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"/>
            </svg>
            <div class="title">{{ message }}</div>
            <div class="logo">
                <router-link 
                    :to="{name:'index'}" 
                    event="tap">返回首页</router-link>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "NuxtError",
        props: {
            error: {
                type: Object,
                default: () => {
                    return {};
                }
            }
        },
        head() {
            return {
                title: this.message,
                meta: [
                    {
                        name: "viewport",
                        content:
                            "width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
                    }
                ]
            };
        },
        computed: {
            statusCode() {
                return (this.error && this.error.statusCode) || 500;
            },
            message() {
                return this.error.message || "未知错误";
            }
        }
    };
</script>
<style>
.__nuxt-error-page {
    background: #f7f8fb;
    color: #47494e;
    text-align: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: sans-serif;
    font-weight: 100 !important;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
.__nuxt-error-page .error {
    max-width: 7.83rem;
}
.__nuxt-error-page .title {
    font-size: 0.4rem;
    margin-top: 0.26rem;
    color: #47494e;
    line-height: 1.5;
    margin-bottom: 0.14rem;
}
.__nuxt-error-page .description {
    color: #7f828b;
    line-height: 0.365rem;
    margin-bottom: 0.174rem;
}
.__nuxt-error-page a {
    color: #7f828b !important;
    text-decoration: none;
}
</style>
