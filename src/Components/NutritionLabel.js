import "./NutritionLabel.scss"
const DEC_PT = 1
export const NutritionLabel = (props) => {
    let totalNutrients = props.nutritionInfo.totalNutrients
    let totalDaily = props.nutritionInfo.totalDaily
  return (
    <div class="col-12" style={{margin:"auto",display:"block", width: "350px"}}>
      <section class="performance-facts" id="performance-facts">
        <div class="performance-facts__header">
          <h1 class="performance-facts__title">Nutrition Facts</h1>
          <p>
            <span id="lnumser">1</span> servings per container
          </p>
        </div>
        <table class="performance-facts__table">
          <thead>
            <tr>
              <th colspan="4" class="amps">
                Amount Per Serving
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th colspan="1" id="lkcal-val-cal">
                Calories
              </th>
              <td class="nob">{props.nutritionInfo.calories}</td>
            </tr>
            <tr class="thick-row">
              <td colspan="2" class="small-info">
                <b>% Daily Value*</b>
              </td>
            </tr>
            <tr>
              <th colspan="2">
                <b>Total Fat</b> {round(totalNutrients.FAT.quantity,DEC_PT)} g
              </th>
              <td>
                <b>{round(totalDaily.FAT.quantity,DEC_PT)} %</b>
              </td>
            </tr>
            <tr>
              <td class="blank-cell"></td> 
              <th>Saturated Fat {round(totalNutrients.FASAT.quantity,DEC_PT)} g</th>{" "}
              <td>
                <b>{round(totalDaily.FASAT.quantity,DEC_PT)} %</b>
              </td>{" "}
            </tr>{" "}
            <tr>
              {" "}
              <td class="blank-cell"></td> <th>Trans Fat -</th> <td></td>{" "}
            </tr>{" "}
            <tr>
              {" "}
              <th colspan="2">
                <b>Cholesterol</b> {round(totalNutrients.CHOLE.quantity,DEC_PT)} mg
              </th>{" "}
              <td>
                <b>{round(totalDaily.CHOLE.quantity,DEC_PT)} %</b>
              </td>{" "}
            </tr>{" "}
            <tr>
              {" "}
              <th colspan="2">
                <b>Sodium</b> {round(totalNutrients.NA.quantity,DEC_PT)} mg
              </th>{" "}
              <td>
                <b>{round(totalDaily.NA.quantity,DEC_PT)} %</b>
              </td>{" "}
            </tr>{" "}
            <tr>
              {" "}
              <th colspan="2">
                <b>Total Carbohydrate</b> {round(totalNutrients.CHOCDF.quantity,DEC_PT)} g
              </th>{" "}
              <td>
                <b>{round(totalDaily.CHOCDF.quantity,DEC_PT)} %</b>
              </td>{" "}
            </tr>{" "}
            <tr>
              {" "}
              <td class="blank-cell"></td> <th>Dietary Fiber {round(totalNutrients.FIBTG.quantity,DEC_PT)} g</th>{" "}
              <td>
                <b>{round(totalDaily.FIBTG.quantity,DEC_PT)} %</b>
              </td>{" "}
            </tr>{" "}
            <tr>
              {" "}
              <td class="blank-cell"></td> <th>Total Sugars {round(totalNutrients.SUGAR.quantity,DEC_PT)} g</th>{" "}
              <td></td>{" "}
            </tr>{" "}
            <tr>
              {" "}
              <td class="blank-cell"></td> <th>Includes - Added Sugars</th>{" "}
              <td></td>{" "}
            </tr>{" "}
            <tr class="thick-end">
              {" "}
              <th colspan="2">
                <b>Protein</b> {round(totalNutrients.PROCNT.quantity,DEC_PT)} g
              </th>{" "}
              <td>
                <b>{round(totalDaily.PROCNT.quantity,DEC_PT)} %</b>
              </td>{" "}
            </tr>{" "}
          </tbody>{" "}
        </table>{" "}
        <table class="performance-facts__table--grid">
          {" "}
          <tbody>
            {" "}
            <tr>
              {" "}
              <th>Vitamin D {round(totalNutrients.VITD.quantity,DEC_PT)} µg</th>{" "}
              <td>
                <b>{round(totalDaily.VITD.quantity,DEC_PT)} %</b>
              </td>{" "}
            </tr>{" "}
            <tr>
              {" "}
              <th>Calcium {round(totalNutrients.CA.quantity,DEC_PT)} mg</th>{" "}
              <td>
                <b>{round(totalDaily.CA.quantity,DEC_PT)} %</b>
              </td>{" "}
            </tr>{" "}
            <tr>
              {" "}
              <th>Iron {round(totalNutrients.FE.quantity,DEC_PT)} mg</th>{" "}
              <td>
                <b>{round(totalDaily.FE.quantity,DEC_PT)} %</b>
              </td>{" "}
            </tr>{" "}
            <tr>
              {" "}
              <th>Potassium {round(totalNutrients.K.quantity,DEC_PT)} mg</th>{" "}
              <td>
                <b>{round(totalDaily.K.quantity,DEC_PT)} %</b>
              </td>{" "}
            </tr>{" "}
          </tbody>{" "}
        </table>{" "}
        <p class="small-info" id="small-nutrition-info">
          *Percent Daily Values are based on a 2000 calorie diet
        </p>
      </section>
    </div>
  );
};

function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}
