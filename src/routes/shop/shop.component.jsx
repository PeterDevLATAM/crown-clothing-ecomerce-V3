import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoriesMap } from '../../store/category/categories.action';
import { selectCategories } from '../../store/category/categories.selector';


const Shop = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments('categories');
      //dispatch
      dispatch(setCategoriesMap(categoryMap))
    };

    getCategoriesMap();
  }, []);

  const categoriesMap= useSelector(selectCategories)
  console.log("categories", categoriesMap)
  return (
    <Routes>
      <Route index element={<CategoriesPreview categoriesMap={categoriesMap} />} />
      <Route path=':category' element={<Category categoriesMap={categoriesMap} />} />
    </Routes>
  );
};

export default Shop;
