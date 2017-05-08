//NOTES
//link  salestaxrates key value with coompanysalesdata provine key value bc

//TOTAL SALES
//add sales in both telus and add sales of bomb
//return sales in new object key value


//TOTAL TAXES
//x3 //lookup by province , tally saleskey  x  province num , return



// sales added per province
                                                // add values in array <3
                                                // store that sum
// taxes calculated per local total sales
                                                // determine proper taxRate
                                                  // use province value to summon the taxRate <3
                                                // sum * taxRate<3
                                                // store that tax
// ------
// repeat
                                                // iterate through the object
// see if companies are repated -> join them
                                                // create a new object, storing SINGLE ocurrences of company


/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/

/* intermediate results:
{
  Telus@BC: {
    totalSales: 700
    totalTaxes: 87833949239838973
  },
  Telus@SK: {
    totalSales: 600
    totalTaxes: 39879837498237983
  },
  Bombardier@AB: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/

var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
]

function salesTotal(arr){
  var sum = 0;
  for(var i = 0; i < arr.length; i++) {
    sum += arr[i]
    //console.log(i, '- sum thus far is', sum);
  }
  //console.log('salesTotal', sum);
  return sum;
}

function taxRate(rates, prov){
  //console.log('taxRate', prov, rates[prov]);
  return rates[prov];
}

function taxTotal(taxRate, salesTotal){
  //console.log('taxTotal', taxRate, salesTotal);
  return taxRate * salesTotal;
}

function calculateSalesTax(salesData, taxRates) {
  var totals = {};
  for(var company of salesData){
    //console.log('calculateSalesTax is iterating', company.name, 'in', company.province);
    if (!totals[company.name]) {
      //console.log('creating record');
      totals[company.name] = {
        totalSales: 0,
        totalTaxes: 0
      }
    } else { console.log(company.name, 'is already there... adding these totals'); }
    totals[company.name].totalSales += salesTotal(company.sales);
    totals[company.name].totalTaxes += taxTotal( taxRate(salesTaxRates, company.province), salesTotal(company.sales) );

  }
  return totals;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);
