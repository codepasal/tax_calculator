{/* <script> */}
        function calculations (){
        /* Using javascript */
              var allowanceValue = document.getElementById("medicalAllowance").value;
              /* Using jquery */
              // var allowanceValue = $("#medicalAllowance").val();
              var basicValue = document.getElementById("basicSalary").value;

              var sum = parseInt(allowanceValue) + parseInt(basicValue);
              console.log(sum);

              var yearlyIncome = sum * 12;
              console.log(yearlyIncome);

              $("#total").text(sum);
              $("#yearly-income").text(yearlyIncome);
              // console.log (taxRate);
              // $("#yearly-tax").text(taxRate);
              // taxRateMonthly= taxRate / 12;
              // $('#monthly-tax').text (taxRateMonthly);

}
        // var individualTax = document.getElementById('single').value == true;
        // console.log(individual);

        // var coupleTax= document.getElementById('married').value == true;
        // console.log(couple);

        
        function individual() {
           /* Using javascript */
        var allowanceValue = document.getElementById("medicalAllowance").value;
        /* Using jquery */
        // var allowanceValue = $("#medicalAllowance").val();
        var basicValue = document.getElementById("basicSalary").value;

        var sum = parseInt(allowanceValue) + parseInt(basicValue);
        console.log(sum);

        var yearlyIncome = sum * 12;
        console.log(yearlyIncome);

        $("#total").text(sum);
        $("#yearly-income").text(yearlyIncome);

        // Slab1
        if (yearlyIncome <= 400000) {
            taxRate = 0.01*yearlyIncome;
        }
        // Slab 2
        else if (yearlyIncome >400000 && yearlyIncome <= 500000) {
          taxRate = 4000+( yearlyIncome - 400000) * 0.1;
        }
        //Slab 3
        else if (yearlyIncome >500000 && yearlyIncome <= 700000) {
          taxRate = 4000+10000 + (yearlyIncome - 500000) * 0.2;
        }
        //Slab 4
        else if (yearlyIncome >700000 && yearlyIncome <= 2000000) {
         taxRate = 4000+10000+ 40000 + (yearlyIncome - 700000) * 0.3;
        }

        //Slab 5
        else if (yearlyIncome >2000000){
         taxRate = 4000 + 10000 + 40000 + 390000 + (yearlyIncome - 2000000) * 0.36;
        }
        
        // var taxTotal = document.getElementById ('yearly-tax').value;
        console.log (taxRate);
        $("#yearly-tax").text(taxRate);
        taxRateMonthly= taxRate / 12;
        $('#monthly-tax').text (taxRateMonthly);
        }
        
    
      function couple() {
       /* Using javascript */
        var allowanceValue = document.getElementById("medicalAllowance").value;
        /* Using jquery */
        // var allowanceValue = $("#medicalAllowance").val();
        var basicValue = document.getElementById("basicSalary").value;

        var sum = parseInt(allowanceValue) + parseInt(basicValue);
        console.log(sum);

        var yearlyIncome = sum * 12;
        console.log(yearlyIncome);

        $("#total").text(sum);
        $("#yearly-income").text(yearlyIncome);

        // Slab1
        if (yearlyIncome <= 450000) {
            taxRate = 0.01*yearlyIncome;
        }
        // Slab 2
        else if (yearlyIncome >450000 && yearlyIncome <= 550000) {
          taxRate = 4500+( yearlyIncome - 450000) * 0.1;
        }
        //Slab 3
        else if (yearlyIncome >550000 && yearlyIncome <= 750000) {
          taxRate = 4500+10000 + (yearlyIncome - 550000) * 0.2;
        }
        //Slab 4
        else if (yearlyIncome >750000 && yearlyIncome <= 2000000) {
         taxRate = 4500+10000+ 40000 + (yearlyIncome - 750000) * 0.3;
        }

        //Slab 5
        else if (yearlyIncome >2160000){
         taxRate = 4500 + 10000 + 40000 + 375000 + (yearlyIncome - 2000000) * 0.36;
        }
        
        // var taxTotal = document.getElementById ('yearly-tax').value;
        console.log (taxRate);
        $("#yearly-tax").text(taxRate);
        taxRateMonthly= taxRate / 12;
        $('#monthly-tax').text (taxRateMonthly);
        }
        

      
      
      
    // </script>

