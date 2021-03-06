/**
 * Created by apple on 2017/3/30.
 * 公共的js方法
 */
let commonFun = {
    /**
     * 生成length位 m~n 之间的随机数数组
     * 
     * @param   m      [description]
     * @param   n      [description]
     * @param   length [description]
     * @return array        [description]
     */
    randonm :  ( m , n , length ) => {
        let arr = [];
        let a = m > n ? m : n;
        let b = a === m ? n : m;
        for (let i = 0; i < length ; i++){
            arr[i] = Math.round(Math.random() * (a - b ) + b);
        }
        return arr;
    },
    /**
     * 两个div互换位置
     * @param div_1_id
     * @param div_2_id
     */
    swapDiv :  ( div_1_id ,div_2_id ) => {
        let t = document.getElementById(div_1_id).innerHTML;
        document.getElementById(div_1_id).innerHTML=document.getElementById( div_2_id ).innerHTML;
        document.getElementById(div_2_id).innerHTML=t;
    },

    /**
     * 两个div互换数据
     * @param div_1_id
     * @param div_2_id
     */
    swapValue :  ( div_1_id ,div_2_id ) => {
        let value1 = $('#' + div_1_id).children().text();
        let value2 = $('#' + div_2_id).children().text();
        $('#' + div_1_id).width(value2+'%');
        $('#' + div_1_id).children().text(value2);
        $('#' + div_2_id).width(value1+'%');
        $('#' + div_2_id).children().text(value1);
    },


};

/**
 * 排序类
 * @type {{}}
 */
let sorts = {
    /**
     * 冒泡排序
     * @param data 要排序的数组
     * @param bool true 升序，false 降序
     * @param callback 回调函数
     * @returns {*} array 排序后的数组
     */
    bubbleSort : ( data , bool , callback ) => {
        let length = data.length;
        for (  let i = 0 ; i < length ; i++ ){
            for ( let j = 0 ; j < length - i - 1 ; j++ ){
                let flag = bool ? data[ j ] > data[ j + 1 ] : data[ j ] < data[ j + 1 ] ;
                if ( flag ){
                    let temp = data[ j ];
                    data[ j ] = data [ j + 1 ] ;
                    data [ j + 1] = temp;
                    if( typeof callback === 'function' ){
                        // callback( j , j + 1 , 'div' );
                        callback( j , j + 1 , 'length' );
                    }
                }
            }
        }
        return data;
    },

    /**
     * 选择排序
     * @param data 要排序的数组
     * @param bool bool true 升序，false 降序
     * @param callback 回调函数
     * @returns {*} array 排序后的数组
     */
    selectionSort : ( data , bool , callback ) => {
        let length = data.length;
        for ( let i = 0 ; i < length ; i++ ){
            for ( let j = i + 1 ; j < length ; j++ ){
                let flag = bool ? data[ i ] > data[ j ] : data[ i ] < data[ j ] ;
                if ( flag ){
                    let temp = data[ i ];
                    data [ i ] = data [ j ];
                    data [ j ] = temp;
                    if( typeof callback === 'function' ){
                        callback( i , j , 'div' );
                    }
                }
            }
        }
        return data;
    }
};

/**
 * 供排序使用的回调函数
 * @param i
 * @param j
 * @param name
 */
let count = 0;
let sortCallback = (i , j , name) => {
    let div_1 = name + '_' + i;
    let div_2 = name + '_' + j;
    setTimeout(()=> {
        // commonFun[ 'swapDiv' ]( div_1 , div_2 );
        commonFun[ 'swapValue' ]( div_1 , div_2 );
    }, ++count * 200);
};