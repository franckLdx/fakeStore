import { FC } from "react";
import BrandImage from '/fakeStore.png';
import { useNavigateToHome } from "../../../routing/hooks";

import styles from './fakeStoreBrand.module.scss';

export const FakeStoreBrand: FC = () => {
  const navigateToHome = useNavigateToHome()

  return (
    <div className={styles.fakeStoreBrand} onClick={navigateToHome}>
      <h1>Fake Store</h1>
      <img className={styles.brandImage} src={BrandImage} alt="Fake store brand" />
    </div>
  )
}