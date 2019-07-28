        //Clear the console
        console.clear();
        //UI Vars
        var encryptFirstText=document.getElementById('encryptfirsttext');
        var decryptFirstText=document.getElementById('decryptfirsttext');
        var encryptSecondText=document.getElementById('encryptsecondtext');
        var decryptSecondText=document.getElementById('decryptsecondtext');
        var encryptBtn=document.getElementById('encryptbtn');
        var decryptBtn=document.getElementById('decryptbtn');

        //Add Enter Event Listener
        encryptFirstText.addEventListener('keypress',returnkeyForEncrypt);
        encryptSecondText.addEventListener('keypress',returnkeyForDecrypt);
        encryptBtn.addEventListener('click',encryption);
        decryptBtn.addEventListener('click',decryption);

        //Function Return key
        function returnkeyForEncrypt(e){
            if(e.keyCode===13){
                encryption();
            }
        }
        function returnkeyForDecrypt(e){
            if(e.keyCode===13){
                decryption();
            }
        }

        //Encryption Button 
        function encryption(){
            if(encryptFirstText.value==''){
                let alert=document.createElement('p');
                alert.className="alert alert-danger py-2";
                alert.appendChild(document.createTextNode('Please Enter a text'));
                document.querySelector('.form-group').insertBefore(alert,encryptFirstText);
                // console.log(alert);
                setTimeout(function(){
                    document.querySelector('.alert').remove();
                },2500);
            }
            else if(localStorage.getItem(encryptFirstText.value)!==null){
                decryptFirstText.value=localStorage.getItem(encryptFirstText.value);
            }
            else{
                // decryptFirstText.value="not Found!";
                decryptFirstText.value=generateRandomText();
                localStorage.setItem(encryptFirstText.value,decryptFirstText.value);
            }
        }

        //Generate Random Text
        function generateRandomText(){
            let totalno=30;
            let letters="123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*-=_+?/><.,";
            // console.log(letters.length);
            let randomtext="";
            let randomletter;
            for(let i=0;i<totalno;i++){
                randomletter=letters[Math.floor(Math.random()*53)];
                randomtext+=randomletter;
            }
            return randomtext;            
        }

        //Decryption Button
        function decryption(){
            if(encryptSecondText.value==''){
                let alert=document.createElement('p');
                alert.className="alert alert-danger py-2";
                alert.appendChild(document.createTextNode('Please Enter a Encryption Text'));
                document.querySelector('.last-form-group').insertBefore(alert,encryptSecondText);
                // console.log(alert);
                setTimeout(function(){
                    document.querySelector('.alert').remove();
                },2500);
            }
            else{
                let findOrNot=false;
                let keyValue;
                let originalKey;
                for(let j=0;j<localStorage.length;j++){
                    keyValue=(localStorage.getItem(localStorage.key(j)));
                    // console.log(keyValue);  
                    if(keyValue==encryptSecondText.value){
                        originalKey=localStorage.key(j);
                        findOrNot=true;
                        break;
                    }
                }
                if(findOrNot){
                    decryptSecondText.value=originalKey;
                }
                else{
                    decryptSecondText.value="Not Valid!";
                }
            }
            
            
        }
