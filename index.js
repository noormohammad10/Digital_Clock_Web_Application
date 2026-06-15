setInterval(date,1000)
       function date(){
         const date = new Date();
            let a= date.getHours();
            let b= date.getMinutes();
            let c= date.getSeconds();
            document.getElementById("hour").innerHTML=a +":";
            document.getElementById("minute").innerHTML=b+":";
            document.getElementById("second").innerHTML=c;
            let ampm= document.getElementById("ampm");

            
            const container=document.getElementById("container");
            if(a>=19){
                container.style.backgroundImage="url('https://plus.unsplash.com/premium_photo-1671336757490-1249b2ccb020?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fG5pZ2h0JTIwc2t5JTIwd2FsbHBhcGVyfGVufDB8fDB8fHww')";
                container.style.backgroundRepeat="no-repeat";
                container.style.backgroundSize="cover";
                container.style.backgroundPosition="center";
            }

            else{
                container.style.backgroundImage="url('https://images.unsplash.com/photo-1606936371696-1aaed0f115ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fG1vcm5pbmd8ZW58MHx8MHx8fDA%3D')";
                container.style.backgroundRepeat="no-repeat";
                container.style.backgroundSize="cover";
                container.style.backgroundPosition="center";
            }
             if(a>=12){
                    ampm.innerHTML="PM"
                }
                else{
                    ampm.innerHTML="AM"
                }
       };