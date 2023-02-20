const outlier = arr =>{
    let odd = []
    let even = []
    for (i = 0; i < arr.length; i++){
        if (arr[i] % 2 === 0){
            even.push(arr[i])
        }else{  odd.push(arr[i])
            }
        }
            let evLen = even.length
            let odLen = odd.length
            if (odLen < evLen){
                return odd[0]
            }else return even[0]
        }
    


console.log(outlier([2, 4, 0, 100, 4, 11, 2602, 36]))