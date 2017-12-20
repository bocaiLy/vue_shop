/**
 * Created by Administrator on 2017/12/13.
 */

import Mock from 'mockjs';

export default Mock.mock(
    'http://bocai.cn/goods', {
        'list':[
            {
                "goods_salenum|1-1000":1,//销售数量
                "goods_brokerage|1-10":1,//佣金
                "goods_click|1-100":1,//点赞
                "goods_id": 1,
                "goods_img":[
                    "http://static.home.mi.com/app/shop/img?id=shop_8dec2f08e5dd9d08b440f77a36e39e16.png&w=420&h=240&crop=a_90_0_240_240",
                    "http://static.home.mi.com/app/shop/img?id=shop_86f01fa8cea034deb1dce44c0385baab.png&w=420&h=240&crop=a_0_120_1080_480&t=png"
                ],
                "goods_market_price|20-50": 1,//市场价
                "goods_name": '@cword(4,18)',//名称
                "goods_price|50-100": 1,//价格
                "goods_stock|50-100":1,//库存
                "goods_size":"1公斤",//规格
                "goods_profit|1-10":1,//收益
                "goods_detail":1,//详情
                "goods_parameter":'@cword(10,80)',//参数
                "goods_service":'@cword(10,80)',//客服

            },
            {
                "goods_salenum|1-1000":2,//销售数量
                "goods_brokerage|1-10":1,//佣金
                "goods_click|1-100":1,//点赞
                "goods_id": 2,
                "goods_img": [
                    "http://static.home.mi.com/app/shop/img?id=shop_48ebe9e693ade1766877e0f8adf425f7.png&w=420&h=240&crop=a_90_0_240_240",
                    "http://static.home.mi.com/app/shop/img?id=shop_86f01fa8cea034deb1dce44c0385baab.png&w=420&h=240&crop=a_0_120_1080_480&t=png"
                ],
                "goods_market_price|20-50": 1,//市场价
                "goods_name": '@cword(4,18)',//名称
                "goods_price|50-100": 1,//价格
                "goods_stock|50-100":1,//库存
                "goods_size":"2公斤",//规格
                "goods_profit|1-10":1,//收益
                "goods_detail":2,//详情
                "goods_parameter":'@cword(10,80)',//参数
                "goods_service":'@cword(10,80)',//客服

            },
            {
                "goods_salenum|1-1000":3,//销售数量
                "goods_brokerage|1-10":1,//佣金
                "goods_click|1-100":1,//点赞
                "goods_id": 3,
                "goods_img": [
                    "http://static.home.mi.com/app/shop/img?id=shop_0b23f4b364ee73bc86b280cc7397638c.jpg&w=420&h=240&crop=a_90_0_240_240",
                    "http://static.home.mi.com/app/shop/img?id=shop_86f01fa8cea034deb1dce44c0385baab.png&w=420&h=240&crop=a_0_120_1080_480&t=png"
                ],
                "goods_market_price|20-50": 1,//市场价
                "goods_name": '@cword(4,18)',//名称
                "goods_price|50-100": 1,//价格
                "goods_stock|50-100":1,//库存
                "goods_size":"3公斤",//规格
                "goods_profit|1-10":1,//收益
                "goods_detail":3,//详情
                "goods_parameter":'@cword(10,80)',//参数
                "goods_service":'@cword(10,80)',//客服

            },
            {
                "goods_salenum|1-1000":4,//销售数量
                "goods_brokerage|1-10":1,//佣金
                "goods_click|1-100":1,//点赞
                "goods_id": 4,
                "goods_img": [
                    "http://static.home.mi.com/app/shop/img?id=shop_1e29af11fa83139dd305d61cb83c94ac.jpeg&w=420&h=240&crop=a_90_0_240_240",
                    "http://static.home.mi.com/app/shop/img?id=shop_86f01fa8cea034deb1dce44c0385baab.png&w=420&h=240&crop=a_0_120_1080_480&t=png"
                ],
                "goods_market_price|20-50": 1,//市场价
                "goods_name": '@cword(4,18)',//名称
                "goods_price|50-100": 1,//价格
                "goods_stock|50-100":1,//库存
                "goods_size":"4公斤",//规格
                "goods_profit|1-10":1,//收益
                "goods_detail":4,//详情
                "goods_parameter":'@cword(10,80)',//参数
                "goods_service":'@cword(10,80)',//客服

            },
        ]
    }
);
