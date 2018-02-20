class FallBackStorage {

    getItem(key, fallBack){
        return new Promise((resolve, reject) => {
            try{
                let result = localStorage.getItem(key);
                if(!!result){
                    resolve(result)
                }else{
                    fallBack().then((result)=>{
                        resolve(result)
                    }).catch((e) =>{
                        reject(e);
                    })
                }
            }catch(e){
                try{
                    fallBack().then((result)=>{
                        resolve(result)
                    }).catch((e) =>{
                        reject(e);
                    })
                }catch (e){
                    reject(e);
                }
            }
        });
    }

    setItem(key, value){
        return new Promise((resolve, reject) => {
            try{
                localStorage.setItem(key, value)
                resolve(true);
            }catch(e){
                reject(e);
            }
        });
    }

    removeItem(key){
        return new Promise((resolve, reject) => {
            try{
                localStorage.removeItem(key)
                resolve(true);
            }catch(e){
                reject(e);
            }
        });
    }

    clear(){
        return new Promise((resolve, reject) => {
            try{
                localStorage.clear()
                resolve(true);
            }catch(e){
                reject(e);
            }
        });
    }

    key(key){
        return new Promise((resolve, reject) => {
            try{
                resolve(localStorage.key(key));
            }catch(e){
                reject(e);
            }
        });
    }

}