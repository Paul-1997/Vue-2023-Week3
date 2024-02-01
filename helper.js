
import Cookies from 'https://cdn.jsdelivr.net/npm/js-cookie@3.0.5/+esm';





export const base = 'https://ec-course-api.hexschool.io';

export const authToken = {
    headers: {
      Authorization: Cookies.get('hexToken') ?? '',
    },
  };

// export const products = [
//   {
//     category: '甜甜圈',
//     content: '尺寸：14x14cm',
//     description:
//       '濃郁的草莓風味，中心填入滑順不膩口的卡士達內餡，帶來滿滿幸福感！',
//     id: '-L9tH8jxVb2Ka_DYPwng',
//     is_enabled: 1,
//     origin_price: 150,
//     price: 99,
//     title: '草莓莓果夾心圈',
//     unit: '個',
//     num: 10,
//     imageUrl:
//       'https://images.unsplash.com/photo-1583182332473-b31ba08929c8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzR8fGRvbnV0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60',
//     imagesUrl: [
//       'https://images.unsplash.com/photo-1626094309830-abbb0c99da4a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2832&q=80',
//       'https://images.unsplash.com/photo-1559656914-a30970c1affd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTY0fHxkb251dHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60',
//     ],
//   },
//   {
//     category: '蛋糕',
//     content: '尺寸：6寸',
//     description:
//       '蜜蜂蜜蛋糕，夾層夾上酸酸甜甜的檸檬餡，清爽可口的滋味讓人口水直流！',
//     id: '-McJ-VvcwfN1_Ye_NtVA',
//     is_enabled: 16,
//     origin_price: 1000,
//     price: 900,
//     title: '蜂蜜檸檬蛋糕',
//     unit: '個',
//     num: 1,
//     imageUrl:
//       'https://images.unsplash.com/photo-1627834377411-8da5f4f09de8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80',
//     imagesUrl: [
//       'https://images.unsplash.com/photo-1618888007540-2bdead974bbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80',
//     ],
//   },
//   {
//     category: '蛋糕',
//     content: '尺寸：6寸',
//     description: '法式煎薄餅加上濃郁可可醬，呈現經典的美味及口感。',
//     id: '-McJ-VyqaFlLzUMmpPpm',
//     is_enabled: 1,
//     origin_price: 700,
//     price: 600,
//     title: '暗黑千層',
//     unit: '個',
//     num: 15,
//     imageUrl:
//       'https://images.unsplash.com/photo-1505253149613-112d21d9f6a9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGNha2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60',
//     imagesUrl: [
//       'https://images.unsplash.com/flagged/photo-1557234985-425e10c9d7f1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA5fHxjYWtlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60',
//       'https://images.unsplash.com/photo-1540337706094-da10342c93d8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGNha2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60',
//     ],
//   },
// ];

// const products = [
// 	{
// 		category: '漢堡',
// 		content: '起司、牛肉、小圓麵包、培根、酸黃瓜、番茄',
// 		description: '絕妙的牛肉與濃郁芝士的完美結合，我們的牛肉起司漢堡帶給您口感的極致享受。新鮮烤製的牛肉搭配鬆軟麵包，每一口都是濃郁肉汁與芝士融合的絕美滋味。品味濃郁，享受美味。',
// 		is_enabled: 1,
// 		origin_price: 159,
// 		price: 139,
// 		title: '傑克超多牛起司漢堡',
// 		unit: '個',
// 		num: 100,
// 		imageUrl: 'https://images.unsplash.com/photo-1575980726530-4e673bfa0ad8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
// 		imagesUrl: [
// 			// 'https://images.unsplash.com/photo-1605345981660-ab44e036a21d?q=80&w=1988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
// 			// 'https://images.unsplash.com/photo-1550317138-10000687a72b?q=80&w=1840&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
// 		],
// 	},
// 	{
// 		category: '漢堡',
// 		content: '生菜、咔啦雞腿排、小圓麵包',
// 		description: 'Sit down please 名設計師設計',
// 		is_enabled: 1,
// 		origin_price: 139,
// 		price: 119,
// 		title: '咔啦雞腿漢堡',
// 		unit: '個',
// 		num: 80,
// 		imageUrl: 'https://images.unsplash.com/photo-1692737349870-e3bfc704ebf9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
// 	},
// 	{
// 		category: '飲品',
// 		content: '鮮奶、蜂蜜',
// 		description: 'Sit down please 名設計師設計',
// 		is_enabled: 1,
// 		origin_price: 70,
// 		price: 55,
// 		title: '冰封鮮奶',
// 		unit: '杯',
// 		num: 150,
// 		imageUrl: '主圖網址',
// 	},
// 	{
// 		category: '飲品',
// 		content: '紅茶、奶精、糖',
// 		description: 'Sit down please 名設計師設計',
// 		is_enabled: 1,
// 		origin_price: 50,
// 		price: 40,
// 		title: '早安奶茶',
// 		unit: '杯',
// 		num: 200,
// 		imageUrl: 'https://images.unsplash.com/photo-1563090308-5a7889e40542?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
// 	},
// 	{
// 		category: '沙拉、開胃菜',
// 		content: '當季蔬果',
// 		description: 'Sit down please 名設計師設計',
// 		is_enabled: 1,
// 		origin_price: 80,
// 		price: 70,
// 		title: '時蔬沙拉',
// 		unit: '盤',
// 		num: 100,
// 		imageUrl: 'https://images.unsplash.com/photo-1568897799017-b89dfc71ebd7?q=80&w=2057&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
// 	},
// 	{
// 		category: '點心、炸物',
// 		content: '現炸薯條',
// 		description: 'Sit down please 名設計師設計',
// 		is_enabled: 1,
// 		origin_price: 65,
// 		price: 50,
// 		title: '	',
// 		unit: '份',
// 		num: 120,
// 		imageUrl: 'https://images.unsplash.com/photo-1688912738914-162395536e10?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjgzfHxmcmVuY2glMjBmcmllc3xlbnwwfHwwfHx8MA%3D%3DZ',
// 	},
// 	{
// 		category: '衣服2',
// 		content: '這是內容',
// 		description: 'Sit down please 名設計師設計',
// 		is_enabled: 1,
// 		origin_price: 100,
// 		price: 600,
// 		title: '[賣]動物園造型衣服3',
// 		unit: '個',
// 		num: 1,
// 		imageUrl: '主圖網址',
// 	},
// 	{
// 		category: '衣服2',
// 		content: '這是內容',
// 		description: 'Sit down please 名設計師設計',
// 		is_enabled: 1,
// 		origin_price: 100,
// 		price: 600,
// 		title: '[賣]動物園造型衣服3',
// 		unit: '個',
// 		num: 1,
// 		imageUrl: '主圖網址',
// 	},
// 	{
// 		category: '衣服2',
// 		content: '這是內容',
// 		description: 'Sit down please 名設計師設計',
// 		is_enabled: 1,
// 		origin_price: 100,
// 		price: 600,
// 		title: '[賣]動物園造型衣服3',
// 		unit: '個',
// 		num: 1,
// 		imageUrl: '主圖網址',
// 	},
// 	{
// 		category: '衣服2',
// 		content: '這是內容',
// 		description: 'Sit down please 名設計師設計',
// 		is_enabled: 1,
// 		origin_price: 100,
// 		price: 600,
// 		title: '[賣]動物園造型衣服3',
// 		unit: '個',
// 		num: 1,
// 		imageUrl: '主圖網址',
// 	},
// ];