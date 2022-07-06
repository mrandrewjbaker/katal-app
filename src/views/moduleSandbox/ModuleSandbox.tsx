import { useState } from 'react';
import Switch from "react-switch";
import styles from './moduleSandbox.module.scss';



export const ModuleSandbox: React.FC = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div className={styles.moduleSandbox}>
      <h1>ModuleSandbox</h1>
      <div className={styles.moduleSandbox_container}>
        <div className={styles.moduleSandbox_block}>
          
        </div>

        <div className={styles.moduleSandbox_block}>
        <label>
          <Switch 
            onChange={setChecked} 
            checked={checked}
            checkedIcon={false}
            uncheckedIcon={false} 
          />
        </label>
        </div>
      </div>
    </div>
  );
}