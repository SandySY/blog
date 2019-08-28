import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios);

// 动态设置本地和线上接口域名
Vue.axios.defaults.baseURL = "assets/demoData";

/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * baseImgPath: 图片存放地址
 *
 */
let cbs = {
  /**
   * ajax请求成功，返回的状态码不是200时调用
   * @param  {object} err 返回的对象，包含错误码和错误信息
   */
  statusError(err) {
    if (err.status !== 404) {
      this.$message({
        showClose: true,
        message: '返回错误：' + err.msg,
        type: 'error'
      });
    } else {
      this.$store.dispatch('remove_userinfo').then(() => {
        this.$alert(err.status + ',' + err.msg + '！', '登录错误', {
          confirmButtonText: '确定',
          callback: action => {
            this.$router.push('/login');
          }
        });
      });
    }
  },

  /**
   * ajax请求网络出错时调用
   */
  requestError(err) {
    console.log(err);
    this.$message({
      showClose: true,
      message: '请求错误：Internal Server Error',
      type: 'error'
    });
  }
};

/**
 * 封装axios的通用请求
 * @param  {string}   type      get或post
 * @param  {string}   url       请求的接口URL
 * @param  {object}   data      传的参数，没有则传空对象
 * @param  {Function} fn        回调函数
 * @param  {boolean}   tokenFlag 是否需要携带token参数，为true，不需要；false，需要。一般除了登录，都需要
 */
export default function ({
		type,
		path,
		data,
		fn,
		errFn,
		headers,
		opts
	} = {}) {
		var options = {
			method : type,
			url    : path,
			headers: headers && typeof headers === 'object' ? headers : {}
		};
		options[type === 'get' ? 'params' : 'data'] = data;

		//axios内置属性均可写在这里
		if (opts && typeof opts === 'object') {
			for (var f in opts) {
				options[f] = opts[f];
			}
		}

		//发送请求  一般请求，还是表格类型的请求.因为其返回的数据结构是根据api中设定的，这里只需返回就行；
		Vue.axios(options).then((res) => {
			fn(res.data);
		}).catch((error) => {
			errFn(error);
		});
}
