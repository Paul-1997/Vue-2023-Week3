import { base, authToken } from './helper.js';
import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.4.14/vue.esm-browser.min.js';
import Cookies from 'https://cdn.jsdelivr.net/npm/js-cookie@3.0.5/+esm';
import axios from 'https://cdnjs.cloudflare.com/ajax/libs/axios/1.6.5/esm/axios.js';

const app = createApp({
	data() {
		return {
			//狀態控制
			showEditImage: false,
			isLogin: false,
			getProductFailure: false,
			submitProductError: false,
			isUpdating: false,
			//使用者反饋訊息
			statusMsg: '',
			//產品內容
			products: [],
			temp: {},
			productModal: null,
			deleteModal: null,
		};
	},
	methods: {
		async checkLogin() {
			try {
				const result = await axios.post(
					`${base}/v2/api/user/check`,
					{},
					authToken
				);
				this.isLogin = true;
				this.getProduct();
			} catch (err) {
				// const { status } = err.response;

				if (err?.response?.status === 403 || err?.response?.status === 401)
					alert('驗證失敗，請重新登入！');
				location.href = 'login.html';
			}
		},
		async getProduct() {
			try {
				const result = await axios.get(
					`${base}/v2/api/paul7426/admin/products`,
					authToken
				);
				this.isUpdating = false;
				this.products = result.data.products;
			} catch (err) {
				if (err) this.getProductFailure = true;
			}
		},
		async addProduct() {
			if (this.submitProductError)
				this.submitProductError = !this.submitProductError;
			if (this.temp.isNew) delete this.temp.isNew;
			const product = { ...this.temp };
			try {
				this.closeModal('product');
				this.isUpdating = true;
				const result = await axios.post(
					`${base}/v2/api/paul7426/admin/product`,
					{ data: product },
					authToken
				);
				this.statusMsg = result.data.message;
				this.getProduct();
			} catch (err) {
				if (err) this.submitProductError = true;
			}
		},
		async editProduct() {
			if (this.submitProductError)
				this.submitProductError = !this.submitProductError;
			const product = { ...this.temp };
			try {
				this.closeModal('product');
				this.isUpdating = true;
				const result = await axios.put(
					`${base}/v2/api/paul7426/admin/product/${product.id}`,
					{ data: product },
					authToken
				);
				this.statusMsg = result.data.message;
				this.getProduct();
			} catch (err) {
				if (err) this.submitProductError = true;
				if (err.response.status == 404) this.statusMsg = err.response.message;
			}
		},
		async deleteProduct(id) {
			try {
				this.closeModal('delete');
				this.isUpdating = true;
				const result = await axios.delete(
					`${base}/v2/api/paul7426/admin/product/${id}`,
					authToken
				);
				this.getProduct();
			} catch (err) {
				const errMsg = err?.response?.data.message;
				this.statusMsg = errMsg + '  請重新嘗試!';
				this.isUpdating = false;
			}
		},
		openModal(id, isDelete = false) {
			const item = id
				? { ...this.products.find(product => product.id === id) }
				: { isNew: true, imagesUrl: [] };
			this.temp = item;
			isDelete ? this.deleteModal.show() : this.productModal.show();
		},
		closeModal(modal) {
			//清除模板
			this.temp = {};
			//清除條件
			this.showEditImage = false;
			this[`${modal}Modal`].hide();
		},
	},
	computed: {
		onEdit() {
			return this.showEditImage ? 'btn-success' : 'btn-outline-secondary';
		},
		isEnableAddNewImgBtn() {
			if (!this.temp.imagesUrl || !this.temp?.imagesUrl.length) return;

			const lastOne = this.temp.imagesUrl.slice(-1)[0];
			// 等於空字串
			if (!lastOne) return true;
		},
		statusMsgColor() {
			if (!this.statusMsg) return '';
			return this.statusMsg.endsWith('請重新嘗試!')
				? 'text-danger'
				: 'text-success';
		},
		//稍微排序一下
		sortProducts() {
			return [...this.products].sort((a, b) => {
				if (a.category === b.category) return a.price - b.price;
				return a.category > b.category ? 1 : -1;
			});
		},
	},
	watch: {
		//重新取完資料後再清除資訊
		isUpdating(curr) {
			if (curr === false && this.statusMsg)
				setTimeout(() => (this.statusMsg = ''), 1000);
		},
	},
	mounted() {
		this.checkLogin();
		this.productModal = new bootstrap.Modal(
			document.getElementById('productModal')
		);
		this.deleteModal = new bootstrap.Modal(
			document.getElementById('deleteModal')
		);
	},
});

app.mount('#app');
