import { FC } from "react";
import { Page } from "../../components/page/Page";
import { PageTitle } from "../../components/page/pageTitle/PageTitle";
import { ProductsContainer } from "../../components/product/productsContainer/productsContainer";
import { CategoryData, useGetProductsCategory } from "../../services/categories";

interface CategoryProps {
  category: CategoryData
}

const Category: FC<CategoryProps> = ({ category }) => {
  const products = useGetProductsCategory(category)

  return (
    <Page>
      <PageTitle title={category} />
      <ProductsContainer productsQuery={products} />
    </Page>
  )
}

export default Category