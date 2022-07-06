import styles from './setupWalkthrough.module.scss';

export const SetupWalkthrough: React.FC = () => {
  return (
    <div className={styles.setupWalkthrough}>
      <h1>Setup Walkthrough</h1>
      <form className={styles.setupWalkthrough_form}>

        <label className={styles.setupWalkthrough_formLabel}>
          Organization name:
          <input type="text" className={styles.setupWalkthrough_formInput}/>
        </label>

        <label className={styles.setupWalkthrough_formLabel}>
          Admin email:
          <input type="text" className={styles.setupWalkthrough_formInput}/>
        </label>

        <label className={styles.setupWalkthrough_formLabel}>
          Admin phone:
          <input type="text" className={styles.setupWalkthrough_formInput}/>
        </label>

        <label className={styles.setupWalkthrough_formLabel}>
          Company type:
          <select className={styles.setupWalkthrough_formInput}>
            <option value="1">Services</option>
            <option value="2">Products</option>
            <option value="3">Both</option>
          </select>
        </label>

        <label className={styles.setupWalkthrough_formLabel}>
          Company size:
          <select className={styles.setupWalkthrough_formInput}>
            <option value="1">1-10</option>
            <option value="2">11-50</option>
            <option value="3">51-100</option>
            <option value="4">101-500</option>
            <option value="5">501-1000</option>
            <option value="6">1001+</option>
          </select>
        </label>

        <label className={styles.setupWalkthrough_formLabel}>
          Company industry:
          <select className={styles.setupWalkthrough_formInput}>
            <option value="1">Automobiles and Components</option>
            <option value="2">Banks</option>
            <option value="3">Capital Goods</option>
            <option value="4">Commercial and Professional Services</option>
            <option value="5">Consumer Durables and Apparel</option>
            <option value="6">Consumer Services</option>
            <option value="7">Diversified Financials</option>
            <option value="8">Energy</option>
            <option value="9">Food, Beverage, and Tobacco</option>
            <option value="10">Food and Staples Retailing</option>
            <option value="11">Health Care Equipment and Services</option>
            <option value="12">Household and Personal Products</option>
            <option value="13">Insurance</option>
            <option value="14">Materials</option>
            <option value="15">Media and Entertainment</option>
            <option value="16">Pharmaceuticals, Biotechnology, and Life Sciences</option>
            <option value="17">Real Estate</option>
            <option value="18">Retailing</option>
            <option value="19">Semiconductors and Semiconductor Equipment</option>
            <option value="20">Software and Services</option>
            <option value="21">Technology Hardware and Equipment</option>
            <option value="22">Telecommunications Services</option>
            <option value="23">Transportation</option>
            <option value="24">Utilities</option>
          </select>
        </label>

        <button className={styles.setupWalkthrough_formButton}>
          <span className={styles.setupWalkthrough_text}>Next</span>
        </button>
      </form>
    </div>
  );
}