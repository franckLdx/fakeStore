import { FC } from "react";
import { Link } from "react-router-dom";
import { getCategoryRoute } from "../../pages/categories/routesHelpers";
import { CategoryData } from "../../services/categories";

import styles from './navigationItem.module.scss';

interface NavigationItemProps {
  category: CategoryData
}

export const NavigationItem: FC<NavigationItemProps> = ({ category }) => (
  <Link className={styles.navigationItem} to={getCategoryRoute(category)}>{category}</Link>
)