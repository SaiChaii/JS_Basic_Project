class person
{
    constructor(name,age)
    {
        this.name=name;
        this.age=age;
    }
}
const data = [
    { name: "Item 1", age: "1" },
    { name: "Item 2", age: "2" },
    { name: "Item 3", age: "3" }
    ];
    data.push({name: "Item 4", age: "4"});
window.onload = function()
{
    const x = 20;
    const y = 5;
    const z = x * y;
    //debugger;
    //console.log(z);
    document.getElementById("test").innerHTML = z;
};

function msg(){  
    alert("Hello This is an Alert Box");  
   } 

   function viewall()
   {

       const container = document.getElementById("container");
       //const fhtml=``;
       for (let i = 0; i < data.length; i++) {
       const item = data[i];
       const html =` 
           <div style="border: 1px solid #ccc; padding: 10px; width: 200px ; margin: 20px auto; text-align: center ; justify-content: center ; background-color: #4d4b46; color: #f9f9f9; border-radius: 2px;">
           <p> Name :${item.name} , Age :${item.age}</p>
           </div>
       `;
       //fhtml+=html;
       container.innerHTML += html;
       }
       //container.innerHTML += fhtml;
   }

   function sel()
   {
        const t=prompt("Enter values between 1 to 5");
        console.log(typeof(t));
        switch(t)
        {
            case "1":
                viewall();
                break;
            case "2":
                addnew();
                break;
            case "3":
                count();
                break;
            case "4":
                latest();
                break;
            case "5":
                dellast();
                break;
            default:
                alert("Enter valid value ( 1 to 5)");
                break;
        }
        
   }

   function addnew()
   {
       let Name = prompt("Please enter your name:");
       let Age = prompt("Please enter your age:");
       let p1 =new person(Name,Age);
       console.log(p1.name);
       console.log(p1.age);
       data.push(p1);
   }

   function count()
   {
        const ans=`
        <div style="border: 1px solid #ccc; padding: 10px; width: 160px; margin: 20px auto; background-color: #4d4b46; color: #f9f9f9; border-radius: 2px; text-align: center ; justify-content: center ;">
           <p> Count :${data.length} </p>
           </div>`;
       document.getElementById("count").innerHTML+=ans;
   }

   function latest()
   {
    const ans=`
    <div style="border: 1px solid #ccc; padding: 10px; width: 160px; margin: 20px auto; background-color: #4d4b46; color: #f9f9f9; border-radius: 2px; text-align: center ; justify-content: center;">
    <p> Name :${data[data.length-1].name} , Age: ${data[data.length-1].age}</p>
    <p> ${data}</p>
    </div>`;
    document.getElementById("latest").innerHTML+=ans;
   }
   
   function dellast()
   {
    const t=confirm("Do you really want to delete the last input ?");
    if(t===true)
    {
        if(data.length===0)
        {
            alert("No element left to delete");
        }
        else{
            data.pop();
            alert("Deletion Successful");
        }
    }
    else{
        alert("Be vary next time !");
    }
   }
