import "./NutritionLabel.css"

export const NutritionLabel = (props) => {
    let totalNutrients = props.nutritionInfo.totalNutrients
    let totalDaily = props.nutritionInfo.totalDaily
  return (
    <div class="col-12">
      <section class="performance-facts" id="performance-facts">
        <div class="performance-facts__header">
          <h1 class="performance-facts__title">Nutrition Facts</h1>
          <p>
            <span id="lnumser">0</span> servings per container
          </p>
        </div>
        <table class="performance-facts__table">
          <thead>
            <tr>
              <th colspan="3" class="amps">
                Amount Per Serving
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th colspan="2" id="lkcal-val-cal">
                <b>Calories</b>
              </th>
              <td class="nob"></td>
            </tr>{props.nutritionInfo.calories}
            <tr class="thick-row">
              <td colspan="3" class="small-info">
                <b>% Daily Value*</b>
              </td>
            </tr>
            <tr>
              <th colspan="2">
                <b>Total Fat</b> {totalNutrients.FAT.quantity} g
              </th>
              <td>
                <b>{totalDaily.FAT.quantity} %</b>
              </td>
            </tr>
            <tr>
              <td class="blank-cell"></td> 
              <th>Saturated Fat {totalNutrients.FASAT.quantity} g</th>{" "}
              <td>
                <b>{totalDaily.FASAT.quantity} %</b>
              </td>{" "}
            </tr>{" "}
            <tr>
              {" "}
              <td class="blank-cell"></td> <th>Trans Fat -</th> <td></td>{" "}
            </tr>{" "}
            <tr>
              {" "}
              <th colspan="2">
                <b>Cholesterol</b> 0 mg
              </th>{" "}
              <td>
                <b>0 %</b>
              </td>{" "}
            </tr>{" "}
            <tr>
              {" "}
              <th colspan="2">
                <b>Sodium</b> 70 mg
              </th>{" "}
              <td>
                <b>3 %</b>
              </td>{" "}
            </tr>{" "}
            <tr>
              {" "}
              <th colspan="2">
                <b>Total Carbohydrate</b> 333.2 g
              </th>{" "}
              <td>
                <b>111 %</b>
              </td>{" "}
            </tr>{" "}
            <tr>
              {" "}
              <td class="blank-cell"></td> <th>Dietary Fiber 34.6 g</th>{" "}
              <td>
                <b>138 %</b>
              </td>{" "}
            </tr>{" "}
            <tr>
              {" "}
              <td class="blank-cell"></td> <th>Total Sugars 30.3 g</th>{" "}
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
                <b>Protein</b> 70.9 g
              </th>{" "}
              <td>
                <b>142 %</b>
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
              <th>Vitamin D 0 µg</th>{" "}
              <td>
                <b>0 %</b>
              </td>{" "}
            </tr>{" "}
            <tr>
              {" "}
              <th>Calcium 179.1 mg</th>{" "}
              <td>
                <b>18 %</b>
              </td>{" "}
            </tr>{" "}
            <tr>
              {" "}
              <th>Iron 13.8 mg</th>{" "}
              <td>
                <b>77 %</b>
              </td>{" "}
            </tr>{" "}
            <tr class="thin-end">
              {" "}
              <th>Potassium 2203.2 mg</th>{" "}
              <td>
                <b>47 %</b>
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
