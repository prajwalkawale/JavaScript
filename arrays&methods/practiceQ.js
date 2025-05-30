/* For a given array with of students ->[85,97,44,37,76,60]
   find the average marks of the entire class. */

   let stu=[85,97,44,37,76,60];
   let sum=0;
   for(let i=0;i<stu.length;i++){
    sum = sum+stu[i];
   }

   let total = sum/stu.length;
   console.log(`the average marks of the students is : ${total}`);

   /* For a given array with prices of 5 items -> [250,645,300,900,50] all items have an 
      offer of 10% OFF on them. Change the array to store final price after applying offer */

      let items=[250,645,300,900,50];
     
      for(let i=0;i<items.length;i++){
        let discotAmount = items[i]/10;
        items[i]=items[i]-discotAmount;
        console.log("the new array : ",items[i]);
      } 

      console.log(items);