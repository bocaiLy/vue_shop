/**
 * Created by Administrator on 2017/12/13.
 */

import Mock from 'mockjs';

export default Mock.mock(
    'http://bocai.cn/goods', {
        'list|8':[
            {
                "common_cubage":2.3,
                "common_salenum":39,
                "goods_click":32,
                "goods_id|+1": 1,
                "goods_img": "http://shop.aliwap.cn/image.php/media/9fe51f56c355518ce1d8ad8a094f8232/10008/3/image/20170327/1490600065871740.jpg!360x360",
                "goods_market_price|1-100": 1,
                "goods_name": '@cword(4,8)',
                "goods_price|1-100": 1,
                "goods_stock":999,
                "goods_size":"5公斤"
            }
        ]
    }
);
