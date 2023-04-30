import { FC } from "react";
import { Page } from "../../components/page/Page";
import { PageTitle } from "../../components/page/pageTitle/PageTitle";
import { CategoryData, useGetProductsCategory } from "../../services/categories";
import { ProductsGrid } from "../../components/product/productsGrid";

interface CategoryProps {
  category: CategoryData
}

const Category: FC<CategoryProps> = ({ category }) => {
  const products = useGetProductsCategory(category)

  return (
    <Page>
      <PageTitle title={category} />
      <ProductsGrid productsQuery={products} />
    </Page>
  )
}

export default Category