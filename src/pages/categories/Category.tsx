import { FC } from "react";
import { Page } from "../../components/page/Page";
import { PageTitle } from "../../components/pageTitle/PageTitle";
import { ProductsContainer } from "../../components/productsContainer/productsContainer";
import { CategoryData, useGetProductsCategory } from "../../services/categories";

interface CategoryProps {
  category: CategoryData
}

const Category: FC<CategoryProps> = ({ category }) => {
  const products = useGetProductsCategory(category)

  return (
    <Page>
      <PageTitle title={category} />
      <ProductsContainer products={products} />
    </Page>
  )
}

export default Category